import heroImage from '../assets/images/hero-refrigeracao.jpg';
import { WhatsAppLink, PhoneLink } from './ContactLinks';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-slate-950 text-white pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-slate-900" />
      <div className="container mx-auto px-4 relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="max-w-2xl">
          <p className="text-blue-300 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase mb-6">Refrigeration Company · São Paulo</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">Refrigeração para sua <span className="text-blue-400">casa e seu negócio.</span></h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">Instalação, manutenção e conserto de geladeiras, freezers, câmaras frias e climatização. Atendimento residencial, comercial e industrial em São Paulo.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <WhatsAppLink placement="hero" className="inline-flex justify-center items-center px-6 py-4 bg-[#25D366] hover:bg-[#1da851] text-gray-950 font-bold rounded-xl transition-colors">Solicitar atendimento no WhatsApp <span aria-hidden="true" className="ml-3">↗</span></WhatsAppLink>
            <PhoneLink placement="hero" className="inline-flex justify-center items-center px-5 py-4 border border-slate-600 rounded-xl font-semibold hover:bg-white/10">Ligar: (11) 92004-4158</PhoneLink>
          </div>
        </div>
        <div className="relative">
          <img src={heroImage} alt="Ferramentas de manutenção em refrigeração" fetchPriority="high" width="1200" height="800" className="w-full h-64 sm:h-80 lg:h-[440px] object-cover rounded-2xl border border-white/10" />
          <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-slate-950/90 p-5 border border-white/10 backdrop-blur-sm">
            <p className="text-white font-bold">Um contato. Diferentes soluções.</p>
            <p className="text-slate-300 text-sm mt-1">Do equipamento doméstico aos sistemas de refrigeração da sua empresa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
