# Validação local

Data de referência: 23/10/2026 (America/Sao_Paulo). Esta verificação é do código local; não certifica o site publicado nem as conversões nas contas Google.

## Verificações executadas

- `npm test`: nove testes passaram. Cobrem número de destino, codificação de mensagens, formulário vazio/parcial, telefone opcional/inválido, isolamento de dados pessoais dos eventos, falha de Analytics e preservação de atribuição em navegação interna.
- `npm run lint`: passou.
- `npm run build`: passou.
- Navegação no navegador em largura de desktop e 390 × 844: páginas inicial, residencial e comercial verificadas; rotas residencial/comercial também foram abertas diretamente e recarregadas. Os títulos e contextos de serviço acompanharam a página.
- Em 390 pixels, as duas páginas novas não apresentaram rolagem horizontal. O botão do formulário foi conferido acima da barra fixa de contato; no desktop, o contato flutuante se oculta quando o formulário entra na área visível.
- O link comercial real abriu a página do WhatsApp, com perfil “Refrigeration Company”, telefone `5511920044158` e mensagem comercial correta. Nenhuma mensagem foi enviada. Não foi feita ligação real nem usado um aparelho físico para validar teclado móvel.

## Captura de eventos no navegador

A página local `/tests/manual-contact.html` monta os mesmos componentes em React StrictMode, interceptando os destinos. Ela não carrega Google tags nem envia mensagens/ligações. Foram verificadas **24 ações de contato, 24 eventos e 24 destinos**, sem eventos em navegação ou tentativa de continuar com telefone inválido.

| Fluxo | Resultado |
| --- | --- |
| Página inicial: botão principal, telefone, menu desktop, flutuante, seis serviços e rodapé | Um evento e um destino por ação; mensagens por equipamento |
| Formulário vazio | Continua; evento `whatsapp_form_redirect`; sem campos pessoais vazios na mensagem |
| Formulário com telefone inválido (`123`) | Bloqueado pela validação; sem evento ou abertura adicional |
| Formulário parcial, sem nome e sem telefone | Continua; inclui o bairro informado |
| Formulário preenchido com dados sintéticos | Continua; caracteres acentuados, `&` e `#` preservados no rascunho |
| Página residencial: botão principal e formulário vazio | Serviço `Residencial`; um evento por ação |
| Página comercial: botão principal, três serviços e formulário vazio | Contexto comercial; freezer identificado como comercial |
| Celular: orçamento no menu, WhatsApp fixo e ligação fixa | Eventos `header_mobile` / `mobile_bar`, com contexto `Comercial` |
| Navegação entre páginas | UTMs e `gclid` sintéticos mantidos, sem evento de contato adicional |
| Payload dos eventos | Somente evento, posição, serviço e caminho; sem nome, telefone informado ou mensagem |

A captura local comprova os eventos gerados pela aplicação, não o comportamento de tags externas nem a entrega de conversões ao Google. A configuração das contas, consentimento, duplicação de tags, Tag Assistant e GA4 DebugView continuam pendentes; consulte `medicao-e-publicacao.md`.

## Imagens

- Ilustração do formulário: PNG de 2.253.829 bytes substituído no uso por WebP de 85.498 bytes, carregado de forma adiada.
- Imagens dos seis serviços: cerca de 847 KB de JPEGs substituídos no uso por cerca de 305 KB de WebP. As imagens antigas foram preservadas no repositório.
- Logo otimizado para WebP; imagens dos serviços carregadas de forma adiada e com espaço de tamanho definido.

Não foi atribuída uma pontuação Lighthouse nem medido Core Web Vitals em tráfego real. Repetir os testes no deploy de produção antes de atualizar os destinos dos anúncios.
