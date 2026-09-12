---

title: "Microsoft corrige dois zero-days do Windows explorados; atualização exige prioridade"
description: "A atualização de segurança de setembro da Microsoft corrige duas vulnerabilidades do Windows exploradas em ataques. Ambas podem permitir elevação local de privilégios, por isso usuários e organizações devem verificar e aplicar as atualizações disponíveis."
publishedAt: 2026-09-12
tags: ["Microsoft","Windows","Vulnerabilidades"]
source:
  label: "Microsoft Security Update Guide — CVE-2026-81963"
  url: "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-81963"
---
## O que aconteceu

A Microsoft incluiu correções para duas vulnerabilidades do Windows exploradas em ataques na atualização de segurança de setembro: CVE-2026-81963 e CVE-2026-85880.

A CVE-2026-81963 afeta o Windows Update Stack e está relacionada à resolução inadequada de links antes do acesso a arquivos. A CVE-2026-85880 foi classificada como uma vulnerabilidade de heap-based buffer overflow no Windows.

As duas falhas podem permitir elevação local de privilégios. Isso significa que o risco principal está em um invasor que já obteve alguma forma de execução ou acesso no dispositivo e tenta ampliar suas permissões. Essa característica não equivale, por si só, a uma invasão remota automática pela internet.

## Contexto e impacto

A Microsoft informou que conhece exploração ativa da CVE-2026-81963. A CVE-2026-85880 também foi registrada no catálogo de Vulnerabilidades Conhecidamente Exploradas da CISA, indicando exploração observada.

A elevação de privilégios pode ampliar o impacto de uma invasão já iniciada, permitindo que um invasor tenha acesso maior ao sistema. Por isso, a atualização deve ser priorizada em computadores corporativos, servidores e dispositivos que processam informações importantes.

Fontes públicas apresentaram contagens diferentes para o total de correções liberadas pela Microsoft em setembro. Esta matéria não usa uma contagem única porque as metodologias de agrupamento podem variar. O ponto confirmado e relevante para o leitor são as duas falhas exploradas e as atualizações disponíveis para mitigá-las.

## O que o leitor pode fazer

Em computadores pessoais, verifique o Windows Update e instale as atualizações de segurança oferecidas para o dispositivo. Reinicie o computador quando o sistema solicitar, pois algumas correções só entram em vigor depois da reinicialização.

Organizações devem identificar ativos Windows sob sua administração, priorizar a aplicação das atualizações conforme suas políticas de teste e confirmar a instalação nos equipamentos gerenciados. Sistemas que não puderem ser atualizados imediatamente merecem controles compensatórios e acompanhamento reforçado.

Aplicar a atualização reduz a exposição, mas não confirma nem descarta um comprometimento anterior. Investigações devem considerar sinais técnicos do ambiente, registros disponíveis e os procedimentos de resposta a incidentes da organização.

## Fontes e limites

* Fonte primária: [Microsoft Security Update Guide — CVE-2026-81963](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-81963)
* Fonte jornalística original: [BleepingComputer — Microsoft September 2026 Patch Tuesday fixes 966 flaws, 2 zero-days](https://www.bleepingcomputer.com/news/microsoft/microsoft-september-2026-patch-tuesday-fixes-966-flaws-2-zero-days/)
* Fonte secundária: [NVD — CVE-2026-85880](https://nvd.nist.gov/vuln/detail/CVE-2026-85880)

Esta matéria se limita aos dois CVEs explorados e às medidas de atualização. Ela não atribui ataques a grupos específicos, não presume acesso remoto e não usa uma contagem única para o conjunto de falhas corrigidas.
