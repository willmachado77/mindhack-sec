---

title: "Microsoft confirma falha de login em domínio após atualizações do Windows 11"
description: "A Microsoft confirmou que algumas atualizações de segurança de setembro de 2026 podem impedir o login com credenciais de domínio válidas em dispositivos Windows 11. O problema envolve o recurso Machine Identity Isolation em cenários específicos. Há mitigação oficial enquanto a empresa prepara uma correção."
publishedAt: 2026-09-21
publishedTime: "10:28"
sourcePublishedAt: 2026-09-16
tags: ["Microsoft", "Windows 11", "Active Directory", "Atualizações"]
source:
  label: "Microsoft — problemas conhecidos do Windows 11"
  url: "https://learn.microsoft.com/en-us/windows/release-health/status-windows-11-26h1"
---


## O que aconteceu

A Microsoft confirmou que alguns dispositivos Windows 11 ingressados em domínio podem perder sua relação de confiança segura com o Active Directory após as atualizações de segurança de setembro de 2026.

Quando isso ocorre, pessoas usuárias podem não conseguir entrar no computador com credenciais de domínio válidas e receber uma mensagem informando falha na relação de confiança entre o dispositivo e o domínio. O login offline com credenciais armazenadas anteriormente pode continuar funcionando.

A empresa relaciona o problema ao recurso Machine Identity Isolation quando ele já estava configurado no ambiente. As atualizações passam a respeitar configurações existentes ou definidas por política para esse recurso; elas não ativam diretamente seu modo de imposição.

## Contexto e impacto

O problema afeta cenários específicos de Windows 11 24H2, 25H2 e 26H1. Para as versões 24H2 e 25H2, a atualização de setembro é a KB5124008; para a 26H1, é a KB5124012.

Segundo a Microsoft, o Machine Identity Isolation é suportado somente em ambientes conectados a controladores de domínio com Windows Server 2025 Domain Functional Level ou superior. Dispositivos que tinham o recurso configurado, mas não atendem a esse requisito, podem apresentar a falha.

A Microsoft informa que a replicação e os serviços do Active Directory nos controladores de domínio não são afetados. Ainda assim, o impacto em estações de trabalho pode impedir o acesso de equipes e interromper atividades dependentes de autenticação no domínio.

## O que o leitor pode fazer

Administradores devem identificar se há dispositivos afetados, confirmar a versão do Windows e verificar se o Machine Identity Isolation foi previamente configurado por Intune, Política de Grupo ou outro método de gerenciamento.

A mitigação deve seguir a orientação oficial da Microsoft e utilizar o mesmo método empregado para configurar o recurso no ambiente. Alterações diretas ou improvisadas em configurações de segurança podem ampliar o impacto; por isso, o procedimento deve ser avaliado, testado e documentado pela equipe responsável.

Após aplicar a mitigação oficial, é importante reiniciar o dispositivo e validar o canal seguro com o domínio conforme os procedimentos internos da organização. A Microsoft planeja resolver o problema em atualização futura, impedindo temporariamente a imposição do recurso enquanto aprimora seu funcionamento.

## Fontes e limites

* Fonte primária: [Microsoft — problemas conhecidos do Windows 11](https://learn.microsoft.com/en-us/windows/release-health/status-windows-11-26h1)
* Atualização relacionada: [Microsoft — KB5124008 para Windows 11 24H2 e 25H2](https://support.microsoft.com/en-us/servicing/os/windows-11/2026/09/kb5124008-windows-11-24h2-25h2-security-update)
* Fonte jornalística original: [BleepingComputer — Windows 11 KB5124008 update breaks domain trust for some users](https://www.bleepingcomputer.com/news/microsoft/windows-11-kb5124008-update-breaks-domain-trust-for-some-users/)

Esta matéria se limita ao problema confirmado pela Microsoft, aos ambientes descritos pela empresa e à sua mitigação oficial. Ela não presume que todos os dispositivos atualizados estejam afetados nem recomenda alterações não avaliadas pela administração do ambiente.

