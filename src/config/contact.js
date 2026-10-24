export const WHATSAPP_URL = 'https://wa.me/5511920044158';
export const PHONE_URL = 'tel:+5511920044158';

export const SERVICE_LABELS = {
  Orcamento: 'atendimento técnico em refrigeração',
  Residencial: 'refrigeração e climatização residencial',
  Comercial: 'refrigeração comercial',
  Reparo: 'conserto de equipamento',
  Manutencao: 'manutenção preventiva',
  Instalacao: 'instalação de equipamento',
  Chillers: 'chillers e sistemas industriais',
  CamaraFria: 'câmara fria',
  Expositores: 'expositor, cervejeira ou balcão refrigerado',
  ArCondicionado: 'ar condicionado',
  Geladeira: 'geladeira',
  Freezer: 'freezer',
  FreezerComercial: 'freezer comercial',
};

export function getServiceId(service) {
  return Object.hasOwn(SERVICE_LABELS, service) ? service : 'Orcamento';
}

export function buildContactMessage(service = 'Orcamento', fields = {}) {
  const serviceId = getServiceId(service);
  const lines = [serviceId === 'Orcamento' ? 'Olá! Preciso de atendimento técnico em refrigeração.'
    : `Olá! Preciso de atendimento para ${SERVICE_LABELS[serviceId]}.`];
  const optionalFields = [
    ['Nome', fields.nome],
    ['WhatsApp para retorno', fields.telefone],
    ['Bairro / cidade', fields.bairro],
    ['Equipamento / problema', fields.descricao],
  ];
  for (const [label, value] of optionalFields) {
    if (value?.trim()) lines.push(`${label}: ${value.trim()}`);
  }
  if (!fields.bairro?.trim()) lines.push('Meu bairro / cidade é:');
  if (!fields.descricao?.trim()) lines.push('O equipamento e o problema são:');
  lines.push('Podem me informar a disponibilidade?');
  return lines.join('\n');
}

export function getWhatsAppUrl(service, fields) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(buildContactMessage(service, fields))}`;
}

export function isValidOptionalPhone(value) {
  if (!value.trim()) return true;
  if (!/^\+?[\d\s().-]+$/.test(value)) return false;
  const digits = value.replace(/\D/g, '');
  return [10, 11].includes(digits.length)
    || (digits.startsWith('55') && [12, 13].includes(digits.length));
}
