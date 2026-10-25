# Domínio oficial

Endereço principal: https://www.refrigerationcompany.com.br

- Links Início e logo apontam à raiz sem acrescentar #hero.
- Canonical por página usa o domínio oficial sem parâmetros de campanha. O endereço de navegação mantém seus parâmetros.
- robots.txt e sitemap.xml publicados com as quatro rotas atuais.
- Layout, fotos, avaliações, GTM-KMPHXCVH e envio direto da conversão AW-17045665288/hPdoCJ_ktJwcEIjsgMA_ preservados.
- Redirecionamento 301 do domínio raiz para www publicado na Cloudflare, preservando caminho e query string. Após migrar os destinos no Ads, vercel.json passou a encaminhar somente o hostname antigo refrigeracao-site-react.vercel.app para o domínio oficial com 308 permanente. Outras implantações de preview continuam independentes.
- A migração dos destinos do Ads foi confirmada pelo usuário, aplicada pela API e relida: dois anúncios, seis sitelinks e formulário compartilhado, incluindo a política de privacidade. Verba, horários e segmentação preservados. Os anúncios passaram novamente a análise após a alteração.
- A validação prática da conversão no novo domínio fica com o proprietário. Não duplicar a conversão no GTM; pode ser necessário revisar domínio monitorado e condições de acionadores se existirem restrições por hostname.

## Hospedagem principal

Cloudflare Workers Static Assets é a hospedagem principal. Os domínios www.refrigerationcompany.com.br e refrigerationcompany.com.br estão declarados em wrangler.jsonc para manter a associação nas publicações futuras. O domínio raiz é encaminhado pela Redirect Rule para www.

O conteúdo da aplicação não depende de URLs da Vercel: scripts, estilos, imagens, formulário e avaliações são entregues pelo novo domínio. A Vercel mantém somente o encaminhamento dos links antigos; não deve ser usada como endereço público nem como destino de campanhas. O projeto atual e o repositório GitHub são preservados.
