import React from 'react';

const PoliticaPrivacidade = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 p-6 font-sans text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold text-center mb-8">Política de Privacidade - Refrigeration Company</h1>
      
      <p className="mb-6">
        A Refrigeration Company está firmemente empenhada em proteger a privacidade e a segurança dos dados pessoais dos usuários de nosso site (refrigeracao-site-react.vercel.app). Esta política explica de forma transparente como coletamos, usamos e protegemos suas informações de acordo com a legislação de proteção de dados (LGPD).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Informações que Coletamos</h2>
      <p className="mb-3">Coletamos as informações que você nos fornece voluntariamente por meio de nossos formulários de lead e contato. Esses dados incluem:</p>
      <ul className="list-disc pl-8 mb-6">
        <li>Nome completo</li>
        <li>Número de telefone (WhatsApp)</li>
        <li>Endereço de e-mail</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. Finalidade da Coleta de Dados</h2>
      <p className="mb-3">Os dados pessoais coletados são utilizados exclusivamente para as seguintes finalidades:</p>
      <ul className="list-disc pl-8 mb-6">
        <li>Entrar em contato com você para responder a dúvidas e entender sua solicitação.</li>
        <li>Agendar e prestar serviços de conserto, manutenção e suporte para geladeiras, freezers e demais equipamentos de refrigeração.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Segurança e Compartilhamento de Dados</h2>
      <ul className="list-disc pl-8 mb-6">
        <li>Todas as informações coletadas são enviadas de forma segura por meio de conexões criptografadas de segurança SSL (protocolo HTTPS).</li>
        <li>Seus dados pessoais não serão vendidos, alugados ou compartilhados com terceiros sem o seu consentimento prévio e expresso.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Uso de Cookies e Google Ads</h2>
      <p className="mb-3">Nosso site utiliza o Google Ads como ferramenta de anúncios online:</p>
      <ul className="list-disc pl-8 mb-6">
        <li>Fornecedores terceiros, incluindo o Google, utilizam cookies e identificadores de dispositivos para veicular anúncios relevantes.</li>
        <li>Você pode desativar o uso de cookies personalizados visitando as Configurações de anúncios do Google.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Seus Direitos como Usuário</h2>
      <p>
        Você tem o direito de solicitar o acesso, a alteração, a correção ou a exclusão permanente de suas informações. Para exercer esses direitos, entre em contato: <strong className="text-blue-600">refrigerationcompany01@gmail.com</strong>.
      </p>
    </div>
  );
};

export default PoliticaPrivacidade;