import { getServiceId } from '../config/contact.js';
import { reportWhatsAppConversion } from './googleAds.js';

const EVENTS = new Set(['whatsapp_click', 'phone_click', 'whatsapp_form_redirect']);
const WHATSAPP_EVENTS = new Set(['whatsapp_click', 'whatsapp_form_redirect']);
const PAGES = new Set(['/', '/conserto-geladeira', '/refrigeracao-comercial', '/politica-de-privacidade']);
const PLACEMENTS = new Set(['hero', 'header', 'header_mobile', 'service_card', 'form_direct', 'form', 'footer', 'floating', 'mobile_bar']);

// Only fixed identifiers reach GTM. Never pass form values or the WhatsApp URL.
export function trackContactEvent(event, placement, service = 'Orcamento') {
  if (!EVENTS.has(event)) return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      contact_placement: PLACEMENTS.has(placement) ? placement : 'unknown',
      service_id: getServiceId(service),
      page_path: PAGES.has(window.location.pathname) ? window.location.pathname : 'other',
    });
  } catch {
    // A blocked or unavailable tag must never prevent contact.
  }
  // Called only by interaction handlers, never by page load or React effects.
  // Use one delivery path: do not also fire this Ads action from the GTM events above.
  if (WHATSAPP_EVENTS.has(event)) reportWhatsAppConversion();
}
