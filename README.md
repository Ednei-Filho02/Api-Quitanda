🥬 API Quitanda

API REST para gerenciamento de produtos de uma quitanda.

A aplicação permite cadastrar, consultar, atualizar e excluir produtos, utilizando Node.js, Express e SQLite como banco de dados.

🚀 Tecnologias

Node.js

Express

SQLite

SQLite3

CORS

Nodemon

📁 Estrutura do projeto
api-quitanda/
├── database/
│   └── quitanda.db
│
├── src/
│   ├── controllers/
│   │   └── produtoController.js
│   │
│   ├── database/
│   │   └── database.js
│   │
│   ├── routes/
│   │   └── produtoRoutes.js
│   │
│   └── server.js
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

📋 Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

Node.js

npm, que normalmente é instalado junto com o Node.js

Para verificar se o Node.js está instalado:

node --version


Para verificar o npm:

npm --version

⚙️ Instalação

Clone o projeto ou baixe os arquivos para sua máquina.

Entre na pasta do projeto:

cd api-quitanda


Instale as dependências:

npm install

▶️ Executando a aplicação
Ambiente de desenvolvimento

Para iniciar utilizando o Nodemon:

npm run dev


A API será iniciada em:

http://localhost:3000


Você deverá visualizar no terminal:

Servidor rodando em http://localhost:3000

Ambiente normal

Também é possível iniciar a aplicação utilizando:

npm start

🗄️ Banco de dados

A aplicação utiliza SQLite.

O arquivo do banco de dados fica em:

database/quitanda.db


Caso o arquivo ainda não exista, ele será criado automaticamente quando a aplicação for iniciada.

A tabela produtos é criada automaticamente pelo sistema.

Estrutura da tabela
Campo	Tipo	Obrigatório	Descrição
id	INTEGER	Sim	Identificador único
nome	TEXT	Sim	Nome do produto
categoria	TEXT	Sim	Categoria do produto
preco	REAL	Sim	Preço do produto
estoque	INTEGER	Sim	Quantidade disponível
unidade	TEXT	Sim	Unidade de venda
validade	TEXT	Não	Data de validade
🔌 Endpoints

A URL base da API é:

http://localhost:3000

Verificar API
GET /


Resposta:

{
  "mensagem": "API da Quitanda funcionando!"
}

Listar produtos
GET /produtos


Exemplo:

GET http://localhost:3000/produtos


Resposta:

[
  {
    "id": 1,
    "nome": "Tomate",
    "categoria": "Hortaliças",
    "preco": 7.99,
    "estoque": 30,
    "unidade": "kg",
    "validade": "2026-09-25"
  }
]

Buscar produto por ID
GET /produtos/:id


Exemplo:

GET http://localhost:3000/produtos/1


Resposta:

{
  "id": 1,
  "nome": "Tomate",
  "categoria": "Hortaliças",
  "preco": 7.99,
  "estoque": 30,
  "unidade": "kg",
  "validade": "2026-09-25"
}


Caso o produto não exista:

{
  "erro": "Produto não encontrado"
}

Cadastrar produto
POST /produtos


URL:

http://localhost:3000/produtos


Header:

Content-Type: application/json


Body:

{
  "nome": "Tomate",
  "categoria": "Hortaliças",
  "preco": 7.99,
  "estoque": 30,
  "unidade": "kg",
  "validade": "2026-09-25"
}


Resposta:

{
  "id": 1,
  "nome": "Tomate",
  "categoria": "Hortaliças",
  "preco": 7.99,
  "estoque": 30,
  "unidade": "kg",
  "validade": "2026-09-25"
}


Código HTTP esperado:

201 Created

Atualizar produto
PUT /produtos/:id


Exemplo:

PUT http://localhost:3000/produtos/1


Body:

{
  "nome": "Tomate Italiano",
  "categoria": "Hortaliças",
  "preco": 8.99,
  "estoque": 25,
  "unidade": "kg",
  "validade": "2026-09-27"
}


Resposta:

{
  "mensagem": "Produto atualizado com sucesso"
}

Excluir produto
DELETE /produtos/:id


Exemplo:

DELETE http://localhost:3000/produtos/1


Resposta:

{
  "mensagem": "Produto excluído com sucesso"
}

🧪 Testando a API

Você pode utilizar ferramentas como:

Postman

Insomnia

Thunder Client

REST Client

cURL

Exemplo utilizando cURL

Cadastrar um produto:

curl -X POST http://localhost:3000/produtos \
-H "Content-Type: application/json" \
-d "{\"nome\":\"Banana\",\"categoria\":\"Frutas\",\"preco\":5.99,\"estoque\":50,\"unidade\":\"kg\",\"validade\":\"2026-09-28\"}"


Listar produtos:

curl http://localhost:3000/produtos


Buscar produto:

curl http://localhost:3000/produtos/1


Excluir produto:

curl -X DELETE http://localhost:3000/produtos/1

📜 Scripts disponíveis

No package.json existem os seguintes comandos:

Iniciar normalmente
npm start

Iniciar em desenvolvimento
npm run dev


O modo dev utiliza o Nodemon, permitindo que o servidor seja reiniciado automaticamente quando os arquivos do projeto forem alterados.

🔒 .gitignore

O projeto possui um .gitignore para evitar o envio de arquivos desnecessários para o Git.

Exemplo:

node_modules/
.env


Se o banco SQLite não deve ser versionado, também pode ser adicionado:

database/quitanda.db

📌 Status do projeto

Em desenvolvimento.

Funcionalidades atuais

 Cadastro de produtos

 Listagem de produtos

 Consulta de produto por ID

 Atualização de produtos

 Exclusão de produtos

 Banco de dados SQLite

 Validação básica

 Tratamento básico de erros

 CORS

Próximas funcionalidades

 Cadastro de categorias

 Controle de entrada e saída de estoque

 Cadastro de fornecedores

 Controle de vendas

 Autenticação de usuários

 JWT

 Paginação

 Filtros e busca de produtos

 Documentação com Swagger

 Testes automatizados

👨‍💻 Desenvolvimento

Projeto desenvolvido para gerenciamento de produtos de uma quitanda utilizando uma API REST.

API Quitanda 🥬🍅🥕
