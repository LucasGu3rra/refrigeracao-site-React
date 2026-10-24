# Refrigeration Company

Site em React e Vite com contato direto pelo WhatsApp.

```sh
npm install
npm run dev
```

Validação:

```sh
npm test
npm run lint
npm run build
npm run preview
```

Páginas: `/`, `/conserto-geladeira`, `/refrigeracao-comercial` e `/politica-de-privacidade`.

O número, as mensagens e os serviços ficam em `src/config/contact.js`. Os textos das páginas de anúncios ficam em `src/config/landingPages.js`. Os links de contato abrem uma mensagem para o visitante revisar e enviar; o formulário é inteiramente opcional.

Em desenvolvimento, `/tests/manual-contact.html` carrega os mesmos componentes com captura local dos destinos e eventos. O teste não executa Google tags, ligações ou mensagens. A página de teste não é incluída na compilação de produção. Reabra esse caminho para reiniciar a captura; recarregar após navegar para outra rota carrega a aplicação normal.

Consulte [medição e publicação](docs/medicao-e-publicacao.md), [resultados dos testes](docs/validacao.md) e [modelo de registro de contatos](docs/registro-de-leads.md). A validação de conversões nas contas GTM/Google Ads permanece pendente de acesso do administrador.

A conversão WhatsApp usa o `send_to` em `src/utils/googleAds.js`, por clique, via Google tag direta. Consulte [a configuração e a validação atual](docs/conversao-whatsapp.md) antes de ativar tags equivalentes no GTM.
