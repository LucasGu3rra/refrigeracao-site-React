# Hospedagem na Cloudflare Workers Static Assets

Projeto conectado ao repositório GitHub LucasGu3rra/refrigeracao-site-React, branch main.

- Nome do projeto: refrigeracao-site-react
- Diretório raiz: raiz do repositório
- Build command: npm run build
- Deploy command: npx wrangler deploy
- Preview command (quando disponível): npx wrangler versions upload
- Configuração: wrangler.jsonc; arquivos publicados em dist; fallback SPA para páginas React.

Não é necessário criar um script de Worker ou configurar variáveis secretas para o site estático atual. A instalação das dependências fica a cargo do build integrado da Cloudflare.

O primeiro deploy gera um endereço workers.dev, não pages.dev. Conectar o domínio próprio somente após confirmar o registro na Locaweb e conferir o deploy temporário. A Vercel continua disponível durante a preparação. Não foram alterados DNS, URLs dos anúncios, layout nem tags nesta preparação.

Depois da ativação do domínio: escolher www/apex, conferir HTTPS e rotas, atualizar os destinos do Ads e links complementares, revisar configurações de domínio da Google tag e validar um único disparo por clique de WhatsApp.
