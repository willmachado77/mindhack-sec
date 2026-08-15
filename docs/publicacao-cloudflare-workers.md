# Publicação: GitHub + Cloudflare Workers

Este guia registra como publicar o site estático do MindHack Sec em `mindhacksec.tech`, mantendo o código no GitHub e distribuindo os arquivos pela infraestrutura gratuita da Cloudflare.

## Visão geral

```text
Computador → Git/GitHub → Cloudflare Workers → DNS da Cloudflare → visitantes
```

- **Git** registra versões do projeto no computador.
- **GitHub** guarda uma cópia remota e permite acompanhar mudanças.
- **Cloudflare Workers** publica os arquivos estáticos gerados pelo Astro e fornece HTTPS.
- **DNS da Cloudflare** direciona `mindhacksec.tech` ao Worker.
- **Hostinger** permanece como registradora do domínio e recebe o pagamento das renovações.

## Antes de começar

1. Ter uma conta GitHub: `willmachado77`.
2. Ter acesso aos painéis da Cloudflare e da Hostinger.
3. Confirmar que o build local passa com `npm run build`.
4. Nunca copiar senhas, tokens ou chaves para o repositório ou para este guia.

## 1. Criar e enviar o primeiro repositório

No GitHub, crie um repositório **público** chamado `mindhack-sec`, sem adicionar README, `.gitignore` ou licença pela interface — esses arquivos já existem no projeto. Em seguida, no terminal dentro da pasta do projeto:

```bash
git add .
git commit -m "feat: primeira versão do site MindHack Sec"
git branch -M main
git remote add origin git@github.com:willmachado77/mindhack-sec.git
git push -u origin main
```

O primeiro comando seleciona os arquivos; o segundo cria a primeira versão; o terceiro confirma o nome da ramificação principal; o quarto associa o projeto local ao GitHub por SSH; e o último envia o histórico.

## 2. Conectar o repositório à Cloudflare

No painel da Cloudflare:

1. Abra **Workers e Pages**.
2. Inicie a criação de uma aplicação conectada ao Git.
3. Autorize o acesso à conta GitHub e escolha o repositório `willmachado77/mindhack-sec`.
4. Defina `main` como branch de produção.
5. Configure o comando de build como `npm run build`.
6. Configure `dist` como diretório dos arquivos estáticos gerados.
7. Salve e inicie a primeira implantação.

O comando `npm run build` executa a verificação do Astro e gera o site estático. A Cloudflare publica o conteúdo da pasta `dist` e fornece um endereço provisório no domínio `workers.dev`.

Antes de associar o domínio oficial, abra o endereço provisório e confira as páginas, os links e os recursos visuais.

## 3. Delegar o DNS à Cloudflare

O domínio `mindhacksec.tech` foi comprado na Hostinger, que permanece responsável pelo registro e pelas renovações. A administração técnica do DNS foi delegada à Cloudflare.

Na Hostinger, os nameservers originais foram substituídos por:

```text
alina.ns.cloudflare.com
zahir.ns.cloudflare.com
```

A propagação pode levar de alguns minutos a 24 horas. A configuração foi considerada concluída quando a visão geral da Cloudflare mostrou o domínio como ativo e protegido.

Essa alteração não transfere o domínio para a Cloudflare. Ela apenas determina qual serviço administra seus registros DNS.

## 4. Remover registros DNS conflitantes

A importação inicial do DNS trouxe registros que apontavam para a hospedagem provisória:

- registro `A` do domínio raiz para `2.57.91.91`;
- registro `CNAME` de `www` para `mindhacksec.tech`.

Esses registros foram removidos antes de associar os domínios ao Worker. Registros de e-mail, como `MX`, SPF, DKIM ou DMARC, não devem ser removidos sem análise específica.

## 5. Associar os domínios ao Worker

No projeto `mindhack-sec`, abra **Domínios** e use **Adicionar domínio** — não **Adicionar rota**.

Adicione separadamente:

```text
mindhacksec.tech
www.mindhacksec.tech
```

O domínio raiz é informado deixando vazio o campo opcional de subdomínio. Para o segundo endereço, informe somente `www`.

Depois da ativação, teste:

- `https://mindhacksec.tech`
- `https://www.mindhacksec.tech`
- `https://mindhacksec.tech/sitemap.xml`
- `https://mindhacksec.tech/robots.txt`

Também confira se o navegador apresenta conexão HTTPS válida.

## 6. Redirecionar WWW para o domínio principal

Para manter uma única URL oficial, foi criada na Cloudflare uma regra de redirecionamento permanente:

```text
https://www.mindhacksec.tech/* → https://mindhacksec.tech/*
```

No painel do domínio, abra **Regras**, escolha o modelo **Redirecionar de WWW para a raiz** e implante a regra com código HTTP `301`.

O redirecionamento deve preservar o caminho e os parâmetros. Por exemplo:

```text
https://www.mindhacksec.tech/dicas → https://mindhacksec.tech/dicas
```

## Rotina para atualizações

Antes de começar, use `git pull` quando existirem alterações feitas no GitHub ou em outro computador. Depois de mudar conteúdo ou código:

```bash
npm run build
git add <arquivos-alterados>
git commit -m "descrição curta da alteração"
git push
```

Cada `push` para `main` inicia uma publicação automática na Cloudflare. Verifique o resultado no endereço de produção e, para alterações relevantes, registre a decisão no diário de bordo.

Evite usar `git add .` sem revisar `git status` e `git diff`, pois isso pode incluir mudanças que não pertencem ao mesmo commit.

## Como reverter uma publicação

Se uma versão publicada tiver problema, abra **Implantações** no projeto da Cloudflare e restaure uma versão anterior disponível. Depois, corrija o problema no Git e envie um novo commit.

Não apague o histórico como primeira reação: ele registra o que ocorreu e facilita o aprendizado e a recuperação do projeto.
