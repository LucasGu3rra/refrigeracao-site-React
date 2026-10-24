

// IMPORTANDO AS IMAGENS LOCAIS
import brastempImg from '../assets/brands/brastemp.svg';
import consulImg from '../assets/brands/consul.svg';
import electroluxImg from '../assets/brands/electrolux.svg';
import fujitsuImg from '../assets/brands/fujitsu.svg';
import greeImg from '../assets/brands/gree.svg';
import lgImg from '../assets/brands/lg.svg';
import mideaImg from '../assets/brands/midea.svg';
import samsungImg from '../assets/brands/samsung.svg';

const brands = [
  { name: "Brastemp", logo: brastempImg },
  { name: "Consul", logo: consulImg },
  { name: "Electrolux", logo: electroluxImg },
  { name: "Samsung", logo: samsungImg },
  { name: "LG", logo: lgImg },
  { name: "Midea", logo: mideaImg },
  { name: "Fujitsu", logo: fujitsuImg },
  { name: "Gree", logo: greeImg },
];

export default function BrandsCarousel() {
  return <section className="py-12 bg-white border-t border-slate-100"><div className="container mx-auto px-4"><p className="text-center uppercase text-xs tracking-widest font-semibold text-slate-500 mb-8">Atendimento a diferentes marcas e modelos</p><div className="grid grid-cols-4 md:grid-cols-8 items-center gap-6">{brands.map(brand => <img key={brand.name} src={brand.logo} alt={brand.name} loading="lazy" width="128" height="48" className="h-9 sm:h-12 w-full object-contain" />)}</div></div></section>;
}
