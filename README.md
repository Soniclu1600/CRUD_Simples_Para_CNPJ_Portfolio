# CRUD_Simples_Para_CNPJ_Portfolio
Esse é um projeto para demonstrar o uso de Javascrypt para APIs e site com React.

## Pastas
A pasta "API_CNPJ" é uma simples API para pegar dados de um arquivo .db do SQLite. Ele faz a conexão com o arquivo, chamado "cnpj.db" (que não está no Git pelo tamanho dos dados, minha planilha tem mais de 30GB), dependendo do path que a pessoa tenta acessar ele devolve um JSON com as informações desejadas.

A pasta "Site_CNPJ" é um site para a pessoa selecionar qual ação ela quer, e então baixar os arquivos desejados, que são recebidos em JSON e transformados em CSV.

## Sobre os Dados
Como eu disse antes, o cnpj.db é muito grande para o repositório, porém como eu aprendi a fazer e tratei a tabela conforme um outro repositório, do Rictom (< https://github.com/rictom/cnpj-sqlite >) se você usar o arquivo dele vai funcionar, pois era o que eu usava antes de fazer meu próprio.