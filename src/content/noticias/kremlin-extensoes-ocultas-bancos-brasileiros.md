---

title: "Malware mira bancos brasileiros e instala extensões ocultas no Chrome e Edge"
description: "A Elastic Security Labs alertou para a operação KREMLIN, que usa arquivos disfarçados de comprovantes e documentos para atingir usuários de bancos brasileiros. O malware pode instalar extensões maliciosas no Chrome e Edge sem aprovação e coletar credenciais, sessões e dados de navegação."
publishedAt: 2026-09-21
publishedTime: "11:31"
sourcePublishedAt: 2026-09-14
tags: ["Malware", "Bancos", "Brasil", "Chrome", "Microsoft Edge"]
source:
  label: "Elastic Security Labs — campanha KREMLIN contra usuários bancários brasileiros"
  url: "https://www.elastic.co/security-labs/threat-command/malicious-browser-extension-kremlin-banking-malware"
---


## O que aconteceu

Pesquisadores da Elastic Security Labs descreveram uma operação de malware chamada KREMLIN, voltada principalmente a usuários e instituições bancárias brasileiras.

A campanha usa arquivos JavaScript disfarçados de comprovantes, faturas ou documentos de empresa. Ao abrir esse tipo de arquivo, a vítima pode permitir a instalação de componentes maliciosos no computador.

Entre as capacidades observadas está a instalação de extensões maliciosas no Google Chrome e no Microsoft Edge sem que a pessoa usuária aprove a extensão. Essas extensões podem coletar dados de navegação, credenciais e informações de sessão.

## Contexto e impacto

Extensões de navegador têm acesso a partes importantes da navegação. Quando uma extensão maliciosa consegue ser instalada, ela pode expor informações inseridas em sites, dados armazenados no navegador e sessões já autenticadas.

A pesquisa acompanha sete campanhas ao longo de quinze meses e aponta foco em bancos brasileiros. A Elastic informou ter observado mais de 1.500 sistemas infectados na campanha analisada.

A existência desse malware não significa que todo comprovante ou documento recebido seja perigoso. O risco aumenta quando o arquivo chega fora de um fluxo esperado, vem acompanhado de pressão por urgência ou usa extensões pouco usuais, como `.js`.

## O que o leitor pode fazer

Não abra arquivos JavaScript recebidos por e-mail ou aplicativos de mensagem, mesmo que pareçam comprovantes, faturas ou documentos bancários. Bancos e empresas legítimas não precisam que você execute esse tipo de arquivo para consultar um documento.

Mantenha Windows, Chrome e Edge atualizados. Revise periodicamente as extensões instaladas no navegador e remova apenas aquelas que você reconhece e utiliza. Se uma extensão aparecer sem explicação, trate a situação como suspeita.

Caso tenha aberto um arquivo suspeito ou percebido comportamento incomum no navegador, evite acessar o banco naquele computador. Procure apoio técnico confiável e, a partir de um dispositivo seguro, altere senhas importantes e entre em contato com sua instituição financeira pelos canais oficiais.

## Fontes e limites

* Fonte primária: [Elastic Security Labs — campanha KREMLIN contra usuários bancários brasileiros](https://www.elastic.co/security-labs/threat-command/malicious-browser-extension-kremlin-banking-malware)
* Cobertura jornalística original: [BleepingComputer — malware instala extensões no Chrome e Edge](https://www.bleepingcomputer.com/news/security/malware-bypasses-browser-checks-to-force-install-chrome-edge-extensions/)

Esta matéria atribui à Elastic Security Labs a análise da operação KREMLIN, seu foco em alvos bancários brasileiros e as capacidades observadas. Ela não reproduz indicadores, infraestrutura, código ou procedimentos técnicos de instalação do malware.
