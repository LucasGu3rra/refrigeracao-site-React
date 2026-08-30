import React from 'react';
import { Link } from 'react-router-dom';

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-gray-900/40 backdrop-blur-md pt-28 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative z-50">
      
      {/* Contêiner principal com altura fixa e barra de rolagem interna */}
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 flex flex-col max-h-[80vh] overflow-hidden">
        
        {/* Cabeçalho Fixo do Modal */}
        <div className="p-6 sm:p-8 bg-white border-b border-gray-100 flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">Transparência e LGPD</span>
            <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
              Política de Privacidade
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">Refrigeration Company • Atualizado em Agosto de 2026</p>
          </div>
          <Link 
            to="/" 
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors font-bold text-lg"
            title="Fechar"
          >
            ✕
          </Link>
        </div>

        {/* Corpo com rolagem interna (scrollbar customizada) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 divide-y divide-gray-100 custom-scrollbar">
          
          {/* Introdução */}
          <div className="pb-4">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              A <strong className="text-gray-900">Refrigeration Company</strong> está firmemente empenhada em proteger a privacidade e a segurança dos dados pessoais dos usuários de nosso site. Esta política explica de forma transparente como coletamos, usamos e protegemos suas informações de acordo com a legislação vigente.
            </p>
          </div>

          {/* Item 1 */}
          <div className="pt-6">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 text-sm font-bold shrink-0 mt-0.5">1</span>
              <div className="flex-1">
                <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Informações que Coletamos</h2>
                <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                  Coletamos as informações que você nos fornece voluntariamente por meio de nossos formulários de lead e contato:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                  <li className="bg-gray-50 p-2.5 rounded-lg border border-gray-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Nome completo
                  </li>
                  <li className="bg-gray-50 p-2.5 rounded-lg border border-gray-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Número de telefone (WhatsApp)
                  </li>
                  <li className="bg-gray-50 p-2.5 rounded-lg border border-gray-100 flex items-center gap-2 sm:col-span-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Endereço de e-mail
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="pt-6">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 text-sm font-bold shrink-0 mt-0.5">2</span>
              <div className="flex-1">
                <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Finalidade da Coleta de Dados</h2>
                <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                  Os dados pessoais coletados são utilizados exclusivamente para as seguintes finalidades:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    <span>Entrar em contato com você para responder a dúvidas e entender sua solicitação.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    <span>Agendar e prestar serviços de conserto, manutenção e suporte para equipamentos de refrigeração.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="pt-6">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 text-sm font-bold shrink-0 mt-0.5">3</span>
              <div className="flex-1">
                <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Segurança e Compartilhamento de Dados</h2>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    <span>Todas as informações são enviadas de forma segura por meio de conexões criptografadas (HTTPS/SSL).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                    <span>Seus dados pessoais nunca serão vendidos, alugados ou compartilhados com terceiros sem consentimento.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="pt-6">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 text-sm font-bold shrink-0 mt-0.5">4</span>
              <div className="flex-1">
                <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Uso de Cookies e Google Ads</h2>
                <p className="text-gray-600 text-sm sm:text-base mb-2 leading-relaxed">
                  Utilizamos ferramentas de anúncios online para alcançar clientes potenciais:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></span>
                    <span>O Google utiliza cookies para veicular anúncios com base em visitas anteriores ao nosso site.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></span>
                    <span>Você pode desativar o uso de cookies personalizados diretamente nas Configurações de Anúncios do Google.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 5: Contato final */}
          <div className="pt-6">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold shrink-0 mt-0.5">5</span>
              <div className="flex-1">
                <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Seus Direitos como Usuário</h2>
                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                  Você tem o direito de solicitar acesso, alteração ou exclusão permanente das suas informações. Entre em contato conosco:
                </p>
                <a href="mailto:refrigerationcompany01@gmail.com" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm">
                  refrigerationcompany01@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Rodapé fixo do Modal com botão de fechar */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end shrink-0">
          <Link 
            to="/" 
            className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-6 py-2.5 rounded-xl transition-all shadow-sm"
          >
            Entendido / Voltar
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PoliticaPrivacidade;