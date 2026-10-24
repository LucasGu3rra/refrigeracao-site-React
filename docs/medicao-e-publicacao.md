# Medição de contatos — implementação e pendências

Revisão local: 23/10/2026. As alterações estão no código; publicação e validação nas contas Google ainda não foram realizadas.

## Instalação encontrada

- `index.html`: GTM `GTM-N7926KD` e Google tag direta `AW-17045665288`.
- O código anterior não emitia eventos próprios de WhatsApp, telefone ou formulário. Não foi encontrado ID GA4 configurado diretamente no repositório.
- A resposta pública do contêiner GTM retornou HTTP 200 e versão 452 na consulta desta revisão. Ela contém referências a outros IDs Ads e GA4, incluindo `G-7YR7W5LMY5` e `G-J51Y85KVRZ`, além de condições para domínios `ads.google.*`. Não foi encontrada a string `AW-17045665288` nesse conteúdo. Isso é um indício de configuração incompatível com a tag direta, que precisa ser investigado pelo administrador; não comprova propriedade nem quais tags efetivamente disparam neste domínio.
- As instalações existentes foram preservadas. Não foram adicionadas tags remotas, IDs de conversão, rótulos ou ações Google Ads.
- A existência de GTM e gtag ao mesmo tempo não comprova duplicação. É necessário inspecionar os destinos, gatilhos e as requisições no Tag Assistant.

## Eventos disponíveis no dataLayer

| Evento | Quando ocorre | O que representa |
| --- | --- | --- |
| `whatsapp_click` | Clique em link direto do WhatsApp no topo, menu, serviço, formulário, rodapé ou contato flutuante | Intenção de abrir o WhatsApp; não comprova conversa ou venda |
| `phone_click` | Clique em link `tel:` | Intenção de ligar; não comprova chamada completada |
| `whatsapp_form_redirect` | Formulário passa pela validação e chama a abertura do WhatsApp | Encaminhamento de rascunho; não comprova abertura bem-sucedida, envio, conversa ou venda |

O formulário não tem envio para servidor. Todos os campos são opcionais. Se o telefone for preenchido, ele precisa ter formato válido. Por isso, não existe evento de lead recebido nem `form_submit` criado pelo código. Clique inválido, preenchimento, visita e navegação não emitem esses eventos. Uma nova ação intencional do visitante produz outro evento; a contagem de leads únicos cabe à configuração da conta.

Cada evento contém somente `contact_placement`, `service_id` e `page_path`, com identificadores limitados pelo código. Nome, telefone informado pelo visitante, bairro, descrição, mensagem e URL do WhatsApp não entram no payload. Não mapear o texto dos campos, `Click URL`, `form_destination` ou variáveis DOM de dados pessoais para Analytics.

As UTMs e os identificadores `gclid`, `dclid`, `gbraid`, `wbraid`, `gad_source` e `gad_campaignid` já presentes na URL são mantidos nos links internos. O código não cria armazenamento próprio nem encaminha esses parâmetros ao WhatsApp. Retenção, consentimento e vinculação com leads/offline ainda precisam ser definidos na conta; manter parâmetros na URL não comprova atribuição individual.

## Configuração pelo responsável pelas contas

1. Confirmar que o contêiner instalado pertence à empresa e que `AW-17045665288` é o destino correto. Se o contêiner não pertencer à empresa, substituir o snippet pelo contêiner confirmado, sem inventar ID.
2. Abrir as ações existentes no Google Ads e registrar seus IDs/rótulos, fonte e status. Não criar ações duplicadas para retirar o aviso de tag não verificada.
3. Inspecionar tags e gatilhos existentes de cliques, formulários, histórico e GA4. Para cada interação, escolher um único caminho de conversão: tag Ads direta ou importação de evento GA4, evitando usar os dois para o mesmo contato.
4. Criar gatilhos de **Evento personalizado**, com correspondência exata aos três eventos acima. Criar variáveis da camada de dados para os três parâmetros permitidos. Usar os modelos nativos do GTM para Google Ads/GA4.
5. Associar aos IDs/rótulos das ações existentes, depois de definir com o responsável quais são ações principais e secundárias. Não ativar conversão de formulário em gatilho genérico de clique ou visita.
6. Se houver GA4, revisar a medição automática de cliques de saída/formulários para evitar sobreposição e coleta de URLs/mensagens. Definir uma única estratégia para `page_view` em navegação React; o código desta mudança não adiciona uma segunda estratégia de pageviews.
7. Conferir configuração de consentimento e comportamento com aceitação/recusa antes de publicar o contêiner. A implementação atual do consentimento nas contas não pôde ser auditada.
8. Validar no Tag Assistant um único disparo por ação, inclusive após recarregar e navegar entre as páginas. Se houver GA4, conferir também o DebugView e os parâmetros efetivamente coletados. Registrar as evidências da conta; os testes locais não substituem essa validação.

A ação “Conversation started” hospedada pelo Google é diferente de um clique no site. Conferir a definição na conta e a possibilidade de sobreposição antes de comparar ou somar resultados. Para leads, avaliar a contagem “Uma” por interação com o responsável. Nenhum ajuste de campanha foi feito nesta implementação.

## Publicação e destinos dos anúncios

O `vercel.json` existente mantém a reescrita de rotas React para `index.html`. Após publicar, conferir acesso direto e recarregamento de:

- `https://refrigeracao-site-react.vercel.app/conserto-geladeira`
- `https://refrigeracao-site-react.vercel.app/refrigeracao-comercial`

Esses são os destinos previstos, não confirmação de publicação. Manter os anúncios com os destinos atuais até conferir o deploy. Depois atualizar os destinos residencial/comercial com o responsável pelos anúncios.

Antes de anunciar, confirmar marcas, regiões e condições de garantia com o proprietário. As páginas novas pedem consulta de disponibilidade e não publicam prazos fixos, diagnóstico gratuito ou garantias não confirmadas. A seção de avaliações aponta ao perfil do Google existente no projeto, sem reproduzir nota ou datas estáticas.

## Referências

- [Camada de dados e eventos personalizados — Google](https://developers.google.com/tag-platform/tag-manager/datalayer)
- [Redação de dados e parâmetros de URL no GA4 — Google](https://support.google.com/analytics/answer/13544947)
