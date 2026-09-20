🥬 API Quitanda

API REST desenvolvida para gerenciamento de produtos de uma quitanda.

O projeto permite realizar o cadastro, consulta, atualização e exclusão de produtos, utilizando Node.js, Express e SQLite.

🚀 Tecnologias

Node.js

Express

SQLite

SQLite3

CORS

Nodemon

📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

Node.js

npm

Para verificar as versões instaladas:

node --version
npm --version

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

⚙️ Instalação

Clone o repositório:

git clone <URL_DO_REPOSITORIO>


Entre na pasta do projeto:

cd api-quitanda


Instale as dependências:

npm install

▶️ Executando o projeto
Ambiente de desenvolvimento

Para iniciar a aplicação utilizando o Nodemon:

npm run dev


O servidor será iniciado em:

http://localhost:3000


No terminal será exibido:

Servidor rodando em http://localhost:3000

Ambiente normal

Também é possível iniciar a aplicação utilizando:

npm start

🗄️ Banco de dados

O projeto utiliza SQLite como banco de dados.

O arquivo do banco fica localizado em:

database/quitanda.db


O banco é criado automaticamente quando a aplicação é iniciada pela primeira vez.

A tabela produtos também é criada automaticamente caso ainda não exista.

Estrutura da tabela produtos
Campo	Tipo	Obrigatório	Descrição
id	INTEGER	Sim	Identificador único
nome	TEXT	Sim	Nome do produto
categoria	TEXT	Sim	Categoria do produto
preco	REAL	Sim	Preço do produto
estoque	INTEGER	Sim	Quantidade disponível
unidade	TEXT	Sim	Unidade de venda
validade	TEXT	Não	Data de validade
🔌 API

A URL base da API é:

http://localhost:3000

Health Check

Verifica se a API está funcionando.

GET /


Resposta:

{
  "mensagem": "API da Quitanda funcionando!"
}

📦 Produtos
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


Caso o produto não seja encontrado:

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


Status HTTP:

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

A API pode ser testada utilizando ferramentas como:

Postman

Insomnia

Thunder Client

REST Client

cURL

Exemplo com cURL
Cadastrar produto
curl -X POST http://localhost:3000/produtos \
-H "Content-Type: application/json" \
-d '{"nome":"Banana","categoria":"Frutas","preco":5.99,"estoque":50,"unidade":"kg","validade":"2026-09-28"}'

Listar produtos
curl http://localhost:3000/produtos

Buscar produto
curl http://localhost:3000/produtos/1

Atualizar produto
curl -X PUT http://localhost:3000/produtos/1 \
-H "Content-Type: application/json" \
-d '{"nome":"Banana Prata","categoria":"Frutas","preco":6.99,"estoque":40,"unidade":"kg","validade":"2026-09-29"}'

Excluir produto
curl -X DELETE http://localhost:3000/produtos/1

📜 Scripts

Os seguintes scripts estão disponíveis no projeto:

Iniciar a aplicação
npm start

Iniciar em modo desenvolvimento
npm run dev


O comando npm run dev utiliza o Nodemon, que reinicia automaticamente o servidor sempre que uma alteração é detectada nos arquivos do projeto.

🔒 .gitignore

Recomenda-se utilizar um .gitignore contendo:

node_modules/
.env


Caso o banco de dados local não deva ser versionado no Git, adicione também:

database/quitanda.db

📌 Funcionalidades

 Cadastro de produtos

 Listagem de produtos

 Consulta de produto por ID

 Atualização de produtos

 Exclusão de produtos

 Banco de dados SQLite

 Validação básica

 Tratamento básico de erros

 CORS

 Nodemon para desenvolvimento

🔮 Próximas funcionalidades

 Cadastro de categorias

 Controle de entrada de estoque

 Controle de saída de estoque

 Cadastro de fornecedores

 Controle de vendas

 Autenticação de usuários

 JWT

 Paginação

 Filtros e busca de produtos

 Documentação com Swagger

 Testes automatizados

 Docker

👨‍💻 Autor

Desenvolvido para fins de estudo e gerenciamento de produtos de uma quitanda.

📄 Licença

Este projeto está disponível para fins educacionais.