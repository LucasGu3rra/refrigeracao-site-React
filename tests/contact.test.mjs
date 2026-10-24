import test from 'node:test';
import assert from 'node:assert/strict';
import { WHATSAPP_URL, PHONE_URL, SERVICE_LABELS, getWhatsAppUrl, buildContactMessage, isValidOptionalPhone } from '../src/config/contact.js';
import { trackContactEvent } from '../src/utils/contactEvents.js';
import { getAttributionSearch } from '../src/utils/attribution.js';

// No Google requests or real messages are sent by these tests.
test('all service links use the approved number and a single encoded message', () => {
  assert.equal(WHATSAPP_URL, 'https://wa.me/5511920044158');
  assert.equal(PHONE_URL, 'tel:+5511920044158');
  for (const service of Object.keys(SERVICE_LABELS)) {
    const url = new URL(getWhatsAppUrl(service));
    assert.equal(url.origin + url.pathname, WHATSAPP_URL);
    assert.deepEqual([...url.searchParams.keys()], ['text']);
    assert.ok(url.searchParams.get('text').includes('disponibilidade'));
  }
});

test('empty optional form creates a usable draft without empty personal fields', () => {
  const message = buildContactMessage();
  assert.match(message, /^Olá! Preciso de atendimento técnico em refrigeração\./);
  assert.match(message, /Meu bairro \/ cidade é:/);
  assert.doesNotMatch(message, /undefined|null|Nome:|WhatsApp para retorno:|Endereço:/);
});

test('partial form includes only supplied details and keeps message characters intact', () => {
  const fields = { nome: '  Pessoa Teste  ', bairro: 'Bairro Teste', descricao: 'Não gela & faz ruído? #teste\nLinha 2' };
  const url = new URL(getWhatsAppUrl('Geladeira', fields));
  const message = url.searchParams.get('text');
  assert.match(message, /Nome: Pessoa Teste\n/);
  assert.match(message, /Bairro \/ cidade: Bairro Teste/);
  assert.ok(message.includes(fields.descricao));
  assert.doesNotMatch(message, /WhatsApp para retorno:/);
  assert.equal(url.hash, '');
  assert.equal([...url.searchParams].length, 1);
});

test('unknown service cannot inject arbitrary data into the service identifier', () => {
  assert.equal(buildContactMessage('cliente@example.com'), buildContactMessage('Orcamento'));
});

test('telephone is optional and validates supplied Brazilian contact formats', () => {
  for (const phone of ['', ' ', '(11) 92004-4158', '1133334444', '+55 (11) 92004-4158']) {
    assert.equal(isValidOptionalPhone(phone), true, phone);
  }
  for (const phone of ['123', 'abc11920044158', '++++++++++', '++5511920044158', '999999999999999999999']) {
    assert.equal(isValidOptionalPhone(phone), false, phone);
  }
});

test('each interaction queues exactly one distinct event without customer data or query parameters', () => {
  globalThis.window = { location: { pathname: '/conserto-geladeira', search: '?nome=Pessoa&utm_source=google' }, dataLayer: [] };
  for (const event of ['whatsapp_click', 'phone_click', 'whatsapp_form_redirect']) {
    const count = window.dataLayer.length;
    trackContactEvent(event, 'form', 'Residencial');
    assert.equal(window.dataLayer.length, count + 1);
    assert.deepEqual(window.dataLayer.at(-1), {
      event, contact_placement: 'form', service_id: 'Residencial', page_path: '/conserto-geladeira',
    });
  }
  trackContactEvent('form_submit', 'form', 'Residencial');
  assert.equal(window.dataLayer.length, 3);
});

test('unknown paths and identifiers are redacted from analytics payloads', () => {
  globalThis.window = { location: { pathname: '/private-customer-name' }, dataLayer: [] };
  trackContactEvent('whatsapp_click', 'customer@example.com', 'private message');
  assert.deepEqual(window.dataLayer[0], {
    event: 'whatsapp_click', contact_placement: 'unknown', service_id: 'Orcamento', page_path: 'other',
  });
});

test('missing or blocked analytics never prevents the contact interaction', () => {
  globalThis.window = { location: { pathname: '/' } };
  assert.doesNotThrow(() => trackContactEvent('phone_click', 'footer'));
  assert.equal(window.dataLayer.length, 1);
  window.dataLayer = { push() { throw new Error('blocked tag'); } };
  assert.doesNotThrow(() => trackContactEvent('whatsapp_click', 'hero'));
});

test('internal navigation preserves supported attribution and excludes other URL fields', () => {
  const result = new URLSearchParams(getAttributionSearch('?utm_source=google&utm_campaign=frio%20SP&gclid=test&gbraid=b&wbraid=w&nome=Pessoa&telefone=123&text=secreto'));
  assert.deepEqual([...result], [['utm_source', 'google'], ['utm_campaign', 'frio SP'], ['gclid', 'test'], ['gbraid', 'b'], ['wbraid', 'w']]);
  assert.equal(getAttributionSearch('?nome=Pessoa'), '');
  assert.equal(getAttributionSearch(''), '');
});
