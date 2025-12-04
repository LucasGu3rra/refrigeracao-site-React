import React, { useState } from 'react';
import logoImg from '../assets/logo.jpg'; // Certifique-se que o caminho está certo

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsMenuOpen(false); // Fecha o menu ao clicar
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800 transition-all duration-300">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <img src={logoImg} alt="Logo" className="h-12 w-auto object-contain" />
        </div>

        {/* MENU DESKTOP (Escondido no Mobile) */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('hero')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Início</button>
          <button onClick={() => scrollToSection('servicos')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Serviços</button>
          <button onClick={() => scrollToSection('contato')} className="px-5 py-2.5 bg-brand-blue hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Pedir Orçamento
          </button>
        </nav>

        {/* BOTÃO HAMBÚRGUER (Visível apenas no Mobile) */}
        <button 
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* MENU MOBILE (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-gray-900 border-b border-gray-800 shadow-xl py-4 flex flex-col items-center gap-4 animation-fade-in-down">
          <button onClick={() => scrollToSection('hero')} className="w-full py-3 text-center text-gray-300 font-medium hover:bg-gray-800">Início</button>
          <button onClick={() => scrollToSection('servicos')} className="w-full py-3 text-center text-gray-300 font-medium hover:bg-gray-800">Serviços</button>
          <button onClick={() => scrollToSection('contato')} className="w-3/4 py-3 bg-brand-blue text-white font-bold rounded-lg shadow-md mx-auto">
            Pedir Orçamento
          </button>
        </div>
      )}
    </header>
  );
}