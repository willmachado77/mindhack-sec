# MindHack Sec

Site institucional e editorial do canal MindHack Sec, dedicado à educação em cibersegurança e segurança da informação.

## Objetivo do MVP

Apresentar o canal, publicar notícias com fontes verificáveis, oferecer dicas de segurança e organizar os futuros cursos gratuitos do YouTube. A primeira versão não coleta dados pessoais e não possui autenticação de usuários.

## Tecnologias

- [Astro](https://astro.build/) para gerar páginas estáticas rápidas.
- TypeScript para tornar o código mais previsível.
- CSS moderno próprio, sem biblioteca visual pesada.
- Cloudflare Pages planejado para hospedagem com HTTPS.

## Executar localmente

Pré-requisito: Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:4321`). Para gerar a versão de produção:

```bash
npm run build
```

## Estrutura

```text
src/pages/        páginas e rotas do site
src/components/   elementos reutilizáveis
src/layouts/      estrutura compartilhada das páginas
src/styles/       estilos globais
docs/             decisões, segurança e diário de bordo
```

## Publicação

O plano de publicação com GitHub, Cloudflare Pages e o domínio `mindhacksec.tech` está em [docs/publicacao-cloudflare-pages.md](docs/publicacao-cloudflare-pages.md). Não inclua senhas, tokens ou chaves de API no repositório.

## Licença e créditos

Conteúdo e identidade visual: MindHack Sec. O código será licenciado quando o responsável pelo projeto definir a forma de reutilização desejada.
