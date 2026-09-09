# Diário de bordo

## 2026-08-14 — Fundação do MVP

- Definido o escopo: institucional, notícias, dicas e cursos do YouTube.
- Escolhido Astro para geração estática e Cloudflare Pages como hospedagem pretendida.
- Implementadas as páginas Início, Notícias, Dicas, Cursos e Sobre.
- Registrada a decisão de não criar área de usuários nesta fase, por custo e segurança.
- Preparados cabeçalhos de segurança para Cloudflare Pages e instrução de indexação para buscadores.
- Alinhada a identidade visual ao banner e avatar do canal: azul-grafite como base, âmbar como assinatura e vermelho profundo como cor de tensão.
- Conectados os chamados do site ao canal oficial no YouTube, sem incorporar o player ou recursos de terceiros nesta fase.
- Implementada a base editorial em Markdown com coleções tipadas para dicas, notícias e cursos; publicadas cinco dicas inaugurais com fontes oficiais para aprofundamento.
- Preparados favicon, manifesto e metadados sociais para compartilhamento.
- Configurado o domínio de produção `mindhacksec.tech`, com URLs canônicas e sitemap estático.
## Próximos registros

Cada etapa deve incluir: objetivo, decisão tomada, o que foi aprendido, como foi testado e o que ficará para depois.
## 2026-08-15 — Preparação para publicação

- Registrado o procedimento de publicação em GitHub e Cloudflare Pages, incluindo verificação e reversão.
- Confirmada a conta GitHub `willmachado77` e o domínio `mindhacksec.tech` adquirido na Hostinger.
- Próxima etapa: configurar a autoria do Git, criar o primeiro commit e enviar o repositório para o GitHub.
## 2026-08-15 — Publicação do site

### Objetivo

Publicar o MVP do MindHack Sec em seu domínio oficial, com versionamento no GitHub, HTTPS e redirecionamento de endereço.

### Implementação

- Configurada a autoria local do Git como `Will Machado <mindhacksec@proton.me>`.
- Criado e sincronizado o repositório público `willmachado77/mindhack-sec`.
- Configurada uma chave SSH exclusiva para autenticação no GitHub.
- Conectado o repositório à Cloudflare para publicação automática.
- Alterados na Hostinger os nameservers do domínio para:

  - `alina.ns.cloudflare.com`
  - `zahir.ns.cloudflare.com`

- Removidos os registros DNS antigos que apontavam para a hospedagem provisória.
- Associados ao Worker os domínios personalizados:

  - `mindhacksec.tech`
  - `www.mindhacksec.tech`

- Criada uma regra permanente HTTP 301 para redirecionar `www.mindhacksec.tech` para `mindhacksec.tech`.

### Verificação

- O domínio principal abriu corretamente em HTTPS.
- O subdomínio `www` abriu corretamente e foi redirecionado para o domínio principal.
- O certificado foi emitido pelo Google Trust Services.
- A conexão foi validada com TLS 1.3.
- O ambiente publicado corresponde à branch `main` do repositório.

### Aprendizados

- Comprar o domínio e hospedar o site são operações diferentes.
- A Hostinger permanece como registradora do domínio.
- A Cloudflare administra DNS, HTTPS, publicação e redirecionamentos.
- Nameservers delegam a administração do DNS, mas não transferem a propriedade do domínio.
- Um domínio personalizado de Worker é diferente de uma rota de Worker.
- Registros DNS antigos podem impedir a associação de um domínio personalizado.

### Próximas etapas

- Atualizar a documentação de publicação para refletir a configuração real com Cloudflare Workers.
- Documentar a rotina de atualização do site.
- Validar sitemap, robots.txt e cabeçalhos de segurança em produção.
- Definir uma licença para o código.

## 2026-09-08 — Primeira publicação editorial via NecroPaper

### Objetivo

Publicar a primeira notícia factual do MindHack Sec a partir da esteira local do NecroPaper, preservando revisão humana, rastreabilidade de fontes e controle manual de publicação.

### Implementação

- Integrado o NecroPaper ao repositório do MindHack Sec como gerador de rascunhos locais, sem acesso a credenciais de deploy e sem escrita automática em `src/content`.
- Adicionados contrato editorial, modelo de entrada de pauta aprovada e gerador local de rascunhos Markdown.
- Mantida a regra de que somente pautas com status editorial `aprovar` podem gerar rascunhos.
- Revisada e aprovada a pauta de ID `921`.
- Publicada a notícia `Falhas no SharePoint Server permitem cadeia de ataque com execução remota de código`.
- Preservada a distinção entre a exploração ativa confirmada da CVE-2026-55040 e a cadeia técnica que inclui a CVE-2026-63520.
- Corrigida globalmente a exibição de datas editoriais para tratar valores `AAAA-MM-DD` como datas de calendário, evitando recuo de um dia por fuso horário.
- Criada uma nova chave SSH local para restabelecer a autenticação com o GitHub, sem expor chaves privadas ou passphrases.

### Verificação

- `npm run build` concluído sem erros, avisos ou hints.
- A rota `/noticias/falhas-sharepoint-cadeia-rce/` foi gerada localmente.
- O commit `d632b85` foi enviado à branch `main`.
- A publicação automática na Cloudflare foi confirmada pela resposta pública da URL da notícia.
- A notícia foi revisada visualmente no site publicado.

### Decisões e aprendizados

- A aprovação editorial permite a redação, mas não substitui a decisão humana de publicar.
- O fluxo de rascunho fora de `src/content` reduz o risco de publicar conteúdo incompleto por engano.
- Datas editoriais sem horário precisam de formatação explícita para não sofrerem alteração visual por fuso horário.
- A passphrase de uma chave SSH é diferente da senha de login do GitHub.
- O `git add .` deve continuar evitado; cada commit deve conter apenas arquivos revisados e relacionados à mesma mudança.

### Próximas etapas

- Avaliar uma seção de últimas notícias na página inicial, com grade no desktop e navegação horizontal acessível no mobile.
- Corrigir e aprimorar a navegação mobile após diagnóstico visual.
- Encaminhar a pauta aprovada de ID `9171` pela mesma esteira editorial.
- Manter os backups locais até a estabilização dos próximos ajustes de design.
