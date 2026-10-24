import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.webp';
import { landingPages } from '../config/landingPages';
import { WhatsAppLink } from './ContactLinks';
import SiteLink from './SiteLink';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const service = landingPages[pathname]?.service || 'Orcamento';
  const sectionPath = pathname === '/politica-de-privacidade' ? '/' : pathname;
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        <SiteLink to="/#hero" onClick={closeMenu} aria-label="Refrigeration Company — início">
          <img src={logoImg} alt="Refrigeration Company" width="96" height="48" className="h-12 w-auto object-contain" />
        </SiteLink>
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <SiteLink to="/conserto-geladeira" className="hover:text-white">Residencial</SiteLink>
          <SiteLink to="/refrigeracao-comercial" className="hover:text-white">Comercial</SiteLink>
          <SiteLink to={`${sectionPath}#contato`} className="hover:text-white">Formulário opcional</SiteLink>
          <WhatsAppLink service={service} placement="header" className="px-5 py-2.5 bg-[#25D366] hover:bg-[#1da851] text-gray-950 font-bold rounded-lg">
            Pedir orçamento no WhatsApp
          </WhatsAppLink>
        </nav>
        <button type="button" className="md:hidden p-2 text-white" aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isMenuOpen} aria-controls="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav id="mobile-menu" aria-label="Navegação no celular" className="md:hidden absolute top-20 left-0 w-full bg-gray-900 border-b border-gray-800 shadow-xl p-4 flex flex-col gap-2 text-center text-white">
          <SiteLink to="/#hero" onClick={closeMenu} className="py-3">Início</SiteLink>
          <SiteLink to="/conserto-geladeira" onClick={closeMenu} className="py-3">Conserto de geladeira</SiteLink>
          <SiteLink to="/refrigeracao-comercial" onClick={closeMenu} className="py-3">Refrigeração comercial</SiteLink>
          <SiteLink to={`${sectionPath}#contato`} onClick={closeMenu} className="py-3">Formulário opcional</SiteLink>
          <WhatsAppLink service={service} placement="header_mobile" onClick={closeMenu} className="py-3 bg-[#25D366] text-gray-950 font-bold rounded-lg">Pedir orçamento no WhatsApp</WhatsAppLink>
        </nav>
      )}
    </header>
  );
}
