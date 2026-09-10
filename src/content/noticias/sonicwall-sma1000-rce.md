---

title: "Falhas zero-day no SonicWall SMA1000 são exploradas; atualização urgente corrige cadeia potencial de RCE"
description: "A SonicWall alertou para duas vulnerabilidades exploradas ativamente em appliances SMA1000. A aplicação dos hotfixes atualizados é urgente; as falhas podem ser encadeadas para execução remota de comandos sem autenticação."
publishedAt: 2026-09-10
tags: ["SonicWall","SMA1000","Vulnerabilidades"]
source:
  label: "SonicWall PSIRT — SNWLID-2026-0016"
  url: "https://psirt.global.sonicwall.com/vuln-detail/SNWLID-2026-0016"

---

## O que aconteceu

A SonicWall divulgou duas vulnerabilidades que afetam appliances SMA1000 e informou que ambas estão sendo exploradas ativamente. A CVE-2026-83548 é uma falha de SSRF pré-autenticação na interface Work Place. A CVE-2026-83549 é uma vulnerabilidade de injeção de comandos no Appliance Management Console.

A análise da Rapid7 informa que as duas falhas podem ser encadeadas: a SSRF pode tornar possível explorar a injeção de comandos sem autenticação prévia. Esse encadeamento pode resultar em execução remota de comandos no appliance afetado.

Os produtos afetados são os modelos SMA1000 6210, 7210 e 8200v. A SonicWall disponibilizou hotfixes atualizados para as linhas de versão atingidas.

## Contexto e impacto

Os appliances SMA1000 são usados como gateways de acesso remoto a aplicações e recursos internos. Em instalações em que a interface Work Place fica exposta à internet, uma exploração bem-sucedida pode representar risco significativo para a infraestrutura acessível por meio do equipamento.

A CVE-2026-83548 recebeu pontuação CVSS 10 e permite que um invasor remoto não autenticado acesse funcionalidades sensíveis por um caminho não previsto. A CVE-2026-83549, isoladamente, exige condições específicas e uma conta administrativa; combinada com a primeira falha, porém, pode permitir execução de comandos sem autenticação.

A SonicWall confirmou exploração ativa das duas vulnerabilidades. Isso não permite concluir, por si só, que todos os casos observados utilizaram a cadeia completa entre as duas CVEs. A matéria também não deve confundir essas falhas com as vulnerabilidades SMA1000 divulgadas em julho de 2026.

## O que o leitor pode fazer

Organizações que utilizam os modelos SMA1000 afetados devem identificar a versão instalada e aplicar os hotfixes atualizados indicados pela SonicWall:

* `12.4.3-03526` ou superior, para a linha 12.4.3;
* `12.5.0-02952` ou superior, para a linha 12.5.0.

Como a exploração ocorreu antes da divulgação pública, atualizar o software não basta para determinar se houve comprometimento anterior. Também é importante revisar a exposição da interface Work Place, os registros do appliance e acessos administrativos recentes.

A SonicWall recomenda buscar apoio do suporte técnico para revisar indicadores de comprometimento. Caso sejam encontradas evidências de invasão, as orientações do fornecedor incluem reconstruir ou reimplantar o appliance afetado, alterar senhas de usuários e administradores e redefinir tokens TOTP.

## Fontes e limites

* Fonte primária: [SonicWall PSIRT — SNWLID-2026-0016](https://psirt.global.sonicwall.com/vuln-detail/SNWLID-2026-0016)
* Análise independente: [Rapid7 — Critical SonicWall SMA1000 Vulnerabilities CVE-2026-83548, CVE-2026-83549 Exploited in the Wild](https://www.rapid7.com/blog/post/etr-critical-sonicwall-sma1000-vulnerabilities-cve-2026-83548-cve-2026-83549-exploited-in-the-wild/)
* Fonte jornalística original: [BleepingComputer — SonicWall warns of actively exploited SMA1000 zero-day flaws](https://www.bleepingcomputer.com/news/security/sonicwall-warns-of-actively-exploited-sma1000-zero-day-flaws/)

A confirmação de exploração ativa refere-se às duas vulnerabilidades. A possibilidade de encadeamento para RCE é tecnicamente documentada, mas não há base para atribuir automaticamente cada caso público de exploração à cadeia completa.
