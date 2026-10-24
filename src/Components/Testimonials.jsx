import React, { useEffect, useRef } from 'react';

// Links do Google
const WRITE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=ChIJoyD33vD3zpQRawlwf_Lw5k4`;
const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Refrigeration+Company/@-23.4992457,-46.6163818,17z/data=!4m8!3m7!1s0x94cef7f0def720a3:0x4ee6f0f27f70096b!8m2!3d-23.4992457!4d-46.6163818!9m1!1b1!16s%2Fg%2F11xyc1xl3_?entry=ttu&g_ep=EgoyMDI1MTEzMC4wIKXMDSoASAFQAw%3D%3D';

// Ícone do Google (SVG Original Colorido)
const GoogleIcon = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
  </svg>
);

// Lista de Avaliações
const realReviews = [
    {
      name: "Agatha Gabriella",
      date: "2 meses atrás",
      text: "O serviço foi feito direitinho e sem enrolação. O técnico foi atencioso e explicou tudo certinho. O resultado ficou como eu esperava e funcionou bem. Fiquei satisfeita com o trabalho e o cuidado da equipe!",
      rating: 5,
      avatar: "P"
    },
    {
      name: "Gabriel Lima",
      date: "2 meses atrás",
      text: "Arrumaram minha câmara fria rápido e sem complicação. Funcionando direitinho agora. Atendimento tranquilo. Fiquei satisfeito com o serviço",
      rating: 5,
      avatar: "G"
    },
    {
      name: "Fernando AGFilho",
      date: "3 meses atrás",
      text: "Profissionais excelentes. Resolveram o problema do meu ar condicionado que ninguém descobria. Recomendo de olhos fechados.",
      rating: 5,
      avatar: "F"
    },
    {
      name: "Mario Augusto Almeida",
      date: "uma mês atrás",
      text: "Empresa excelente , ótimos profissionais e atendimento 5 estrelas.",
      rating: 5,
      avatar: "C"
    },
    {
      name: "Nurimar Aparecida",
      date: "um mês atrás",
      text: "Mbom ...gostei muito do serviço...atencioso..e perfeito",
      rating: 5,
      avatar: "M"
    },
    {
      name: "gopal pandaram",
      date: "2 meses atrás",
      text: "Pontual e otimo atendimento",
      rating: 5,
      avatar: "R"
    },
    {
      name: "natalia fernandes",
      date: "2 meses atrás",
      text: "Super indico",
      rating: 5,
      avatar: "J"
    },
    {
      name: "Junior Brito",
      date: "2 horas atrás",
      text: "Ótimo preço e grande profissional",
      rating: 5,
      avatar: "A"
    },
    {
      name: "Anttonio Rodrigues",
      date: "4 horas atrás",
      text: "Excelente! 👏🏾👏🏾👏🏾 …",
      rating: 5,
      avatar: "C"
    },
    {
      name: "Marlene Nogueira Schinaider",
      date: "um meses atrás",
      rating: 5,
      avatar: "R"
    },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  // Auto-Scroll Suave
  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

        // Loop infinito suave
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
           scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
           // Rola a largura de um card (320px) + gap (16px) = 336px
           scrollContainer.scrollBy({ left: 336, behavior: 'smooth' });
        }
      }
    }, 3500); // 3.5 segundos por card

    return () => clearInterval(scrollInterval);
  }, []);

  const StarRating = ({ count }) => (
    <span className="text-[#Fbbc04] text-sm tracking-tighter">{'★'.repeat(Math.round(count))}</span>
  );

  return (
    <section className="py-16 bg-white border-b border-gray-100 overflow-hidden">

      {/* CSS para esconder scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center gap-8">

            {/* 1. BLOCO FIXO (ESQUERDA) */}
            <div className="w-full md:w-[300px] flex-shrink-0 bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 relative z-10 text-center md:text-left h-[300px] flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">Avaliações</h2>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <span className="text-4xl font-bold text-gray-900">4,8</span>
                    <div className="flex flex-col items-start">
                        <span className="text-[#Fbbc04] text-xl">★★★★★</span>
                        <span className="text-xs text-gray-500">Nota no Google</span>
                    </div>
                </div>
                <p className="text-gray-500 text-sm mb-6">
                    Baseado nas avaliações de nossos clientes reais.
                </p>

                <a href={WRITE_REVIEW_URL} target="_blank" rel="noreferrer" className="block w-full">
                    <button className="w-full py-3 bg-[#1a73e8] hover:bg-blue-700 text-white font-medium rounded-lg transition shadow-md">
                        Escreva sua Avaliação
                    </button>
                </a>
                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="block mt-4 text-center text-[#1a73e8] text-sm hover:underline">
                    Ver todas no Maps
                </a>
            </div>

            {/* 2. CARROSSEL DE CARDS (DIREITA) */}
            <div className="w-full overflow-hidden relative">
                <div className="flex overflow-x-auto gap-4 hide-scrollbar py-4 px-2 snap-x snap-mandatory" ref={scrollRef}>
                    {realReviews.map((review, index) => (
                        <div key={index} className="bg-white min-w-[300px] md:min-w-[320px] p-5 rounded-xl shadow-md border border-gray-200 snap-start flex flex-col select-none h-[220px]">

                            {/* Cabeçalho: Avatar + Nome + Google Icon */}
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold bg-gray-500 text-lg`}>
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-gray-900">{review.name}</p>
                                    </div>
                                </div>
                                {/* Ícone G Colorido Aqui */}
                                <GoogleIcon />
                            </div>

                            {/* Estrelas */}
                            <div className="mb-2"><StarRating count={review.rating} /></div>

                            {/* Texto */}
                            <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                                "{review.text}"
                            </p>

                            {/* BOTÕES REMOVIDOS CONFORME PEDIDO */}

                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}