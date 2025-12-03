import React from 'react';

// Função auxiliar para rolar
const scrollToForm = () => {
  const formSection = document.getElementById('contato');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hero() {
  return (
    <section id="hero" className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Texto Hero */}
          <div className="lg:w-1/2 text-center lg:text-left z-10">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-brand-blue font-bold text-sm rounded-full mb-6 border border-blue-100 shadow-sm">
              ❄️ Especialistas em Refrigeração
            </div>
            
            {/* Ajuste Responsivo de Fonte: text-4xl no mobile, text-6xl no PC */}
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Soluções Técnicas para <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-600">
                Climatização e Frio.
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Instalação e manutenção de sistemas residenciais e comerciais. Chillers, câmaras frias, ar condicionado e linha branca com quem entende do assunto.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-xl shadow-lg hover:shadow-green-200/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Solicitar Orçamento Técnico
              </button>
              
              <button 
                onClick={() => document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-100 text-gray-700 font-bold rounded-xl hover:border-brand-blue hover:text-brand-blue transition-all"
              >
                Nossas Especialidades
              </button>
            </div>

            {/* Selos de Confiança Mobile Friendly */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap justify-center lg:justify-start gap-6 text-gray-500 text-sm font-medium">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Garantia de 90 Dias
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Atendimento Rápido
              </span>
            </div>
          </div>

          {/* Imagem Hero (Oculta ou Ajustada no Mobile?) 
              No mobile a imagem vai para baixo do texto automaticamente pelo flex-col */}
          <div className="lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop" 
              alt="Técnico de Refrigeração" 
              className="relative rounded-2xl shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 z-10"
            />
          </div>

        </div>
      </div>
    </section>
  );
}