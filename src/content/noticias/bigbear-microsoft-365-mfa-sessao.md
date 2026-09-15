---

title: "Campanha BigBear mira Microsoft 365 e contorna MFA por roubo de sessão"
description: "Pesquisadores da CloudSEK, citados pelo BleepingComputer, relataram que o serviço de phishing BigBear 2.0 foi usado contra contas Microsoft 365 para coletar credenciais e cookies de sessão, contornando MFA em alguns casos. O relatório menciona 258 organizações com ao menos uma credencial comprometida. Organizações devem revisar sessões, reforçar políticas de acesso e priorizar MFA resistente a phishing."
publishedAt: 2026-09-15
tags: ["Microsoft 365", "Phishing", "MFA"]
source:
  label: "BleepingComputer — pesquisa da CloudSEK sobre BigBear 2.0"
  url: "https://www.bleepingcomputer.com/news/security/bigbear-microsoft-365-phishing-service-bypassed-mfa-at-258-organizations/"
---
## O que aconteceu

Pesquisadores da CloudSEK, citados pelo BleepingComputer, relataram uma campanha que usa o serviço de phishing como serviço BigBear 2.0 contra contas Microsoft 365. Segundo a pesquisa divulgada, a operação coletou credenciais e cookies de sessão de usuários.

O relatório menciona 258 organizações com pelo menos uma credencial comprometida. A mesma pesquisa também descreve um universo maior de organizações visadas; esses números não devem ser confundidos, pois ser alvo de uma campanha não significa, por si só, que uma organização foi comprometida.

O ponto central é que alguns ataques de phishing não tentam apenas obter a senha. Eles buscam capturar uma sessão já autenticada. Nessa situação, o invasor pode reutilizar o acesso obtido depois que a pessoa concluiu a autenticação, inclusive quando MFA estava habilitada.

## Contexto e impacto

MFA continua sendo uma proteção importante e reduz significativamente ataques baseados apenas em senha. Porém, ela não elimina todos os riscos: se uma sessão autenticada for roubada, um invasor pode tentar reutilizá-la sem repetir a etapa de autenticação.

A Microsoft descreve o roubo de tokens de acesso como uma técnica capaz de contornar controles de segurança já concluídos. Isso não significa que todo uso de MFA esteja comprometido nem que a Microsoft tenha confirmado a campanha BigBear específica. A relação entre os dois fatos é defensiva: a orientação da Microsoft ajuda a compreender por que sessões e tokens devem receber proteção adicional.

O BigBear 2.0 é descrito pela CloudSEK, conforme relato do BleepingComputer, como um serviço usado por operadores de phishing. Os números, o nome da operação e seu alcance devem ser atribuídos à pesquisa, pois não foram apresentados nesta matéria como confirmação independente de cada organização afetada.

## O que o leitor pode fazer

Usuários de Microsoft 365 devem desconfiar de páginas de login recebidas por links inesperados, inclusive quando pareçam reproduzir a identidade visual de serviços conhecidos. Sempre que possível, o acesso deve começar pelo endereço conhecido do serviço ou pelo aplicativo oficial, e não por links recebidos em mensagens.

Organizações devem revisar seus registros de acesso em busca de sessões incomuns, como conexões inesperadas, mudanças de localização, dispositivos desconhecidos ou padrões atípicos de leitura e download de dados. Quando houver suspeita fundamentada, a equipe responsável deve seguir seus procedimentos de resposta a incidentes, incluindo a revisão e a revogação de sessões conforme as ferramentas e políticas do ambiente.

Também é recomendável priorizar métodos de MFA resistentes a phishing, como chaves de segurança ou passkeys compatíveis, e aplicar políticas de acesso condicional adequadas ao contexto da organização. Esses controles reduzem riscos, mas precisam ser combinados com gestão de dispositivos, monitoramento e treinamento contínuo.

A presença de um alerta ou de uma tentativa de phishing não comprova, sozinha, que uma conta foi invadida. A conclusão depende dos registros técnicos, do contexto da organização e da investigação conduzida pela equipe responsável.

## Fontes e limites

* Fonte principal: [BleepingComputer — BigBear Microsoft 365 phishing service bypassed MFA at 258 organizations](https://www.bleepingcomputer.com/news/security/bigbear-microsoft-365-phishing-service-bypassed-mfa-at-258-organizations/)
* Orientação oficial: [Microsoft Security — Token tactics: prevenção, detecção e resposta a roubo de tokens em nuvem](https://www.microsoft.com/en-us/security/blog/2022/11/16/token-tactics-how-to-prevent-detect-and-respond-to-cloud-token-theft/)
* Contexto adicional: [Microsoft Learn — como invasores podem contornar MFA](https://learn.microsoft.com/en-us/answers/questions/5316432/how-did-a-hacker-bypass-our-multi-factor)

Esta matéria atribui à pesquisa da CloudSEK, divulgada pelo BleepingComputer, os dados sobre BigBear 2.0 e as organizações afetadas. Ela não afirma que a Microsoft confirmou essa campanha específica. As recomendações defensivas se baseiam na orientação geral da Microsoft sobre roubo de tokens e devem ser adaptadas à realidade de cada ambiente.
