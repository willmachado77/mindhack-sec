---

title: "Falhas exploradas no MikroTik RouterOS exigem atualização urgente"
description: "O CERT Polska confirmou exploração ativa de uma cadeia de vulnerabilidades no MikroTik RouterOS que pode levar ao controle total de roteadores com SSH acessível publicamente. As falhas CVE-2026-67276 e CVE-2026-86060 foram corrigidas nas versões 6.49.21, 7.23.4 e 7.24.2. Administradores devem atualizar os dispositivos, reduzir a exposição do SSH e verificar configurações e sinais de comprometimento."
publishedAt: 2026-09-15
tags: ["MikroTik", "RouterOS", "Vulnerabilidades"]
source:
  label: "CERT Polska — vulnerabilidades RouterOS exploradas ativamente"
  url: "https://cert.pl/en/posts/2026/09/vulnerabilities-in-mikrotik-routeros-actively-exploited/"
---
## O que aconteceu

O CERT Polska confirmou a exploração ativa de vulnerabilidades no MikroTik RouterOS, sistema utilizado em roteadores e outros equipamentos de rede da fabricante.

Duas falhas, identificadas como CVE-2026-67276 e CVE-2026-86060, podem ser combinadas para assumir o controle de dispositivos cuja administração por SSH esteja acessível a partir da internet. O CERT descreve esse conjunto como uma cadeia de vulnerabilidades e recomenda atualização imediata.

A MikroTik publicou correções para os canais suportados. As versões corrigidas informadas pelo fornecedor são 6.49.21 na linha *Long-term*, 7.23.4 na linha *Long-term* e 7.24.2 na linha *Stable*.

## Contexto e impacto

Roteadores ocupam uma posição central em redes domésticas e corporativas: eles controlam conexões, regras de acesso e a comunicação entre dispositivos. Por isso, o comprometimento de um equipamento desse tipo pode criar riscos para os sistemas conectados à mesma rede.

A confirmação de exploração ativa pelo CERT Polska se aplica ao cenário em que o serviço SSH do RouterOS está acessível por redes públicas. Isso não permite concluir que todos os equipamentos MikroTik estejam expostos ou comprometidos; a exposição depende da configuração, da versão instalada e dos serviços habilitados em cada dispositivo.

Além das duas falhas associadas à tomada de controle, o CERT divulgou outras vulnerabilidades no RouterOS. Esta matéria se limita à cadeia cuja exploração ativa foi confirmada e às medidas de redução de risco sustentadas pelas fontes.

## O que o leitor pode fazer

Administradores devem identificar os equipamentos MikroTik em uso, verificar a versão do RouterOS e aplicar a atualização disponibilizada pela fabricante conforme a linha de suporte adequada ao dispositivo.

Também é importante revisar se o SSH precisa estar acessível pela internet. Quando a administração remota for necessária, ela deve seguir a arquitetura e os controles definidos pela organização, com restrição de origem, contas individuais e proteção adicional compatível com o ambiente.

Após a atualização, a equipe responsável deve revisar usuários administrativos, serviços habilitados, regras de acesso e alterações recentes de configuração. A correção reduz a exposição, mas não confirma nem descarta um comprometimento anterior; essa avaliação depende dos registros e sinais técnicos de cada ambiente.

Usuários domésticos que não administram seus roteadores diretamente podem verificar se o equipamento recebe atualizações do provedor ou do responsável pela rede. Em caso de dúvida, o procedimento deve ser feito com apoio técnico, evitando mudanças improvisadas na configuração de conexão.

## Fontes e limites

* Fonte primária: [CERT Polska — vulnerabilidades RouterOS exploradas ativamente](https://cert.pl/en/posts/2026/09/vulnerabilities-in-mikrotik-routeros-actively-exploited/)
* Fonte do fornecedor: [MikroTik — atualização de segurança de setembro de 2026](https://mikrotik.com/supportsec/september-2026-vulnerability)
* Fonte jornalística original: [BleepingComputer — Hackers exploit new MikroTik RouterOS flaws to hijack routers](https://www.bleepingcomputer.com/news/security/hackers-exploit-new-mikrotik-routeros-flaws-to-hijack-routers/)

Esta matéria atribui ao CERT Polska a confirmação de exploração ativa e à MikroTik as versões corrigidas. Ela não reproduz procedimentos de invasão, não atribui a atividade a grupos específicos e não presume comprometimento de equipamentos cuja exposição não tenha sido verificada.
