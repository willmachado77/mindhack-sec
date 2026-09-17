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

## 2026-09-10 — Segunda publicação editorial via NecroPaper

### Objetivo

Publicar uma notícia revisada sobre a CVE-2026-86218 no N-able N-central, mantendo a revisão humana, a rastreabilidade das fontes e os limites de confirmação técnica.

### Implementação

* Recuperada no NecroPaper a pauta aprovada de ID `9171`.
* Gerado um rascunho local a partir da pauta estruturada, fora de `src/content`.
* Revisado o título para evitar afirmar como fato absoluto uma condição descrita de modo divergente nas comunicações públicas.
* Publicada a notícia `N-able alerta para zero-day no N-central; HF4 corrige RCE pré-autenticada`.
* Mantida a distinção entre a CVE-2026-86218, as CVEs 2026-86206 e CVE-2026-86207 e as vulnerabilidades tratadas em atualizações anteriores.
* Mantida a ressalva de que a página de incidente da N-able relata exploração observada, enquanto notas de atualização citadas pela Huntress registravam ausência de confirmação de exploração em ambientes de produção.
* Incluídas orientações proporcionais: aplicação do Hotfix 4 em instalações locais, revisão de contas e registros e restrição de acesso ao console.

### Verificação

* Confirmado que o conteúdo publicável não continha marcadores de rascunho.
* `npm run build` foi concluído com 0 erros, 0 avisos e 0 dicas.
* A rota `/noticias/n-able-ncentral-hf4-rce/` foi gerada localmente.
* Revisado o diff entre o rascunho local e o arquivo publicável; a única diferença foi a remoção do comentário interno de rascunho.
* Criado o commit `34b8161` com somente a nova notícia.
* O commit foi enviado à branch `main`.
* A publicação automática da Cloudflare foi confirmada pela resposta pública da URL da notícia.

### Decisões e aprendizados

* O título de uma notícia de segurança deve refletir também os limites da evidência disponível, mesmo quando a pauta já está aprovada.
* Rascunho local, conteúdo publicável e commit devem permanecer etapas distintas e verificáveis.
* Arquivos não rastreados não aparecem no `git diff` comum; a revisão pode ser feita com `git diff --no-index` antes do `git add`.
* Alterações locais não relacionadas, como o `README.md`, devem continuar fora dos commits editoriais.

### Próximas etapas

* Encaminhar a pauta aprovada de ID `6667` pela mesma esteira editorial.
* Avaliar as próximas pautas aprovadas conforme atualidade, impacto e confirmação de fontes.
* Preparar a documentação pública e sanitizada do projeto NecroPaper em repositório próprio, sem credenciais, dados locais ou conteúdo operacional sensível.

## 2026-09-10 e 2026-09-12 — Terceira e quarta publicações editoriais via NecroPaper

### Objetivo

Publicar duas notícias factuais revisadas a partir de pautas aprovadas no NecroPaper, preservando a revisão humana, a rastreabilidade de fontes, os limites de confirmação técnica e o controle manual de publicação.

### Implementação

* Publicada a notícia `Falhas zero-day no SonicWall SMA1000 são exploradas; atualização urgente corrige cadeia potencial de RCE`, originada da pauta de ID `6667`.
* Mantida a distinção entre a confirmação de exploração ativa das CVEs `2026-83548` e `2026-83549` e a possibilidade técnica de encadeamento para execução remota de comandos.
* Informado que o escopo declarado pelo fornecedor abrange os modelos SMA1000 6210, 7210 e 8200v.
* Publicada a notícia `Google corrigiu zero-day explorado no Chrome; mantenha o navegador atualizado`, originada da pauta de ID `8133`.
* A pauta do Chrome foi reaberta antes da redação para atualizar o enquadramento temporal: versões divulgadas em 3 de setembro foram tratadas como contexto datado, enquanto a orientação atual é verificar a atualização mais recente oferecida pelo navegador.
* Mantida a confirmação do Google de exploração ativa da CVE-2026-85046, sem atribuição a grupo, campanha ou método não confirmado publicamente.
* Em ambas as publicações, os rascunhos foram gerados fora de `src/content`, revisados antes da cópia manual e publicados somente após validação técnica.

### Verificação

* `npm run build` foi concluído sem erros, avisos ou dicas antes de cada publicação.
* As rotas `/noticias/sonicwall-sma1000-rce/` e `/noticias/chrome-zero-day-v8-atualizacao/` foram geradas localmente.
* O conteúdo publicável foi verificado para impedir a inclusão de marcadores internos de rascunho.
* Durante a preparação da notícia do Chrome, uma duplicação acidental de conteúdo foi identificada antes do estágio Git, preservada em backup local e removida do arquivo publicável.
* Criados os commits `aa6e85a` para a notícia sobre SonicWall e `72234e8` para a notícia sobre Chrome.
* Ambos os commits foram enviados manualmente à branch `main`.
* As duas publicações foram confirmadas nas respectivas URLs públicas após a implantação automática da Cloudflare.

### Decisões e aprendizados

* A confirmação de exploração ativa não autoriza presumir que toda cadeia técnica possível foi usada em incidentes observados.
* Recomendações de atualização devem evitar fixar números de versão quando a informação pode envelhecer rapidamente; a orientação deve permanecer válida para o leitor no momento do acesso.
* A separação entre rascunho local, conteúdo publicável, estágio Git e publicação permite detectar e corrigir erros de edição antes do deploy.
* Registros documentais podem agrupar publicações relacionadas, desde que cada decisão, verificação e limite editorial permaneça rastreável.
* Alterações locais não relacionadas, como o `README.md`, continuam fora dos commits editoriais e documentais.

### Próximas etapas

* Avaliar novas pautas aprovadas de acordo com atualidade, impacto e confirmação das fontes.
* Manter a revisão humana como condição obrigatória para qualquer nova publicação.
* Preparar, em etapa própria, documentação pública e sanitizada do projeto NecroPaper em repositório independente.

## 2026-09-12 e 2026-09-13 — Quinta, sexta e sétima publicações editoriais via NecroPaper

### Objetivo

Publicar três notícias factuais revisadas a partir de pautas aprovadas no NecroPaper, mantendo revisão humana, rastreabilidade de fontes, limites explícitos de confirmação técnica e publicação manual controlada.

### Implementação

* Publicada a notícia `Adobe corrige zero-day explorado no Magento e Commerce; hotfix é prioritário`, originada da pauta de ID `10331`.
* Registrada a confirmação da Adobe sobre exploração ativa da CVE-2026-75650 e a disponibilização de hotfix prioritário.
* Mantida a distinção entre os fatos confirmados pela Adobe e relatos independentes sobre backdoors e possíveis indicadores de comprometimento.
* Publicada a notícia `Microsoft corrige dois zero-days do Windows explorados; atualização exige prioridade`, originada da pauta de ID `10532`.
* Mantido o foco nas CVEs `2026-81963` e `2026-85880`, ambas relacionadas à elevação local de privilégios.
* Evitado o uso de uma contagem única para as correções de setembro, pois fontes públicas apresentaram números divergentes.
* Publicada a notícia `SAP corrige falha crítica no kernel; CVE-2026-44756 exige atualização urgente`, originada da pauta de ID `10371`.
* Diferenciada a correção publicada pela SAP e o risco técnico de execução remota de código descrito em alertas independentes da ausência de confirmação pública de exploração ativa.
* Em todas as publicações, os rascunhos foram gerados fora de `src/content`, revisados antes da cópia manual e enviados ao site somente após validação técnica.

### Verificação

* `npm run build` foi concluído sem erros, avisos ou dicas antes de cada publicação.
* As rotas `/noticias/adobe-magento-zero-day-hotfix/`, `/noticias/windows-zero-days-atualizacao-setembro/` e `/noticias/sap-overpass-cve-2026-44756/` foram geradas localmente.
* Os conteúdos publicáveis foram verificados para impedir a inclusão de marcadores internos de rascunho.
* Foram revisadas as diferenças entre os rascunhos locais e os arquivos publicáveis; em cada caso, a remoção do comentário interno foi a alteração necessária.
* Criados os commits `93aa4a7`, `7e7a5e5` e `c92b7f6`, cada um contendo somente sua respectiva notícia.
* Os três commits foram enviados manualmente à branch `main`.
* As três publicações foram confirmadas nas respectivas URLs públicas após a implantação automática da Cloudflare.

### Decisões e aprendizados

* A confirmação de exploração ativa pelo fornecedor deve permanecer separada de relatos independentes sobre técnicas, backdoors ou indicadores de comprometimento.
* A severidade máxima e o potencial técnico de uma falha não autorizam afirmar exploração ativa sem confirmação pública correspondente.
* Para atualizações amplas, uma notícia pode priorizar os CVEs relevantes e as ações do leitor, sem reproduzir contagens divergentes de falhas.
* A separação entre rascunho local, conteúdo publicável, estágio Git e publicação continua permitindo identificar problemas antes do deploy.
* Alterações locais não relacionadas, como o `README.md`, permanecem fora dos commits editoriais e documentais.

### Próximas etapas

* Avaliar novas pautas aprovadas conforme atualidade, impacto e confirmação das fontes.
* Manter a revisão humana como condição obrigatória para qualquer nova publicação.
* Preparar, em etapa própria, documentação pública e sanitizada do projeto NecroPaper em repositório independente.

## 2026-09-15 — Oitava e nona publicações editoriais via NecroPaper

### Objetivo

Publicar duas notícias revisadas a partir de pautas aprovadas no NecroPaper, mantendo a revisão humana, a rastreabilidade de fontes, os limites de confirmação técnica e o controle manual de publicação.

### Implementação

* Publicada a notícia `Campanha BigBear mira Microsoft 365 e contorna MFA por roubo de sessão`, originada da pauta de ID `9531`.
* Atribuídos à pesquisa da CloudSEK, divulgada pelo BleepingComputer, o nome da operação, os números e o alcance relatado da campanha.
* Mantida a distinção entre essa pesquisa e a orientação geral da Microsoft sobre roubo de tokens e sessões; não foi afirmado que a Microsoft confirmou a campanha BigBear específica.
* Publicada a notícia `CRA da União Europeia inicia reporte obrigatório de vulnerabilidades exploradas`, originada da pauta de ID `10612`.
* Utilizado o texto oficial do Regulamento (UE) 2024/2847 como fonte primária para explicar o início da aplicação do Artigo 14 em 11 de setembro de 2026.
* Registrados os prazos de alerta inicial em até 24 horas, notificação complementar em até 72 horas e relatórios finais conforme o tipo de ocorrência.
* Preservada a distinção entre o início das obrigações de reporte do Artigo 14 e a aplicação geral do CRA em 11 de dezembro de 2027.
* Em ambas as publicações, os rascunhos foram gerados fora de `src/content`, revisados antes da cópia manual e publicados somente após validação técnica.

### Verificação

* `npm run build` foi concluído sem erros, avisos ou dicas antes de cada publicação.
* As rotas `/noticias/bigbear-microsoft-365-mfa-sessao/` e `/noticias/cra-ue-reporte-vulnerabilidades/` foram geradas localmente.
* Os conteúdos publicáveis foram verificados para impedir a inclusão de marcadores internos de rascunho.
* Foram revisadas as diferenças entre os rascunhos locais e os arquivos publicáveis; em ambos os casos, a remoção do comentário interno foi a única alteração necessária.
* Criados os commits `acbe47c` para a notícia sobre BigBear e `2e99fbe` para a notícia sobre o CRA.
* Ambos os commits foram enviados manualmente à branch `main`.
* As duas publicações foram confirmadas nas respectivas URLs públicas após a implantação automática da Cloudflare.

### Decisões e aprendizados

* Relatos de campanhas e pesquisas de terceiros devem identificar claramente sua origem, sem transformar dados divulgados por pesquisadores em confirmação independente.
* MFA continua essencial, mas o roubo de sessões autenticadas exige controles complementares, monitoramento e métodos resistentes a phishing.
* Matérias sobre normas e regulamentos precisam separar fatos verificáveis, prazos de aplicação e avaliação jurídica individual.
* A existência de uma obrigação de reporte não significa que toda organização fora da União Europeia esteja automaticamente sujeita a ela.
* O fluxo de rascunho local, revisão humana, validação técnica e publicação manual permanece adequado para conteúdo editorial de segurança e governança.

### Próximas etapas

* Avaliar novas pautas aprovadas conforme atualidade, impacto e confirmação das fontes.
* Manter a revisão humana como condição obrigatória para qualquer nova publicação.
* Preparar, em etapa própria, documentação pública e sanitizada do projeto NecroPaper em repositório independente.

## 2026-09-15 — Décima e décima primeira publicações editoriais via NecroPaper

### Objetivo

Publicar duas notícias factuais revisadas, preservando revisão humana, rastreabilidade de fontes, limites explícitos de confirmação técnica e controle manual de publicação.

### Implementação

* Publicada uma notícia sobre a classificação, pela OpenAI, do modelo Astra no nível de capacidade crítica de cibersegurança previsto em seu *Preparedness Framework*.
* A matéria atribuiu à própria OpenAI a avaliação de que, com ferramentas e acessos adequados, o modelo pode identificar vulnerabilidades ainda desconhecidas e desenvolver formas de exploração em sistemas bem protegidos.
* Mantida a distinção entre a avaliação e as salvaguardas declaradas pela empresa e uma confirmação independente dessas capacidades.
* Publicada a notícia `Falhas exploradas no MikroTik RouterOS exigem atualização urgente`, originada da pauta de ID `9332`.
* Registrada a confirmação do CERT Polska sobre exploração ativa de uma cadeia envolvendo as CVEs `2026-67276` e `2026-86060` quando a administração SSH está acessível pela internet.
* Atribuídas à MikroTik as versões corrigidas `6.49.21`, `7.23.4` e `7.24.2`.
* Mantida a ressalva de que a correção reduz a exposição, mas não confirma nem descarta comprometimento prévio de equipamentos específicos.

### Verificação

* `npm run build` foi concluído sem erros, avisos ou dicas.
* As rotas `/noticias/openai-astra-ciberseguranca-critica/` e `/noticias/mikrotik-routeros-falhas-exploradas/` foram geradas localmente.
* Os conteúdos publicáveis foram verificados para impedir a inclusão de marcadores internos de rascunho.
* Na matéria sobre MikroTik, a diferença entre rascunho e conteúdo publicável foi apenas a remoção do comentário interno.
* Criados os commits `3c7a5cd` e `a325beb`, cada um contendo somente sua respectiva notícia.
* Ambos os commits foram enviados manualmente à branch `main`.
* As duas publicações foram confirmadas nas URLs públicas após a implantação automática da Cloudflare.
* O `README.md`, que continha alteração local não relacionada, permaneceu fora dos commits editoriais.

### Decisões e aprendizados

* Declarações de capacidade e classificações de risco feitas por fornecedores devem ser atribuídas explicitamente à fonte, sem apresentá-las como validação independente.
* A confirmação de exploração ativa em equipamentos de rede não autoriza presumir que todos os dispositivos da fabricante estejam expostos ou comprometidos.
* Atualização de software, redução de superfície exposta e investigação de sinais técnicos são medidas complementares, com finalidades distintas.
* A separação entre rascunho local, conteúdo publicável, revisão técnica, commit específico e confirmação pública continua reduzindo o risco de erros editoriais e operacionais.

### Próximas etapas

* Avaliar novas pautas aprovadas conforme atualidade, impacto e confirmação das fontes.
* Manter a revisão humana como condição obrigatória para qualquer nova publicação.
* Preparar, em etapa própria, documentação pública e sanitizada do projeto NecroPaper em repositório independente.

