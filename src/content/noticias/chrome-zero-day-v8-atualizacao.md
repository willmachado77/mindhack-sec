---

title: "Google corrigiu zero-day explorado no Chrome; mantenha o navegador atualizado"
description: "O Google corrigiu a CVE-2026-85046, uma falha no motor V8 do Chrome, e confirmou a existência de exploração ativa. Usuários devem verificar se o navegador recebeu a atualização mais recente disponível para seu dispositivo."
publishedAt: 2026-09-12
tags: ["Google Chrome","V8","Vulnerabilidades"]
source:
  label: "Chrome Releases — Stable Channel Update for Desktop"
  url: "https://chromereleases.googleblog.com/2026/09/stable-channel-update-for-desktop_01882797386.html"

---

## O que aconteceu

O Google corrigiu a CVE-2026-85046, uma vulnerabilidade de *type confusion* no V8, o motor JavaScript usado pelo Chrome. A empresa informou que sabe da existência de um exploit ativo para essa falha.

O comunicado foi publicado em 3 de setembro de 2026 como parte de uma atualização do canal Stable para desktop. Naquele momento, o Google informou as versões 152.0.7977.82/.83 para Windows e macOS e 152.0.7977.82 para Linux, com distribuição gradual.

A atualização também incluía outras correções de segurança. A CVE-2026-85046 foi classificada como de alta severidade.

## Contexto e impacto

Falhas de *type confusion* ocorrem quando um programa interpreta dados usando um tipo incorreto. No contexto de um motor JavaScript, esse tipo de erro pode afetar a segurança ao processar conteúdo da web.

O Google confirmou a exploração ativa, mas restringe detalhes e links de bugs enquanto a maior parte dos usuários ainda não recebeu a correção. Por isso, não há base pública suficiente para atribuir a exploração a um grupo, campanha ou método específico.

Os números de versão divulgados em 3 de setembro são um registro daquele comunicado, não uma referência permanente. A versão oferecida ao usuário pode variar conforme sistema operacional, canal de atualização e ritmo de distribuição.

## O que o leitor pode fazer

Quem utiliza o Chrome deve verificar se o navegador recebeu a atualização mais recente disponível e reiniciá-lo quando solicitado. Em computadores, essa conferência pode ser feita nas configurações do navegador, na seção sobre o Google Chrome.

Organizações que administram navegadores em vários dispositivos devem confirmar a atualização por seus mecanismos de gerenciamento e considerar a correção como prioritária, pois o fornecedor reconheceu exploração ativa.

Atualizar é uma medida essencial, mas não permite concluir sozinho se houve comprometimento anterior. Investigações de segurança devem se basear nos sinais técnicos e na realidade de cada ambiente.

## Fontes e limites

* Fonte primária: [Chrome Releases — Stable Channel Update for Desktop](https://chromereleases.googleblog.com/2026/09/stable-channel-update-for-desktop_01882797386.html)
* Fonte jornalística original: [BleepingComputer — Google warns of new Chrome zero-day flaw exploited in attacks](https://www.bleepingcomputer.com/news/security/google-warns-of-new-chrome-zero-day-flaw-exploited-in-attacks/)
* Fonte secundária: [TechRadar — Google patches multiple browser bugs including one under active exploitation](https://www.techradar.com/pro/security/google-patches-multiple-browser-bugs-including-one-that-was-under-active-exploitation-so-update-now)

Esta matéria registra a confirmação de exploração ativa da CVE-2026-85046 e separa as versões divulgadas em 3 de setembro da recomendação atual de manter o navegador atualizado. Informações futuras sobre a exploração devem motivar atualização explícita da publicação.
