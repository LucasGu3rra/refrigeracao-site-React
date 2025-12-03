import React from 'react';

// --- IMPORTANDO IMAGENS LOCAIS ---
import chillerImg from '../assets/services/chiller.jpg';
import camaraImg from '../assets/services/camara.jpg'; // Mantendo o correto
import expositorImg from '../assets/services/expositor.jpg';
import arImg from '../assets/services/arcondicionado.jpg';
import geladeiraImg from '../assets/services/geladeira.jpg';
import freezerImg from '../assets/services/freezer.jpg';

const services = [
  { 
    id: "Chillers", // ID que será enviado para o formulário
    title: "Chillers & Industrial", 
    desc: "Manutenção em unidades de água gelada e sistemas centrais.", 
    image: chillerImg 
  },
  { 
    id: "CamaraFria",
    title: "Câmaras Frias", 
    desc: "Montagem e reparo de isolamento e motores de baixa temperatura.", 
    image: camaraImg
  },
  { 
    id: "Expositores",
    title: "Expositores / Bebidas", 
    desc: "Conserto de cervejeiras, ilhas e balcões refrigerados.", 
    image: expositorImg
  },
  { 
    id: "ArCondicionado",
    title: "Ar Condicionado", 
    desc: "Instalação e limpeza de Split, Cassete, Piso Teto e VRF.", 
    image: arImg 
  },
  { 
    id: "Geladeira",
    title: "Geladeiras Inox", 
    desc: "Assistência técnica para linha branca, Side by Side e Inverter.", 
    image: geladeiraImg
  },
  { 
    id: "Freezer",
    title: "Freezers", 
    desc: "Reparo rápido em freezers horizontais e verticais.", 
    image: freezerImg
  },
];

// Recebemos a prop onSelectService
export default function Services({ onSelectService }) {
  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Nossas Especialidades
          </h2>
          <div className="w-20 h-1.5 bg-brand-blue mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm">
            Atuamos com excelência técnica em equipamentos comerciais e industriais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col h-full">
              
              <div className="h-48 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  // Mantendo object-top para mostrar o compressor
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <div className="w-12 h-1 bg-gray-200 group-hover:bg-brand-blue transition-all duration-500 mt-2 rounded-full"></div>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  {service.desc}
                </p>

                <div className="mt-auto">
                    {/* Botão agora aciona a seleção em vez de link direto */}
                    <button 
                      onClick={() => onSelectService(service.id)}
                      className="w-full py-3 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all uppercase tracking-wider flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
                    >
                      Solicitar Orçamento
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}