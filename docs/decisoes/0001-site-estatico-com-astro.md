# ADR 0001 — Site estático com Astro

**Data:** 2026-08-14  
**Status:** Aceita

## Contexto

O MindHack Sec está iniciando e precisa de um site rápido, seguro, econômico e adequado para páginas institucionais e conteúdo editorial.

## Decisão

Usar Astro com geração estática, TypeScript e conteúdo inicialmente escrito no próprio repositório.

## Consequências

- Não há custo de servidor ou banco de dados na primeira fase.
- As páginas carregam pouco JavaScript por padrão.
- Cada publicação passa por revisão e fica registrada no histórico do Git.
- Uma área de usuários fica fora do MVP, evitando tratamento prematuro de dados e credenciais.
