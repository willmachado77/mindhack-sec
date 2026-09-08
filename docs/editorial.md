# Guia editorial

## Objetivo

Publicar conteúdo educativo em linguagem clara, com foco em ações práticas e responsabilidade. O conteúdo deve ajudar pessoas a tomar decisões digitais mais seguras, sem alarmismo.

## Tipos de publicação

### Dicas

- Conteúdo atemporal, objetivo e aplicável.
- Deve apresentar um problema, uma ação segura e limites ou exceções relevantes.
- Quando houver uma recomendação técnica, citar uma fonte confiável para aprofundamento.

### Notícias

- Publicar somente depois de consultar a fonte primária ou, quando ela não existir, fontes confiáveis e independentes.
- Separar fatos confirmados, contexto e possíveis impactos.
- Registrar a data de publicação, uma fonte e a data de atualização quando houver mudança relevante.
- Não usar títulos que induzam medo, urgência artificial ou conclusão além das evidências.

### Cursos

- Cada trilha deve informar nível, objetivo, pré-requisitos, estado e link do vídeo ou playlist quando publicado.
- O conteúdo permanece no site como descrição e organização; o vídeo continua hospedado no YouTube.

## Fluxo de publicação

1. Criar o arquivo Markdown na coleção correspondente em `src/content/`.
2. Preencher todos os metadados do cabeçalho, incluindo fonte quando aplicável.
3. Revisar clareza, links e termos técnicos.
4. Executar `npm run build` antes de publicar.

## Integração com o NecroPaper

O NecroPaper é uma fonte de pautas curadas, não um mecanismo de publicação.
Uma pauta só pode gerar rascunho quando tiver status `aprovar`, título e resumo
revisados, fonte primária validada e justificativa editorial registrada.

O rascunho é gerado fora de `src/content`, em `rascunhos/necropaper/`, e não é
versionado. A pessoa responsável continua escolhendo a data de publicação,
tags, texto final, imagem (quando aplicável) e se o arquivo será copiado para a
coleção de notícias. A validação com `npm run build`, o commit e o deploy são
etapas deliberadamente manuais.

O contrato e o gerador local estão descritos em `docs/integracao-necropaper.md`.

## Regra editorial

Se uma informação não puder ser confirmada, ela não deve ser apresentada como fato.
