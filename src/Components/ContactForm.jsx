import React, { useState, useEffect } from 'react';

export default function WhatsAppForm({ initialService = 'Orcamento' }) {
  const PHONE_NUMBER = '5511920044158'; 

  const [form, setForm] = useState({ 
    nome: '', telefone: '', servico: initialService, endereco: '', descricao: '' 
  });

  useEffect(() => {
    setForm(prevForm => ({ ...prevForm, servico: initialService }));
  }, [initialService]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, telefone, servico, endereco, descricao } = form;
    
    const servicosBonitos = {
      'Orcamento': 'Orçamento Geral',
      'Reparo': 'Conserto / Quebrou',
      'Manutencao': 'Manutenção Preventiva',
      'Instalacao': 'Instalação Nova',
      'Chillers': 'Chillers & Industrial',
      'CamaraFria': 'Câmara Fria',
      'Expositores': 'Expositores / Bebidas',
      'ArCondicionado': 'Ar Condicionado',
      'Geladeira': 'Geladeira Inox / Comercial',
      'Freezer': 'Freezer Comercial'
    };
    
    const tipoServico = servicosBonitos[servico] || servico;

    const msg = 
      `*REFRIGERATION COMPANY*\n` +
      `-----------------------------------\n` +
      `*NOVA SOLICITAÇÃO VIA SITE*\n\n` +
      `👤 *Cliente:* ${nome}\n` +
      `📱 *WhatsApp:* ${telefone}\n` +
      `📍 *Endereço:* ${endereco}\n` +
      `❄️ *Serviço:* ${tipoServico}\n` +
      `📝 *Detalhes:* ${descricao}\n` +
      `-----------------------------------\n` +
      `*Aguardo retorno.*`;

    const link = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(link, '_blank');
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-gray-100 flex items-center justify-center px-4">
      
      <div className="bg-white max-w-4xl w-full flex flex-col md:flex-row rounded-[2rem] shadow-2xl overflow-hidden border border-gray-200 relative">

        {/* LADO ESQUERDO: Imagem (Ajustada para Mobile) */}
        {/* h-48 no mobile (pequeno) e auto no desktop */}
        <div className="h-48 md:h-auto md:w-5/12 relative bg-brand-blue group">
          <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply z-10"></div>
          <img 
            src="https://mxlog.com.br/wp-content/uploads/2019/09/motofrete_blog.jpg"
            alt="Motoboy" 
            className="absolute inset-0 w-full h-full object-cover z-0 grayscale group-hover:grayscale-0 transition duration-500"
          />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 text-white bg-gradient-to-t from-black/80 to-transparent w-full">
             <h3 className="text-xl md:text-2xl font-bold mb-1 flex items-center gap-2">
               <span>⚡</span> Chegamos Rápido
             </h3>
             <p className="text-blue-200 text-xs md:text-sm">Técnico com peças a caminho.</p>
          </div>
        </div>

        {/* LADO DIREITO: Formulário */}
        <div className="md:w-7/12 p-6 md:p-12 bg-white relative">
          
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Solicite seu Técnico
            </h2>
            <p className="text-gray-500 text-sm">
              Preencha para agilizar o atendimento.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="relative">
              <input type="text" name="nome" value={form.nome} required onChange={handleChange} className="peer w-full border-b border-gray-300 py-2 text-gray-700 focus:outline-none focus:border-brand-blue placeholder-transparent bg-transparent" placeholder="Nome" />
              <label className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-xs">Nome Completo*</label>
            </div>

            <div className="relative mt-4">
              <input type="tel" name="telefone" value={form.telefone} required onChange={handleChange} className="peer w-full border-b border-gray-300 py-2 text-gray-700 focus:outline-none focus:border-brand-blue placeholder-transparent bg-transparent" placeholder="Tel" />
              <label className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-xs">WhatsApp (DDD)*</label>
            </div>

            <div className="relative mt-4">
              <input type="text" name="endereco" value={form.endereco} required onChange={handleChange} className="peer w-full border-b border-gray-300 py-2 text-gray-700 focus:outline-none focus:border-brand-blue placeholder-transparent bg-transparent" placeholder="Endereço" />
              <label className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-xs">Endereço Completo*</label>
            </div>

            <div className="relative mt-4">
              <select 
                name="servico" 
                value={form.servico} 
                onChange={handleChange} 
                className="w-full border-b border-gray-300 py-2 text-gray-700 focus:outline-none focus:border-brand-blue bg-transparent cursor-pointer text-sm"
              >
                <optgroup label="Geral">
                  <option value="Orcamento">Quero um Orçamento</option>
                  <option value="Reparo">Conserto Urgente</option>
                  <option value="Manutencao">Manutenção Preventiva</option>
                  <option value="Instalacao">Instalação Nova</option>
                </optgroup>
                <optgroup label="Equipamentos">
                  <option value="Chillers">Chillers & Industrial</option>
                  <option value="CamaraFria">Câmara Fria</option>
                  <option value="Expositores">Expositores / Bebidas</option>
                  <option value="ArCondicionado">Ar Condicionado</option>
                  <option value="Geladeira">Geladeira Inox / Comercial</option>
                  <option value="Freezer">Freezer Comercial</option>
                </optgroup>
              </select>
            </div>

            <div className="relative mt-4">
              <textarea name="descricao" value={form.descricao} rows="2" onChange={handleChange} className="peer w-full border-b border-gray-300 py-2 text-gray-700 focus:outline-none focus:border-brand-blue placeholder-transparent resize-none bg-transparent" placeholder="Msg"></textarea>
              <label className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-xs">Detalhes (Opcional)</label>
            </div>

            <button type="submit" className="w-full mt-6 py-3 bg-brand-blue hover:bg-blue-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <span>🚀</span> Enviar no WhatsApp
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}