# Integração editorial NecroPaper → MindHack Sec

## Finalidade e limite

Esta ponte transforma uma pauta **aprovada por uma pessoa** no NecroPaper em
um rascunho Markdown local. Ela economiza a repetição de preencher o modelo de
notícia, mas não confirma fatos, não insere arquivos em `src/content`, não faz
commit e não publica o site.

```text
RSS → triagem local → revisão humana → pauta aprovada
→ rascunho fora do site → revisão autoral → npm run build
→ commit e deploy manuais
```

## Pré-condições

O arquivo de entrada só é aceito quando contém:

- `editorial_status` igual a `aprovar`;
- `collected_link_id` positivo;
- `reviewed_title` e `reviewed_summary` preenchidos;
- `primary_source.label` e `primary_source.url` válidos;
- `publishedAt` definido pelo editor no formato `AAAA-MM-DD`;
- ao menos uma tag revista.

Essas regras evitam que uma notícia descoberta por RSS seja tratada como
conteúdo pronto para o público.

## Campos e origem

| Arquivo do MindHack Sec | Campo da pauta aprovada | Observação |
| --- | --- | --- |
| `title` | `reviewed_title` | título humano, factual e compreensível |
| `description` | `reviewed_summary` | síntese revisada; não usar saída bruta do modelo |
| `publishedAt` | decisão editorial | data no site; não é a data RSS |
| `tags` | escolha editorial | sugestão inicial, nunca taxonomia automática final |
| `source` | `primary_source` | fonte institucional ou primária validada |
| corpo | pauta, referências e limites | separar fato, alegação e inferência |

`updatedAt` não é gerado. Inclua-o somente ao atualizar uma publicação já
existente. Como o schema atual permite uma fonte no front matter, referências
original e secundária entram no corpo Markdown.

## Gerador de rascunho

Crie uma cópia local de `modelos/necropaper/pauta-aprovada.exemplo.json`, sem
colocá-la no Git, e execute:

```bash
npm run necropaper:rascunho -- --input /caminho/da/pauta-aprovada.json
```

Opcionalmente, altere a pasta de saída, que deve continuar fora de
`src/content`:

```bash
npm run necropaper:rascunho -- \
  --input /caminho/da/pauta-aprovada.json \
  --out-dir /caminho/seguro/rascunhos
```

O comando falha sem criar arquivo quando um campo obrigatório estiver ausente
ou inválido. Ele nunca sobrescreve um rascunho existente.

## Esteira notícia → dica → curso

### Notícia

É a saída direta: um fato apurado, contextualizado e atribuído a fonte
verificável.

### Dica

Só deve nascer de uma decisão editorial explícita. A pauta precisa conter uma
ação prática, estável e adequada ao leitor leigo; não transforme cada incidente
em recomendação genérica.

### Curso

É planejado a partir de temas que se repetem e de lacunas de aprendizagem. Uma
notícia pode entrar como estudo de caso, mas não gera curso automaticamente.

## Primeiro uso recomendado

1. Escolha uma pauta de prioridade alta já aprovada.
2. Reabra a fonte primária e confira as afirmações centrais.
3. Gere o rascunho fora de `src/content`.
4. Revise título, descrição, corpo, referências, incertezas e tags.
5. Copie manualmente a versão final para `src/content/noticias/`.
6. Execute `npm run build`.
7. Examine `git diff` antes de decidir por commit e deploy.
