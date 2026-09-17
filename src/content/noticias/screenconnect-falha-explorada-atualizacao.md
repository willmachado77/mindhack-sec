---

title: "Falha explorada no ScreenConnect exige atualização prioritária"
description: "A CISA incluiu a CVE-2026-84869, no ConnectWise ScreenConnect, no catálogo de vulnerabilidades exploradas. A falha pode permitir transferência e execução de arquivos durante sessões remotas ativas sem a autorização esperada; a correção está disponível no ScreenConnect 26.6.5 e versões posteriores."
publishedAt: 2026-09-16
tags: ["ConnectWise", "ScreenConnect", "Vulnerabilidades"]
source:
  label: "CISA — Known Exploited Vulnerabilities Catalog"
  url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
---


## O que aconteceu

A CISA incluiu a vulnerabilidade CVE-2026-84869, no ConnectWise ScreenConnect, em seu catálogo de vulnerabilidades exploradas. A inclusão indica que há exploração ativa confirmada, motivo pelo qual organizações que usam o produto devem tratar a atualização como prioritária.

O ScreenConnect é uma ferramenta de acesso e suporte remoto. Segundo a descrição publicada para a CVE, uma condição no cliente pode permitir a transferência e a execução de arquivos durante uma sessão remota ativa sem a autor

O ScreenConnect é uma ferramenta de acesso e suporte remoto. Segundo a descrição publicada para a CVE, uma condição no cliente pode permitir a transferência e a execução de arquivos durante uma sessão remota ativa sem a autorização ou a confirmação do anfitrião esperada.

A correção está disponível no ScreenConnect 26.6.5 e em versões posteriores. Administradores devem confirmar, com a documentação e o canal de suporte do fornecedor, a versão aplicável ao ambiente antes de realizar a atualização.

## Contexto e impacto

Ferramentas de acesso remoto costumam ter permissões amplas sobre os equipamentos atendidos. Por isso, uma falha que afete controles de autorização em sessões pode elevar o risco para computadores e redes administrados pela organização.

A confirmação de exploração ativa não significa que todas as instalações do ScreenConnect estejam comprometidas. A avaliação depende da versão utilizada, da configuração do ambiente, das sessões existentes e dos registros técnicos disponíveis.

Esta matéria não atribui a exploração a grupos específicos, não presume vítimas nem reproduz procedimentos que poderiam facilitar abuso da vulnerabilidade.

## O que o leitor pode fazer

Equipes responsáveis devem identificar instalações e clientes do ConnectWise ScreenConnect, verificar a versão em uso e aplicar a atualização indicada pelo fornecedor conforme a política de mudanças da organização.

Depois da atualização, é recomendável revisar contas com acesso remoto, permissões de transferência de arquivos, sessões administrativas e registros disponíveis do período anterior à correção. Essa revisão deve seguir os controles e procedimentos internos de resposta a incidentes.

Também vale confirmar que somente pessoas e dispositivos autorizados mantêm acesso ao ambiente de suporte remoto. Contas individuais, autenticação adicional compatível com o ambiente e restrições de acesso reduzem a exposição caso credenciais sejam indevidamente utilizadas.

## Fontes e limites

* Fonte primária: [CISA — Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
* Referência da vulnerabilidade: [NVD — CVE-2026-84869](https://nvd.nist.gov/vuln/detail/CVE-2026-84869)
* Fonte jornalística original: [BleepingComputer — Critical ScreenConnect flaw now actively exploited in attacks](https://www.bleepingcomputer.com/news/security/cisa-warns-of-hackers-exploiting-critical-screenconnect-flaw/)

Esta matéria atribui à CISA a confirmação de exploração ativa e usa a referência da CVE para descrever o impacto em alto nível. Ela não atribui os ataques, não presume comprometimento de instalações e não apresenta instruções de exploração.
