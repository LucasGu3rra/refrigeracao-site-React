# Mensagem para o desenvolvedor — situação atual da medição

> Atualização de 24/10/2026: o usuário forneceu os rótulos. Foi escolhido o último `send_to`, `AW-17045665288/hPdoCJ_ktJwcEIjsgMA_`, e implementado o disparo direto por clique em `src/utils/googleAds.js`. O acionador GTM descrito neste histórico não deve ser ativado em paralelo. Leia [o estado atual e as pendências da conta](../docs/conversao-whatsapp.md).

Atualização de 23/10/2026 (America/Sao_Paulo).

## O que foi confirmado no site publicado

Inspeção HTTP/HTML/JavaScript, sem acesso às contas Google:

| URL | Resposta | Código de contato |
| --- | --- | --- |
| https://refrigeracao-site-react.vercel.app/ | HTTP 200 | Eventos presentes no bundle publicado |
| https://refrigeracao-site-react.vercel.app/conserto-geladeira | HTTP 200 | Mesmo bundle publicado |
| https://refrigeracao-site-react.vercel.app/refrigeracao-comercial | HTTP 200 | Mesmo bundle publicado |

As três páginas contêm o snippet GTM `GTM-N7926KD` e a Google tag `AW-17045665288`. O bundle inspecionado foi `/assets/index-CSbAD_01.js`; contém `whatsapp_click`, `whatsapp_form_redirect` e `phone_click`. Não foi encontrada a chave `send_to` no código dessa aplicação. Isso confirma a instrumentação publicada, mas não comprova uma conversão entregue ao Google Ads: uma tag configurada externamente no GTM poderia fazer essa ligação, e ela precisa ser conferida na conta.

A correção dos botões, os formulários opcionais e a abertura do WhatsApp já foram implementados. Os testes locais estão em `docs/validacao.md`. A abertura dos fluxos publicados sem preencher dados e o alinhamento dos destinos dos anúncios foram informados na revisão enviada pelo proprietário; esses ajustes dentro da conta não foram auditados neste ambiente.

## Ligação pendente com a ação existente do Google Ads

A instalação de outra tag global não é o próximo passo: já há duas instalações Google no HTML. Primeiro confirmar propriedade/destinos e vincular os eventos à ação correta, evitando duplicação.

Dados que o administrador precisa fornecer:

| Campo | Situação |
| --- | --- |
| ID da conta/destino Ads | `AW-17045665288` encontrado no site; confirmar na conta |
| Ação existente escolhida para saída ao WhatsApp | A definir com o responsável; não usar automaticamente uma ação com outro significado |
| ID e rótulo da ação / valor `send_to` | Ainda não fornecidos |
| Fonte de conversão | Confirmar se é tag Ads ou importação GA4 |
| Papel principal/secundário e contagem | A definir com o responsável |
| Propriedade e acesso ao GTM instalado | Ainda não confirmados |

No Google Ads, abrir a ação existente apropriada, acessar a configuração da tag e copiar o trecho de evento com `send_to`, no formato `AW-.../rótulo`. Não enviar senha, token ou credenciais. O ID da Google tag, sozinho, não identifica o rótulo de uma ação de conversão.

## Acionador preparado para GTM

Para tratar os dois caminhos como **a mesma saída ao WhatsApp**, usar uma única tag de conversão vinculada à ação existente e um único acionador de Evento personalizado com expressão regular exata:

```text
^(whatsapp_click|whatsapp_form_redirect)$
```

- `whatsapp_click`: clique em link direto para o WhatsApp.
- `whatsapp_form_redirect`: formulário validado chama a abertura de um rascunho no WhatsApp; seus campos são opcionais.
- `phone_click`: clique em telefone; manter separado do acionador acima.

Usar a opção de correspondência por expressão regular do acionador. Não adicionar simultaneamente gatilho genérico de clique, envio de formulário e esse acionador à mesma interação. Conferir e desativar caminhos duplicados que já existam antes de ativar a ligação. Não configurar outra via direta por `gtag` para a mesma ação em paralelo.

O evento de formulário não significa formulário recebido por um servidor. Não há envio de lead para backend nesta aplicação. Não disparar conversão em visita, preenchimento, falha de validação ou navegação React.

Os únicos parâmetros próprios são `contact_placement`, `service_id` e `page_path`, limitados a identificadores conhecidos. Não usar campos de formulário, texto do cliente ou URL completa do WhatsApp nos parâmetros de Analytics/Ads.

## Significado dos resultados

Saída do site ao WhatsApp é intenção de contato. Não comprova aplicativo aberto, mensagem enviada, conversa efetivamente iniciada ou serviço vendido. A ação “Conversation started” hospedada pelo Google é uma medição diferente. Não somar seus números com cliques do site como se fossem clientes únicos.

O responsável deve definir qual ação é principal para otimização e quais são secundárias; avaliar contagem de uma conversão por interação para leads. A existência de nomes como Website lead, Contato ou Solicitar orçamento não garante que a ação tenha o significado ou o acionador adequado.

As UTMs e os identificadores suportados já presentes na URL são preservados nos links internos. O site não os copia para a mensagem do WhatsApp nem cria armazenamento próprio. Retenção, consentimento e atribuição offline continuam dependendo da configuração confirmada. Os cinco serviços informados em sete dias não devem ser importados como conversões sem comprovação individual e identificadores adequados.

Há um modelo de registro de contatos com origem, data, status e valor em `docs/registro-de-leads.md`.

## Evidências necessárias para encerrar a pendência

Após obter os dados da ação e configurar o GTM:

1. Abrir Preview/Tag Assistant na versão publicada e testar cada caminho de contato, nas páginas inicial, residencial e comercial.
2. Confirmar exatamente uma execução da tag Ads por ação, com o ID/rótulo correto. Conferir também chamadas e formulário vazio, parcial, inválido e preenchido; repetir após recarregar e navegar no React.
3. Se houver GA4, conferir DebugView e a ausência de parâmetros pessoais, medição automática sobreposta ou dupla importação da mesma interação.
4. Conferir consentimento antes de ativar a coleta, sem presumir que a instalação atual já esteja configurada corretamente.
5. Registrar evidência com URL testada, nome do evento, acionador, ID/rótulo da ação e resultado observado no Tag Assistant. Uma captura local do dataLayer não substitui esse teste.
6. Revalidar os três fluxos em celular e computador. Os testes visuais anteriores foram locais, e a inspeção HTTP desta atualização não equivale a um novo teste visual de produção nem a uma medição de Core Web Vitals.

Status: site instrumentado e versão publicada identificada; vinculação e validação da conversão Ads pendentes dos dados/acesso da conta.

## Documentação de referência

- [Google: medir cliques como conversões](https://support.google.com/google-ads/answer/6331304)
- [Google: camada de dados e eventos personalizados](https://developers.google.com/tag-platform/tag-manager/datalayer)
- [Google: configuração de consentimento](https://developers.google.com/tag-platform/security/guides/consent)
