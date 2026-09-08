# Modelos de conteúdo

Estes arquivos servem como ponto de partida para novas dicas, notícias e cursos. Eles ficam fora de `src/content` para não serem publicados pelo Astro.

## Como usar

1. Atualize o repositório local com `git pull`.
2. Copie o modelo para a coleção correspondente.
3. Dê ao arquivo um nome curto, descritivo, em minúsculas e separado por hífens.
4. Substitua todos os textos de orientação e valores de exemplo.
5. Remova comentários e campos opcionais que não serão usados.
6. Execute `npm run build` para validar o conteúdo antes do commit.

Exemplo para criar uma dica:

```bash
cp modelos/conteudo/dica.md src/content/dicas/como-identificar-phishing.md
```

Depois de editar e validar:

```bash
git status
git diff
git add src/content/dicas/como-identificar-phishing.md
git commit -m "content: adicionar dica sobre phishing"
git push
```

## Rascunhos vindos do NecroPaper

Uma pauta aprovada no NecroPaper pode virar um **rascunho local** de notícia.
Isso não cria conteúdo em `src/content`, não faz commit e não publica o site.

1. Copie `modelos/necropaper/pauta-aprovada.exemplo.json` para um arquivo
   local fora do repositório, por exemplo `/tmp/pauta-921.json`.
2. Preencha apenas dados já revisados, principalmente título, resumo, fonte
   primária, data planejada e tags.
3. Gere o rascunho:

```bash
npm run necropaper:rascunho -- --input /tmp/pauta-921.json
```

4. Revise o arquivo criado em `rascunhos/necropaper/`.
5. Somente depois copie o conteúdo revisado para `src/content/noticias/`,
   escolha o nome final do arquivo e execute `npm run build`.

Consulte `docs/integracao-necropaper.md` para o contrato completo. A aprovação
editorial permite redigir; ela não autoriza commit, deploy ou publicação.

## Valores aceitos

- `level` em dicas: `Iniciante` ou `Intermediário`.
- `level` em cursos: `Iniciante`, `Intermediário` ou `Avançado`.
- `status` em cursos: `Planejado` ou `Publicado`.
- `publishedAt` e `updatedAt`: data no formato `AAAA-MM-DD`.
- `readingTime`: número inteiro positivo, estimado em minutos.

## Cuidados editoriais

- Use uma fonte primária ou institucional sempre que possível.
- Não apresente uma informação não confirmada como fato.
- Não coloque senhas, tokens, dados pessoais ou informações confidenciais no conteúdo.
- Revise clareza, ortografia, links e termos técnicos antes de publicar.
