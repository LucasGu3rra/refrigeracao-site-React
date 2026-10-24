import test from 'node:test';
import assert from 'node:assert/strict';
import { GOOGLE_ADS_WHATSAPP_SEND_TO, reportWhatsAppConversion } from '../src/utils/googleAds.js';
import { trackContactEvent } from '../src/utils/contactEvents.js';

function createWindow() {
  const calls = [];
  globalThis.window = {
    location: { pathname: '/refrigeracao-comercial', search: '?nome=Pessoa&utm_source=google' },
    dataLayer: [],
    gtag: (...args) => calls.push(args),
  };
  return calls;
}

test('configuration or page visits do not trigger a conversion', () => {
  const calls = createWindow();
  assert.equal(calls.length, 0);
  for (const event of ['page_view', 'gtm.js', 'form_submit', 'phone_click']) {
    trackContactEvent(event, 'hero', 'Comercial');
  }
  assert.equal(calls.length, 0);
});

test('one WhatsApp click sends exactly one conversion to the latest supplied action', () => {
  const calls = createWindow();
  trackContactEvent('whatsapp_click', 'hero', 'Comercial');
  assert.deepEqual(calls, [['event', 'conversion', {
    send_to: 'AW-17045665288/hPdoCJ_ktJwcEIjsgMA_', transport_type: 'beacon',
  }]]);
  assert.equal(window.dataLayer.length, 1);
});

test('a valid optional form redirects to WhatsApp using the same Ads action once', () => {
  const calls = createWindow();
  trackContactEvent('whatsapp_form_redirect', 'form', 'Comercial');
  assert.equal(calls.length, 1);
  assert.equal(calls[0][2].send_to, GOOGLE_ADS_WHATSAPP_SEND_TO);
  assert.equal(window.dataLayer[0].event, 'whatsapp_form_redirect');
});

test('subsequent deliberate clicks are tracked individually, without duplicate calls per click', () => {
  const calls = createWindow();
  trackContactEvent('whatsapp_click', 'header', 'Comercial');
  trackContactEvent('whatsapp_click', 'service_card', 'CamaraFria');
  assert.equal(calls.length, 2);
});

test('conversion payload never contains customer fields, URLs or invented revenue', () => {
  const calls = createWindow();
  trackContactEvent('whatsapp_click', 'Pessoa Teste', 'cliente@example.com');
  assert.deepEqual(Object.keys(calls[0][2]).sort(), ['send_to', 'transport_type']);
  assert.doesNotMatch(JSON.stringify(calls), /Pessoa|cliente@|utm_source|page_location|value|currency/);
});

test('missing or blocked tags cannot prevent contact', () => {
  createWindow();
  delete window.gtag;
  assert.equal(reportWhatsAppConversion(), false);
  assert.doesNotThrow(() => trackContactEvent('whatsapp_click', 'hero', 'Comercial'));
  window.gtag = () => { throw new Error('blocked tag'); };
  assert.equal(reportWhatsAppConversion(), false);
  assert.doesNotThrow(() => trackContactEvent('whatsapp_form_redirect', 'form', 'Comercial'));
});

test('a failed diagnostic dataLayer does not block the Google tag call', () => {
  const calls = createWindow();
  window.dataLayer = { push() { throw new Error('blocked layer'); } };
  trackContactEvent('whatsapp_click', 'hero', 'Comercial');
  assert.equal(calls.length, 1);
});
