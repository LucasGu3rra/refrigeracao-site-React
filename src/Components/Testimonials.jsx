const realReviews = [
    {
      name: "Agatha Gabriella",
      text: "O serviço foi feito direitinho e sem enrolação. O técnico foi atencioso e explicou tudo certinho. O resultado ficou como eu esperava e funcionou bem. Fiquei satisfeita com o trabalho e o cuidado da equipe!",
      rating: 5,
    },
    {
      name: "Gabriel Lima",
      text: "Arrumaram minha câmara fria rápido e sem complicação. Funcionando direitinho agora. Atendimento tranquilo. Fiquei satisfeito com o serviço",
      rating: 5,
    },
    {
      name: "Fernando AGFilho",
      text: "Profissionais excelentes. Resolveram o problema do meu ar condicionado que ninguém descobria. Recomendo de olhos fechados.",
      rating: 5,
    },
    {
      name: "Mario Augusto Almeida",
      text: "Empresa excelente , ótimos profissionais e atendimento 5 estrelas.",
      rating: 5,
    },
    {
      name: "Nurimar Aparecida",
      text: "Mbom ...gostei muito do serviço...atencioso..e perfeito",
      rating: 5,
    },
    {
      name: "gopal pandaram",
      text: "Pontual e otimo atendimento",
      rating: 5,
    },
    {
      name: "natalia fernandes",
      text: "Super indico",
      rating: 5,
    },
    {
      name: "Junior Brito",
      text: "Ótimo preço e grande profissional",
      rating: 5,
    },
    {
      name: "Anttonio Rodrigues",
      text: "Excelente! 👏🏾👏🏾👏🏾 …",
      rating: 5,
    },
    {
      name: "Marlene Nogueira Schinaider",
      rating: 5,
    },
];


const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/?q=place_id:ChIJoyD33vD3zpQRawlwf_Lw5k4';
const WRITE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJoyD33vD3zpQRawlwf_Lw5k4';

export default function Testimonials() {
  return <section id="avaliacoes" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div><p className="text-blue-700 font-bold tracking-widest uppercase text-xs mb-4">Quem já contou com a gente</p><h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">A experiência dos nossos clientes.</h2><p className="text-slate-600 mt-4">Seleção de avaliações. Consulte os relatos e a nota atualizada no Google.</p></div>
        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-500"><span className="text-4xl font-bold text-slate-900">4,8</span><span className="block text-amber-500 tracking-wider mt-1" aria-hidden="true">★★★★★</span><span className="text-sm text-slate-600">Avaliações no Google ↗</span></a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {realReviews.filter(review => review.text).map(review => <figure key={review.name} className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-4"><span aria-hidden="true" className="rounded-full bg-blue-50 text-blue-700 w-10 h-10 flex items-center justify-center font-bold">{review.name.charAt(0).toUpperCase()}</span><figcaption className="font-bold text-slate-900">{review.name}</figcaption></div>
          <p className="text-amber-500 text-sm mb-3" aria-label={review.rating + ' de 5 estrelas'}>{'★'.repeat(review.rating)}</p>
          <blockquote className="text-slate-600 text-sm leading-relaxed flex-grow">{review.text}</blockquote>
        </figure>)}
      </div>
      <div className="flex flex-wrap gap-5 items-center mt-8"><a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 underline underline-offset-4">Ver todas as avaliações no Google</a><a href={WRITE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="text-slate-600 underline underline-offset-4">Deixar minha avaliação</a></div>
    </div>
  </section>;
}
