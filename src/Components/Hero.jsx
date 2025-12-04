import React from 'react';
import heroImage from '../assets/images/hero-refrigeracao.jpg';

// Função auxiliar para rolar
const scrollToForm = () => {
  const formSection = document.getElementById('contato');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Imagem de Fundo com Overlay Escuro */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Sistema de Refrigeração" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-block px-5 py-2 bg-blue-600 text-white font-bold text-sm rounded-full mb-6 shadow-lg">
            ❄️ ESPECIALISTAS EM REFRIGERAÇÃO
          </div>
          
          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6">
            Soluções Técnicas para <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Climatização e Frio.
            </span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto px-4">
            Instalação e manutenção de sistemas residenciais e comerciais. Chillers, câmaras frias, ar condicionado e linha branca com quem entende do assunto.
          </p>
          
          {/* Botões */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={scrollToForm}
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-base sm:text-lg"
            >
              Solicitar Orçamento Técnico
            </button>
            
            <button 
              onClick={() => document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-gray/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-lg hover:bg-gray/20 hover:border-white/50 transition-all text-base sm:text-lg"
            >
              Nossas Especialidades
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}