# Segurança do projeto

## Princípios adotados no MVP

- O site é estático e não recebe dados de visitantes.
- Não há login, senhas, cookies de rastreamento ou banco de dados.
- Dependências serão mantidas atualizadas e verificadas antes de publicar.
- Conteúdo editorial deve citar a fonte primária sempre que possível.
- Links externos serão revisados e abertos com proteção adequada quando usarem nova aba.

## Cabeçalhos de publicação

O arquivo `public/_headers` prepara a implantação dos ativos estáticos no Cloudflare Workers com as seguintes proteções:

- Política de segurança de conteúdo restritiva para um site estático, sem scripts, conexões ou objetos de terceiros.
- Bloqueio de enquadramento por outros sites, redução de informações no `Referer` e prevenção de detecção incorreta de tipo de arquivo.
- Desativação de permissões de câmera, microfone, geolocalização, pagamento e USB.

Antes de alterar o site para incluir vídeos incorporados, fontes externas, análises ou formulários, a política deve ser revisada. Não se deve enfraquecer a política para `*` ou permitir scripts de origem desconhecida.

## Limites atuais

Também não deve haver formulário de contato até que a política de privacidade, o fluxo de recebimento e a retenção dos dados sejam definidos.

## Regra de ouro

Nunca colocar senhas, tokens, chaves de API ou dados pessoais em arquivos versionados. Use variáveis de ambiente na plataforma de hospedagem quando uma integração futura exigir segredo.
