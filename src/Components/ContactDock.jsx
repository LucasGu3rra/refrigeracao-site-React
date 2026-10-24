import { useEffect, useState } from 'react';
import { WhatsAppLink, PhoneLink } from './ContactLinks';

export default function ContactDock({ service }) {
  const [formVisible, setFormVisible] = useState(false);
  useEffect(() => {
    const form = document.getElementById('contato');
    if (!form || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting));
    observer.observe(form);
    return () => observer.disconnect();
  }, []);
  return (
    <aside aria-label="Contato rápido">
      {!formVisible && (
        <WhatsAppLink service={service} placement="floating" aria-label="Falar direto pelo WhatsApp" className="hidden md:flex fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#1da851] px-5 py-4 rounded-full shadow-lg text-gray-950 font-bold">
          WhatsApp ↗
        </WhatsAppLink>
      )}
      <div className="mobile-contact-bar md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 p-3 shadow-lg grid grid-cols-2 gap-3">
        <PhoneLink service={service} placement="mobile_bar" className="py-3 text-center font-bold text-brand-blue border border-blue-200 rounded-lg">Ligar agora</PhoneLink>
        <WhatsAppLink service={service} placement="mobile_bar" className="py-3 text-center font-bold text-gray-950 bg-[#25D366] rounded-lg">WhatsApp ↗</WhatsAppLink>
      </div>
    </aside>
  );
}
