import React from 'react';
// Importando o logotipo que está na sua pasta assets
import logoImg from '../assets/logo.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Grid de 3 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Coluna 1: Logo e Sobre */}
          <div>
            {/* LOGOTIPO DA EMPRESA (Substituindo o texto) */}
            <div className="mb-6">
              <img 
                src={logoImg} 
                alt="Refrigeration Company" 
                className="h-16 w-auto object-contain" // Ajuste de altura para ficar proporcional
              />
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              Referência em climatização e refrigeração comercial e industrial. Qualidade, confiança e rapidez no atendimento em toda São Paulo.
            </p>
            
            <div className="flex gap-4">
                {/* Link do Instagram Atualizado */}
                <a href="https://www.instagram.com/refrigerationcompany/?g=5" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors group">
                  <svg className="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.148 3.225-1.667 4.771-4.919 4.919-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-3.225-.148-4.771-1.667-4.919-4.919C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.069-4.85C2.38 3.925 3.901 2.38 7.15 2.233 8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.756 0 8.332.014 7.052.072 2.75.267.267 2.75.072 7.052.014 8.332 0 8.756 0 12s.014 3.668.072 4.948c.195 4.302 2.672 6.785 6.98 6.98C8.332 23.986 8.756 24 12 24s3.668-.014 4.948-.072c4.302-.195 6.785-2.672 6.98-6.98.058-1.28.072-1.704.072-4.948s-.014-3.668-.072-4.948c-.195-4.302-2.672-6.785-6.98-6.98C15.668.014 15.244 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
                </a>
                {/* Facebook removido conforme solicitado */}
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Navegação</h3>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('hero')} className="hover:text-brand-blue transition-colors text-sm text-left">Início</button></li>
              <li><button onClick={() => scrollToSection('servicos')} className="hover:text-brand-blue transition-colors text-sm text-left">Nossos Serviços</button></li>
              <li><button onClick={() => scrollToSection('contato')} className="hover:text-brand-blue transition-colors text-sm text-left">Solicitar Orçamento</button></li>
              <li><span className="text-gray-500 text-sm cursor-not-allowed">Política de Privacidade</span></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Fale Conosco</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-blue mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span className="text-sm leading-relaxed">
                  R. Conselheiro Saraiva, 1077<br/>Santana, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:11920044158" className="text-lg font-bold text-white hover:text-brand-blue transition-colors">
                  (11) 92004-4158
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:contato@refrigerationcompany.com.br" className="text-sm hover:text-brand-blue transition-colors">
                  contato@refrigerationcompany.com.br
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:text-left md:flex justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Refrigeration Company. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido por Lucas Maranhão.</p>
        </div>

      </div>
    </footer>
  );
}