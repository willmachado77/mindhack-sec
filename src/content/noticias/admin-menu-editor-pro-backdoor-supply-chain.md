---
title: "Plugin Admin Menu Editor Pro é comprometido em ataque de supply chain; versão 2.37 remove backdoor"
description: "O servidor de distribuição do plugin Admin Menu Editor Pro para WordPress foi invadido e distribuiu versões contendo webshell e criação de contas de administrador ocultas. O desenvolvedor lançou a versão limpa 2.37 e orientou auditoria em usuários e arquivos."
publishedAt: 2026-09-26
publishedTime: "15:03"
sourcePublishedAt: 2026-09-14
tags: ["WordPress", "Supply Chain", "Malware", "Segurança Web"]
source:
  label: "Admin Menu Editor — comunicado oficial sobre versões comprometidas"
  url: "https://adminmenueditor.com/"
---

## O que aconteceu

O desenvolvedor do plugin Admin Menu Editor Pro para WordPress, Janis Elsts, confirmou que a infraestrutura do seu servidor de atualizações e distribuição foi violada por invasores em 14 de setembro de 2026. 

Durante o incidente, os atores maliciosos distribuíram pacotes alterados do plugin contendo código malicioso. A adulteração atingiu todas as cópias da versão 2.35 e downloads da versão 2.36 baixados a partir das 19:00 UTC daquele mesmo dia.

Pesquisadores da Wordfence Intelligence classificaram a ocorrência como um ataque à cadeia de suprimentos (*supply chain attack*), estimando que aproximadamente 1.500 sites WordPress tenham recebido as compilações adulteradas antes da contenção do servidor.

## Contexto e impacto

Ataques de supply chain em plugins são especialmente perigosos porque utilizam os canais oficiais de entrega e a confiança prévia do administrador. 

Nas versões contaminadas, o código injetado operava como um backdoor (porta dos fundos):
- Implantava uma webshell PHP capaz de executar comandos remotamente no servidor;
- Criava pastas anômalas no servidor, como `/wp-content/object-cache/`, para armazenar scripts maliciosos;
- Criava contas administrativas ocultas no banco de dados do WordPress (frequentemente com nomes como `wpfilesmanager`), permitindo que os invasores mantivessem acesso permanente mesmo se o plugin fosse posteriormente desativado.

O autor do plugin conteve o acesso não autorizado ao servidor e publicou a versão 2.37, que reverte funcionalmente o código para a versão 2.34 (última compilação limpa conhecida), sem novos recursos além do número de versão necessário para forçar a substituição segura dos arquivos.

## O que o leitor pode fazer

Quem utiliza o Admin Menu Editor Pro deve agir com atenção, pois apenas clicar em "atualizar" pode não remover vestígios deixados pelos invasores:

1. **Atualize para a versão 2.37 ou preserve a 2.34:** Se o seu site permaneceu na versão 2.34 sem receber os pacotes do dia 14 de setembro, o desenvolvedor confirmou que não houve impacto. Caso tenha instalado as versões 2.35 ou 2.36, remova-as e instale a versão 2.37 limpa (cujo hash SHA-256 oficial é `3a39a83dda629328602dabdba92f6ea0225eb10ff584ccbce15482aa2a420e6e`).
2. **Audite a lista de administradores:** Acesse o painel em *Usuários > Todos os Usuários* e verifique se há contas desconhecidas com perfil de administrador, em especial `wpfilesmanager` ou criadas recentemente sem justificativa.
3. **Inspecione o diretório wp-content:** Verifique no gerenciador de arquivos ou via SSH se existe a pasta `/wp-content/object-cache/` contendo arquivos PHP estranhos e remova conteúdos não autorizados.
4. **Execute uma varredura de segurança:** Utilize plugins de segurança consolidados (como Wordfence ou equivalentes) para escanear a integridade dos arquivos do WordPress e identificar eventuais scripts adicionais deixados no servidor.

## Fontes e limites

* Fonte primária: [Admin Menu Editor — comunicado oficial do desenvolvedor sobre o incidente](https://adminmenueditor.com/)
* Análise técnica de segurança: [Wordfence Intelligence — Backdoored Software Alert: Admin Menu Editor Pro](https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/admin-menu-editor-pro)
* Cobertura de segurança: [BleepingComputer — Malicious Admin Menu Editor Pro plugin backdoors WordPress sites](https://www.bleepingcomputer.com/news/security/malcious-admin-menu-editor-pro-plugin-backdoors-1-500-wordpress-sites/)

Esta matéria atribui as confirmações técnicas ao desenvolvedor do software e aos relatórios de inteligência da Wordfence. O incidente afetou especificamente o mecanismo comercial de distribuição do plugin Pro, sem evidências de comprometimento no repositório geral de plugins do WordPress.org.
