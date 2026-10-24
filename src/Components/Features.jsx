import { WhatsAppLink } from './ContactLinks';
import residentialImage from '../assets/services/geladeira.webp';
import commercialImage from '../assets/services/expositor.webp';

const audiences = [
  { id: 'residencial', service: 'Residencial', title: 'Cuidado com os equipamentos da sua casa.', label: 'Atendimento residencial', description: 'Geladeira que não gela, freezer com falha ou ar-condicionado precisando de manutenção? Fale diretamente com nossa equipe para avaliar seu pedido e combinar o atendimento.', items: ['Geladeiras e refrigeradores', 'Freezers horizontais e verticais', 'Ar-condicionado e climatização'], image: residentialImage, cta: 'Solicitar atendimento residencial' },
  { id: 'comercial', service: 'Comercial', title: 'Refrigeração para a rotina do seu negócio.', label: 'Atendimento comercial e industrial', description: 'Instalação, manutenção preventiva e reparos para os equipamentos da sua empresa. Conte o que precisa e converse sobre a solução com nossa equipe.', items: ['Câmaras frias e balcões refrigerados', 'Cervejeiras, expositores e freezers', 'Climatização, chillers e sistemas industriais'], image: commercialImage, cta: 'Solicitar atendimento comercial' },
];

export default function Features() {
  return <section className="bg-white py-16 sm:py-24">
    <div className="container mx-auto px-4 space-y-12">
      {audiences.map((audience, index) => <article id={audience.id} key={audience.id} className="grid md:grid-cols-2 rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
        <img src={audience.image} alt={audience.label} loading="lazy" width="640" height="360" className={'w-full h-64 md:h-full object-cover ' + (index === 1 ? 'md:order-2' : '')} />
        <div className="p-6 sm:p-10 lg:p-12">
          <p className="text-blue-700 text-xs font-bold tracking-widest uppercase mb-4">{audience.label}</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">{audience.title}</h2>
          <p className="text-slate-600 leading-relaxed mb-5">{audience.description}</p>
          <ul className="space-y-3 mb-7 text-slate-700">{audience.items.map(item => <li key={item} className="flex gap-3"><span className="text-blue-600" aria-hidden="true">✓</span>{item}</li>)}</ul>
          <WhatsAppLink service={audience.service} placement="service_card" className="inline-flex justify-center px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#1da851] text-gray-950 font-bold">{audience.cta}</WhatsAppLink>
        </div>
      </article>)}
    </div>
  </section>;
}
