---

title: "Adobe corrige zero-day explorado no Magento e Commerce; hotfix é prioritário"
description: "A Adobe confirmou exploração ativa da CVE-2026-75650, vulnerabilidade crítica de execução arbitrária de código sem autenticação em Adobe Commerce e Magento Open Source. Administradores devem aplicar o hotfix prioritário e avaliar o ambiente em busca de sinais de comprometimento."
publishedAt: 2026-09-12
tags: ["Adobe Commerce","Magento","Vulnerabilidades"]
source:
  label: "Adobe Security Bulletin — APSB26-146"
  url: "https://helpx.adobe.com/security/products/magento/apsb26-146.html"
---

## O que aconteceu

A Adobe publicou em 7 de setembro uma atualização de segurança para Adobe Commerce e Magento Open Source. O boletim APSB26-146 corrige a CVE-2026-75650, vulnerabilidade crítica que pode resultar em execução arbitrária de código.

A empresa informou que tem conhecimento de exploração ativa da falha. Segundo o boletim, a vulnerabilidade pode ser explorada sem credenciais e recebeu CVSS 10, a pontuação máxima da escala.

A Adobe disponibilizou um hotfix de prioridade 1 para as instalações afetadas. Essa classificação indica que a atualização deve ser tratada como urgente pelos responsáveis pelos ambientes de comércio eletrônico.

## Contexto e impacto

A CVE-2026-75650 está relacionada ao tratamento inadequado de elementos especiais em um mecanismo de templates. Em termos práticos, uma falha desse tipo pode permitir que código seja executado no servidor da loja sem autenticação prévia.

O boletim lista versões 2026-aug e anteriores de Adobe Commerce, Adobe Commerce B2B e Magento Open Source entre as versões afetadas. A identificação precisa depende da edição e da linha de versão instalada; por isso, a conferência deve seguir a tabela e as instruções atualizadas da Adobe.

Pesquisadores da Sansec, citados pela SecurityWeek, relataram ataques que usaram a falha para instalar backdoors em lojas comprometidas. Esse relato é uma observação independente: a Adobe confirma a exploração ativa e fornece o hotfix, mas o boletim não atribui campanhas, grupos ou todos os casos de comprometimento a um mesmo método.

## O que o leitor pode fazer

Administradores de Adobe Commerce e Magento Open Source devem identificar as instalações em operação e aplicar o hotfix da CVE-2026-75650 conforme as instruções da Adobe. É importante verificar a edição e a versão usadas antes de iniciar a atualização.

Depois da correção, a equipe responsável deve avaliar registros do servidor, alterações administrativas e comportamentos incomuns da aplicação. A Sansec aponta que um volume inesperado de mensagens de falha de pagamento pode justificar investigação, embora esse evento isolado também possa ter causas legítimas.

Também é recomendável revisar contas administrativas, extensões instaladas e alterações recentes no ambiente. Atualizar é indispensável, mas não permite concluir sozinho se uma loja foi comprometida anteriormente; essa conclusão exige análise dos sinais técnicos disponíveis no próprio ambiente.

## Fontes e limites

* Fonte primária: [Adobe Security Bulletin — APSB26-146](https://helpx.adobe.com/security/products/magento/apsb26-146.html)
* Fonte jornalística original: [BleepingComputer — Adobe fixes critical Magento zero-day exploited to backdoor servers](https://www.bleepingcomputer.com/news/security/adobe-fixes-critical-magento-zero-day-exploited-to-backdoor-servers/)
* Fonte secundária: [SecurityWeek — Adobe Commerce Zero-Day Exploited to Backdoor Online Stores](https://www.securityweek.com/adobe-commerce-zero-day-exploited-to-backdoor-online-stores/)

Esta matéria diferencia a confirmação da Adobe sobre exploração ativa e disponibilidade do hotfix das observações independentes sobre backdoors e indicadores de comprometimento. Informações futuras do fornecedor ou evidências técnicas adicionais devem motivar atualização explícita da publicação.
