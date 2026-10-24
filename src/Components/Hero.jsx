import heroImage from '../assets/images/hero-refrigeracao.jpg';
import residentialImage from '../assets/services/geladeira.webp';
import commercialImage from '../assets/services/camara.webp';
import { WhatsAppLink, PhoneLink } from './ContactLinks';

export default function Hero({ page }) {
  const service = page?.service || 'Orcamento';
  const image = service === 'Residencial' ? residentialImage : service === 'Comercial' ? commercialImage : heroImage;
  return (
    <section id="hero" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={image} alt="" fetchPriority="high" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/65" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-5 py-2 bg-blue-600 text-white font-bold text-sm rounded-full mb-6 shadow-lg">
            ❄️ {page?.badge || 'ESPECIALISTAS EM REFRIGERAÇÃO'}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            {page?.title || <>Refrigeração <span className="text-blue-400">Residencial e Comercial</span> em São Paulo</>}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            {page?.description || 'Instalação, manutenção e conserto de geladeiras, freezers, ar-condicionado, câmaras frias e equipamentos comerciais e industriais. Fale com nossa equipe e solicite seu atendimento.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppLink service={service} placement="hero" className="w-full sm:w-auto px-6 py-4 bg-[#25D366] hover:bg-[#1da851] text-gray-950 font-bold rounded-lg shadow-xl transition-all text-base sm:text-lg">
              {page?.cta || 'Pedir atendimento no WhatsApp'}
            </WhatsAppLink>
            <PhoneLink service={service} placement="hero" className="w-full sm:w-auto px-6 py-4 border-2 border-white/50 text-white font-bold rounded-lg hover:bg-white/10 transition-all">
              Ligar: (11) 92004-4158
            </PhoneLink>
          </div>
          <p className="mt-5 text-sm text-gray-200">Segunda a sexta, 8h às 18h · Sábado, 8h às 12h</p>
        </div>
      </div>
    </section>
  );
}
