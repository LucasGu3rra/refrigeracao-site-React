import { getWhatsAppUrl, PHONE_URL } from '../config/contact';
import { trackContactEvent } from '../utils/contactEvents';

export function WhatsAppLink({ service = 'Orcamento', placement, children, onClick, ...props }) {
  return (
    <a {...props} href={getWhatsAppUrl(service)} target="_blank" rel="noopener noreferrer"
      onClick={(event) => { trackContactEvent('whatsapp_click', placement, service); onClick?.(event); }}>
      {children}
    </a>
  );
}

export function PhoneLink({ placement, service = 'Orcamento', children, onClick, ...props }) {
  return (
    <a {...props} href={PHONE_URL} onClick={(event) => { trackContactEvent('phone_click', placement, service); onClick?.(event); }}>
      {children}
    </a>
  );
}
