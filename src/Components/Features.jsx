import React from 'react';

export default function Features() {
  const features = [
    { title: "Consulte a disponibilidade", desc: "Informe seu bairro e o problema para combinar o atendimento com a equipe." },
    { title: "Condições de garantia", desc: "Confirme as condições e a cobertura da garantia no orçamento do serviço." },
    { title: "Conte sobre o equipamento", desc: "Informe marca e modelo para confirmar o atendimento ao seu equipamento." },
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