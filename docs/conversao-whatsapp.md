> Atualização posterior em 24/10/2026: o proprietário criou o contêiner `GTM-KMPHXCVH` na conta atual da empresa e autorizou substituir `GTM-N7926KD`. Os dois snippets de `index.html` (script e noscript) foram atualizados. A Google tag direta `AW-17045665288` e a conversão de clique `AW-17045665288/hPdoCJ_ktJwcEIjsgMA_` foram preservadas. Não criar uma conversão duplicada no novo GTM. A instalação do snippet não configura nem publica tags dentro do contêiner. Nenhuma configuração do contêiner antigo foi importada; seus destinos GA4 não tiveram a propriedade confirmada. Sem novos testes, a pedido do usuário; o hit de conversão continua pendente de validação pelo proprietário. As seções abaixo registram a revisão anterior à troca do GTM.

# Conversão de saída ao WhatsApp — 24/10/2026

## Implementação ativa no código

- Destino escolhido: `AW-17045665288/hPdoCJ_ktJwcEIjsgMA_`, o último `send_to` informado pelo usuário. Os outros dois rótulos citados não são disparados pelo código.
- Arquivo: `src/utils/googleAds.js`.
- Caminho de envio: Google tag direta já instalada (`gtag.js`), sem criar outra tag global e sem precisar publicar uma tag duplicada no GTM.
- Gatilho: os handlers dos links WhatsApp e do formulário opcional chamam `trackContactEvent`; somente `whatsapp_click` e `whatsapp_form_redirect` chamam `gtag('event', 'conversion', ...)`, uma vez por ação.
- Carregamento de página, navegação React, clique em telefone e falha de validação do formulário não chamam a conversão.
- O payload próprio tem apenas `send_to` e `transport_type: 'beacon'`: não envia nome, telefone do visitante, bairro, descrição, URL do WhatsApp ou valor de venda.
- O fluxo de contato não aguarda callback de Analytics. Bloqueio da tag ou falha de rede não impede abrir o WhatsApp.
- Todos os links gerados usam `https://wa.me/5511920044158`, com mensagens pré-preenchidas. Não foi encontrada a variante incorreta `551192004158` no código de aplicação.

Um novo clique deliberado gera outra chamada. A configuração de contagem “Uma” por interação e a definição de ação principal/secundária pertencem à conta Ads e não foram alteradas pelo código. Cliques são intenção de contato, não prova de mensagem enviada, conversa iniciada ou venda.

## Validação realizada

- `npm test`: 16 testes passaram, incluindo ausência de conversão na visita/telefone, uma chamada por ação WhatsApp, redirecionamento do formulário, rótulo exato, ausência de dados pessoais e tolerância a tags indisponíveis.
- `npm run lint` e `npm run build`: passaram.
- No navegador, o CTA comercial local abriu a página oficial do WhatsApp com telefone `5511920044158`, perfil “Refrigeration Company” e mensagem comercial correta. Nenhuma mensagem foi enviada.
- O Tag Assistant foi aberto e reconheceu localmente `AW-17045665288`, `GTM-N7926KD` e `G-7YR7W5LMY5`. Foram observados os hits iniciais de visualização de página e remarketing. Isso não comprova o hit de conversão após o clique.
- A verificação visual completa do hit `conversion` ficou pendente: a conexão de depuração não acompanhou a janela de clique, e o controle de navegador foi depois interrompido por não conseguir confirmar a URL do Chrome com segurança. Não foi declarado um teste de conversão aprovado no Tag Assistant.
- O acesso a `tagmanager.google.com` foi redirecionado à escolha de conta com sessão desconectada. Nenhuma configuração foi alterada ou publicada dentro de GTM/Google Ads.

## Pendências da conta

1. Corrigir/desativar o acionamento antigo por carregamento de página da ação “Contato” e o domínio duplicado. Isso precisa de uma sessão autorizada do administrador no Google Ads/GTM; não é uma configuração do repositório.
2. Não criar no GTM outra conversão `17045665288` / `hPdoCJ_ktJwcEIjsgMA_` disparada pelos eventos já tratados diretamente. Escolher um único caminho para não duplicar o mesmo clique.
3. Caso a empresa prefira migrar o envio para o GTM, primeiro remover o envio direto deste código, depois configurar uma única tag Ads com o mesmo ID/rótulo e acionador de Evento personalizado `^(whatsapp_click|whatsapp_form_redirect)$`. Não manter os dois caminhos ativos.
4. Confirmar consentimento e medição automática de GA4 antes de considerar a coleta concluída. O GTM atual tem referências a outros destinos, cuja propriedade não foi confirmada.
5. Na versão publicada, repetir os cliques em Tag Assistant: antes do clique, nenhum hit de conversão; após um clique, exatamente um hit com ID `17045665288` e label `hPdoCJ_ktJwcEIjsgMA_`. Conferir o Console e o perfil do WhatsApp.

## Referência

[Google Ads: medir cliques no site como conversões](https://support.google.com/google-ads/answer/6331304).
