const steps = [
  ['Conte o que precisa', 'Envie pelo WhatsApp o equipamento, o problema e seu bairro. Fotos e modelo ajudam a entender o pedido.'],
  ['Combine a avaliação', 'Nossa equipe conversa com você sobre o atendimento e informa as condições da visita e da avaliação.'],
  ['Receba o orçamento', 'Valores, serviço proposto e condições são combinados com você antes da execução.'],
];
export default function ServiceProcess() {
  return <section id="como-funciona" className="py-16 sm:py-24 bg-slate-950 text-white">
    <div className="container mx-auto px-4">
      <p className="uppercase text-xs font-bold tracking-widest text-blue-300 mb-4">Do primeiro contato ao orçamento</p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">Atendimento claro, em cada etapa.</h2>
      <ol className="grid md:grid-cols-3 gap-8">{steps.map(([title, text], index) => <li key={title} className="border-t border-slate-700 pt-6"><span className="text-blue-400 text-sm font-bold">0{index + 1}</span><h3 className="text-xl font-bold mt-4 mb-3">{title}</h3><p className="text-slate-300 leading-relaxed">{text}</p></li>)}</ol>
    </div>
  </section>;
}
