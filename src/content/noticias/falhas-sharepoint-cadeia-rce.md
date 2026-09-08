---
title: "Falhas no SharePoint Server permitem cadeia de ataque com execução remota de código"
description: "Duas vulnerabilidades no Microsoft SharePoint Server podem ser encadeadas para contornar a autenticação e executar código remotamente. A CVE-2026-55040 já consta no catálogo de vulnerabilidades exploradas da CISA; a CVE-2026-63520 completa a cadeia de RCE em servidores vulneráveis. As organizações devem aplicar as atualizações de segurança e evitar expor servidores SharePoint à internet quando isso não for necessário."
publishedAt: 2026-09-08
tags: ["Microsoft","SharePoint Server","Vulnerabilidades"]
source:
  label: "Microsoft Security Response Center — CVE-2026-63520"
  url: "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-63520"
---

## O que aconteceu

A Microsoft publicou correções para duas vulnerabilidades no SharePoint Server que pesquisadores da Rapid7 demonstraram como parte de uma cadeia de ataque. A CVE-2026-55040 permite contornar a autenticação; a CVE-2026-63520 é uma vulnerabilidade de execução remota de código.

A CISA adicionou a CVE-2026-55040 ao catálogo de Vulnerabilidades Conhecidamente Exploradas (KEV), indicando evidência de exploração ativa dessa falha de autenticação. A CVE-2026-63520 completa a cadeia técnica demonstrada pelos pesquisadores quando combinada com a primeira vulnerabilidade.

## Contexto e impacto

O risco é relevante para organizações que operam SharePoint Server em infraestrutura própria. Segundo a Rapid7, a CVE-2026-55040 pode permitir que um invasor remoto não autenticado assuma a identidade de um usuário ou administrador do site. A CVE-2026-63520 pode permitir execução de código no servidor vulnerável com os privilégios da conta de serviço do SharePoint.

A inclusão da CVE-2026-55040 no catálogo KEV confirma exploração ativa dessa vulnerabilidade. Isso não equivale, por si só, à confirmação pública de exploração em campo da cadeia completa que inclui a CVE-2026-63520. Essa distinção é importante para informar com precisão, sem reduzir a urgência de aplicar as correções disponíveis.

## O que o leitor pode fazer

Organizações que utilizam SharePoint Server devem identificar as instâncias em operação e priorizar as atualizações de segurança disponibilizadas pela Microsoft. Também é prudente avaliar se esses servidores precisam permanecer expostos à internet e revisar procedimentos de monitoramento e resposta a incidentes.

Antes de tratar qualquer atividade como comprometimento, a equipe responsável deve confrontar sinais técnicos com a orientação do fornecedor e com a realidade do próprio ambiente.

## Fontes e limites

- Fonte primária: [Microsoft Security Response Center — CVE-2026-63520](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-63520)
- Confirmação de exploração ativa da CVE-2026-55040: [CISA — catálogo KEV](https://www.cisa.gov/news-events/alerts/2026/08/18/cisa-adds-four-known-exploited-vulnerabilities-catalog)
- Análise da cadeia e da CVE-2026-55040: [Rapid7](https://www.rapid7.com/blog/post/ve-cve-2026-55040-microsoft-sharepoint-jwt-token-authentication-bypass-fixed/)
- Análise da CVE-2026-63520: [Rapid7](https://www.rapid7.com/blog/post/etr-cve-2026-63520-microsoft-sharepoint-remote-code-execution-fixed/)

A matéria diferencia a exploração ativa confirmada da CVE-2026-55040 da demonstração técnica da cadeia que inclui a CVE-2026-63520. Informações futuras sobre exploração da segunda vulnerabilidade devem motivar atualização explícita da publicação.
