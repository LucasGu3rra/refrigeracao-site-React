// Latest conversion destination supplied by the account owner on 24/10/2026.
// This measures an outbound WhatsApp click, not a sent message or completed job.
export const GOOGLE_ADS_WHATSAPP_SEND_TO = 'AW-17045665288/hPdoCJ_ktJwcEIjsgMA_';

export function reportWhatsAppConversion() {
  try {
    if (typeof window.gtag !== 'function') return false;
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_WHATSAPP_SEND_TO,
      transport_type: 'beacon',
    });
    return true;
  } catch {
    // Tracking must never block WhatsApp when a tag or network is unavailable.
    return false;
  }
}
