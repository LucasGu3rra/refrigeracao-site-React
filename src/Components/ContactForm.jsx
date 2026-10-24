import { useState } from 'react';
import { getWhatsAppUrl, isValidOptionalPhone, SERVICE_LABELS } from '../config/contact';
import { trackContactEvent } from '../utils/contactEvents';
import { WhatsAppLink } from './ContactLinks';

export default function ContactForm({ initialService = 'Orcamento' }) {
  const [form, setForm] = useState({ nome: '', telefone: '', servico: initialService, bairro: '', descricao: '' });
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'telefone') {
      event.target.setCustomValidity(isValidOptionalPhone(value) ? '' : 'Informe um telefone com DDD ou deixe este campo em branco.');
    }
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    // This opens a draft; it does not submit a lead or send a message automatically.
    window.open(getWhatsAppUrl(form.servico, form), '_blank', 'noopener,noreferrer');
    trackContactEvent('whatsapp_form_redirect', 'form', form.servico);
  };
  const inputClass = 'w-full rounded-lg border border-gray-300 p-3 text-gray-800 bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100';
  return (
    <section id="contato" className="py-16 md:py-24 bg-gray-100 px-4">
      <div className="bg-white max-w-4xl mx-auto flex flex-col md:flex-row rounded-3xl shadow-xl overflow-hidden border border-gray-200">
        <div className="hidden md:flex md:w-5/12 bg-gray-950 flex-col justify-between p-6 text-white">
          <img src="/motoboy-refrigeracao-3d.webp" alt="Ilustração de técnico de refrigeração com moto e ferramentas" loading="lazy" width="512" height="768" className="w-full h-96 object-contain" />
          <div>
            <h3 className="text-xl font-bold mb-2">Vamos entender o problema</h3>
            <p className="text-blue-200 text-sm">Informe seu bairro e consulte disponibilidade. O endereço completo pode ficar para o atendimento.</p>
          </div>
        </div>
        <div className="md:w-7/12 p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Formulário opcional</h2>
          <p className="text-gray-600 text-sm">Todos os campos são opcionais. Preencha somente o que quiser adiantar ou continue sem preencher.</p>
          <WhatsAppLink service={initialService} placement="form_direct" className="inline-block mt-3 mb-6 text-sm font-bold text-green-800 underline underline-offset-4">Falar direto pelo WhatsApp</WhatsAppLink>
          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Preparar mensagem no WhatsApp">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">Nome (opcional)</label>
              <input id="contact-name" type="text" name="nome" autoComplete="name" value={form.nome} onChange={handleChange} maxLength="100" className={inputClass} />
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone para retorno (opcional)</label>
              <input id="contact-phone" type="tel" name="telefone" autoComplete="tel" value={form.telefone} onChange={handleChange} maxLength="25" aria-describedby="phone-help" className={inputClass} />
              <p id="phone-help" className="text-xs text-gray-500 mt-1">Se preencher, inclua o DDD. Ex.: (11) 99999-9999.</p>
            </div>
            <div>
              <label htmlFor="contact-neighborhood" className="block text-sm font-medium text-gray-700 mb-1">Bairro / cidade (opcional)</label>
              <input id="contact-neighborhood" type="text" name="bairro" value={form.bairro} onChange={handleChange} maxLength="150" className={inputClass} />
            </div>
            <div>
              <label htmlFor="contact-service" className="block text-sm font-medium text-gray-700 mb-1">Serviço de interesse (opcional)</label>
              <select id="contact-service" name="servico" value={form.servico} onChange={handleChange} className={inputClass}>
                {Object.entries(SERVICE_LABELS).map(([id, label]) => <option key={id} value={id}>{label}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="contact-details" className="block text-sm font-medium text-gray-700 mb-1">Equipamento / problema (opcional)</label>
              <textarea id="contact-details" name="descricao" value={form.descricao} rows="3" onChange={handleChange} maxLength="1000" className={`${inputClass} resize-y`} />
            </div>
            <button type="submit" className="w-full py-3 px-4 bg-brand-blue hover:bg-blue-800 text-white font-bold rounded-xl shadow-lg">Continuar no WhatsApp</button>
            <p className="text-xs text-gray-500">Uma mensagem será preparada para você revisar e enviar no WhatsApp. Nada é enviado automaticamente.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
