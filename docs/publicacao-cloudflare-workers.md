# Publicação: GitHub + Cloudflare Pages

Este guia registra como publicar o site estático do MindHack Sec em `mindhacksec.tech`, mantendo o código no GitHub e a hospedagem gratuita no Cloudflare Pages.

## Visão geral

```text
Computador → Git/GitHub → Cloudflare Pages → DNS da Hostinger → visitantes
```

- **Git** registra versões do projeto no computador.
- **GitHub** guarda uma cópia remota e permite acompanhar mudanças.
- **Cloudflare Pages** gera e hospeda o site com HTTPS.
- **DNS** faz `mindhacksec.tech` apontar para essa hospedagem.

## Antes de começar

1. Ter uma conta GitHub: `willmachado77`.
2. Ter acesso ao painel Cloudflare e ao painel DNS da Hostinger.
3. Confirmar que o build local passa com `npm run build`.
4. Nunca copiar senhas, tokens ou chaves para o repositório ou para este guia.

## 1. Criar e enviar o primeiro repositório

No GitHub, crie um repositório **público** chamado `mindhack-sec`, sem adicionar README, `.gitignore` ou licença pela interface — esses arquivos já existem no projeto. Em seguida, no terminal dentro da pasta do projeto:

```bash
git add .
git commit -m "feat: primeira versão do site MindHack Sec"
git branch -M main
git remote add origin https://github.com/willmachado77/mindhack-sec.git
git push -u origin main
```

O primeiro comando seleciona os arquivos; o segundo cria a primeira versão; o terceiro confirma o nome da ramificação principal; o quarto associa o projeto local ao GitHub; e o último envia o histórico.

## 2. Conectar ao Cloudflare Pages

No painel Cloudflare:

1. Abra **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Autorize a conta GitHub e escolha `willmachado77/mindhack-sec`.
3. Configure:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Production branch: `main`
4. Clique em **Save and Deploy**.

O Cloudflare executará o mesmo build validado localmente e fornecerá um endereço temporário terminado em `pages.dev`. Abra-o e teste as páginas e os links antes de configurar o domínio definitivo.

## 3. Associar o domínio

No projeto Pages, abra **Custom domains** e adicione `mindhacksec.tech`. O Cloudflare mostrará os registros DNS necessários. Copie-os exatamente para a zona DNS gerenciada na Hostinger, ou migre a zona para os nameservers indicados pelo Cloudflare se essa for a opção escolhida.

Depois que o painel indicar que o domínio está ativo, teste:

- `https://mindhacksec.tech`
- `https://mindhacksec.tech/sitemap.xml`
- `https://mindhacksec.tech/robots.txt`

Também confira o cadeado HTTPS no navegador. A propagação de DNS pode levar de minutos a 24 horas; não altere registros aleatoriamente enquanto ela estiver em andamento.

## Rotina para atualizações

Depois de mudar conteúdo ou código:

```bash
npm run build
git add .
git commit -m "descrição curta da alteração"
git push
```

Cada `push` para `main` inicia uma publicação automática no Cloudflare Pages. Verifique o resultado no endereço de produção e, para alterações relevantes, registre a decisão no diário de bordo.

## Como reverter uma publicação

Se uma versão publicada tiver problema, use **Deployments** no Cloudflare Pages para promover uma versão anterior. Depois, corrija o problema no Git e envie um novo commit. Não apague o histórico como primeira reação: ele é o registro do que ocorreu e facilita aprender e recuperar o projeto.
