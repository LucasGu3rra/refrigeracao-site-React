import React from 'react';

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
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">
          Especialistas nas Principais Marcas
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        
        {/* Degradês laterais mantidos para suavizar */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex w-[200%] animate-scroll hover:pause">
          
          {/* GRUPO 1 */}
          <div className="flex w-1/2 justify-around items-center gap-8 px-4">
            {brands.map((brand, index) => (
              // REMOVIDO: grayscale, hover:grayscale-0, opacity-60, hover:opacity-100
              // MANTIDO: transform hover:scale-110 para um leve efeito de "zoom"
              <div key={`brand-1-${index}`} className="flex items-center justify-center w-32 h-20 transition-all duration-500 transform hover:scale-110 cursor-pointer">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`} 
                  className="max-w-full max-h-12 object-contain" 
                />
              </div>
            ))}
          </div>

          {/* GRUPO 2 (Duplicado) */}
          <div className="flex w-1/2 justify-around items-center gap-8 px-4">
            {brands.map((brand, index) => (
              // REMOVIDO: grayscale, hover:grayscale-0, opacity-60, hover:opacity-100
              <div key={`brand-2-${index}`} className="flex items-center justify-center w-32 h-20 transition-all duration-500 transform hover:scale-110 cursor-pointer">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`} 
                  className="max-w-full max-h-12 object-contain" 
                />
              </div>
            ))}
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}