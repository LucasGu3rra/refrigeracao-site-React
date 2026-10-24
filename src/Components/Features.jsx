import { WhatsAppLink } from './ContactLinks';

const audiences = [
  { service: 'Residencial', title: 'Para sua casa', description: 'Conserto, instalação e manutenção de geladeiras, freezers e ar-condicionado. Conte o que precisa e combine o atendimento diretamente com nossa equipe.', cta: 'Atendimento residencial' },
  { service: 'Comercial', title: 'Para sua empresa', description: 'Câmaras frias, balcões, cervejeiras, expositores, freezers, climatização e sistemas industriais. Atendimento para manutenção preventiva, reparos e instalação.', cta: 'Atendimento comercial' },
];

export default function Features() {
  return (
    <section className="py-16 bg-white border-b border-gray-100" aria-labelledby="audiences-title">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 id="audiences-title" className="text-3xl font-bold text-gray-900 text-center mb-4">Atendimento para residências e empresas</h2>
        <p className="text-center text-gray-600 mb-8">Do equipamento da sua casa aos sistemas do seu negócio. Envie seu pedido pelo WhatsApp.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map(audience => (
            <article key={audience.service} className="rounded-xl border border-gray-200 p-6 sm:p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-brand-blue mb-3">{audience.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{audience.description}</p>
              <WhatsAppLink service={audience.service} placement="service_card" className="inline-flex justify-center rounded-lg bg-[#25D366] hover:bg-[#1da851] text-gray-950 font-bold px-5 py-3">{audience.cta}</WhatsAppLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
