import React from 'react';

export default function Features() {
  const features = [
    { title: "Atendimento Rápido", desc: "Chegamos até você o mais breve possível para não deixar seus alimentos estragarem." },
    { title: "Garantia de 90 Dias", desc: "Todo serviço prestado possui garantia legal de 3 meses para sua segurança." },
    { title: "Técnicos Certificados", desc: "Profissionais treinados e especializados nas principais marcas do mercado." },
    { title: "Preço Justo", desc: "Orçamento transparente sem taxas escondidas ou surpresas na hora de pagar." },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mb-4">
                ✓
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}