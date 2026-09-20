# 🥬 API Quitanda

API REST desenvolvida para gerenciamento de produtos de uma quitanda.

O projeto permite realizar o cadastro, consulta, atualização e exclusão de produtos, utilizando **Node.js**, **Express** e **SQLite**.

## 🚀 Tecnologias

- Node.js
- Express
- SQLite
- SQLite3
- CORS
- Nodemon

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- npm

Para verificar as versões instaladas:

```bash
node --version
npm --version
```

## 📁 Estrutura do projeto

```text
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
```

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/Ednei-Filho02/Api-Quitanda
```

Entre na pasta do projeto:

```bash
cd api-quitanda
```

Instale as dependências:

```bash
npm install
```

## ▶️ Executando o projeto

### Ambiente de desenvolvimento

Para iniciar a aplicação utilizando o Nodemon:

```bash
npm run dev
```

O servidor será iniciado em:

```text
http://localhost:3000
```

No terminal será exibido:

```text
Servidor rodando em http://localhost:3000
```

### Ambiente normal

Também é possível iniciar a aplicação utilizando:

```bash
npm start
```

## 🗄️ Banco de dados

O projeto utiliza **SQLite** como banco de dados.

O arquivo do banco fica localizado em:

```text
database/quitanda.db
```

O banco é criado automaticamente quando a aplicação é iniciada pela primeira vez.

A tabela `produtos` também é criada automaticamente caso ainda não exista.

### Estrutura da tabela `produtos`

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `id` | INTEGER | Sim | Identificador único |
| `nome` | TEXT | Sim | Nome do produto |
| `categoria` | TEXT | Sim | Categoria do produto |
| `preco` | REAL | Sim | Preço do produto |
| `estoque` | INTEGER | Sim | Quantidade disponível |
| `unidade` | TEXT | Sim | Unidade de venda |
| `validade` | TEXT | Não | Data de validade |

## 🔌 API

A URL base da API é:

```text
http://localhost:3000
```

## 🏠 Health Check

Verifica se a API está funcionando.

### Requisição

```http
GET /
```

### Resposta

```json
{
  "mensagem": "API da Quitanda funcionando!"
}
```

## 📦 Produtos

### Listar produtos

```http
GET /produtos
```

Exemplo:

```text
GET http://localhost:3000/produtos
```

### Resposta

```json
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
```

### Buscar produto por ID

```http
GET /produtos/:id
```

Exemplo:

```text
GET http://localhost:3000/produtos/1
```

### Resposta

```json
{
  "id": 1,
  "nome": "Tomate",
  "categoria": "Hortaliças",
  "preco": 7.99,
  "estoque": 30,
  "unidade": "kg",
  "validade": "2026-09-25"
}
```

Caso o produto não seja encontrado:

```json
{
  "erro": "Produto não encontrado"
}
```

### Cadastrar produto

```http
POST /produtos
```

Header:

```text
Content-Type: application/json
```

Body:

```json
{
  "nome": "Tomate",
  "categoria": "Hortaliças",
  "preco": 7.99,
  "estoque": 30,
  "unidade": "kg",
  "validade": "2026-09-25"
}
```

### Resposta

```json
{
  "id": 1,
  "nome": "Tomate",
  "categoria": "Hortaliças",
  "preco": 7.99,
  "estoque": 30,
  "unidade": "kg",
  "validade": "2026-09-25"
}
```

Status HTTP:

```text
201 Created
```

### Atualizar produto

```http
PUT /produtos/:id
```

Exemplo:

```text
PUT http://localhost:3000/produtos/1
```

Body:

```json
{
  "nome": "Tomate Italiano",
  "categoria": "Hortaliças",
  "preco": 8.99,
  "estoque": 25,
  "unidade": "kg",
  "validade": "2026-09-27"
}
```

### Resposta

```json
{
  "mensagem": "Produto atualizado com sucesso"
}
```

### Excluir produto

```http
DELETE /produtos/:id
```

Exemplo:

```text
DELETE http://localhost:3000/produtos/1
```

### Resposta

```json
{
  "mensagem": "Produto excluído com sucesso"
}
```

## 🧪 Testando a API

A API pode ser testada utilizando ferramentas como:

- Postman
- Insomnia
- Thunder Client
- REST Client
- cURL

### Exemplo com cURL

#### Cadastrar produto

```bash
curl -X POST http://localhost:3000/produtos \
-H "Content-Type: application/json" \
-d '{"nome":"Banana","categoria":"Frutas","preco":5.99,"estoque":50,"unidade":"kg","validade":"2026-09-28"}'
```

#### Listar produtos

```bash
curl http://localhost:3000/produtos
```

#### Buscar produto

```bash
curl http://localhost:3000/produtos/1
```

#### Atualizar produto

```bash
curl -X PUT http://localhost:3000/produtos/1 \
-H "Content-Type: application/json" \
-d '{"nome":"Banana Prata","categoria":"Frutas","preco":6.99,"estoque":40,"unidade":"kg","validade":"2026-09-29"}'
```

#### Excluir produto

```bash
curl -X DELETE http://localhost:3000/produtos/1
```

## 📜 Scripts

### Iniciar a aplicação

```bash
npm start
```

### Iniciar em modo desenvolvimento

```bash
npm run dev
```

O comando `npm run dev` utiliza o **Nodemon**, que reinicia automaticamente o servidor sempre que uma alteração é detectada nos arquivos do projeto.

## 🔒 .gitignore

Recomenda-se utilizar um `.gitignore` contendo:

```text
node_modules/
.env
database/quitanda.db
```

## 📌 Funcionalidades

- [x] Cadastro de produtos
- [x] Listagem de produtos
- [x] Consulta de produto por ID
- [x] Atualização de produtos
- [x] Exclusão de produtos
- [x] Banco de dados SQLite
- [x] Validação básica
- [x] Tratamento básico de erros
- [x] CORS
- [x] Nodemon para desenvolvimento

## 🔮 Próximas funcionalidades

- [ ] Cadastro de categorias
- [ ] Controle de entrada de estoque
- [ ] Controle de saída de estoque
- [ ] Cadastro de fornecedores
- [ ] Controle de vendas
- [ ] Autenticação de usuários
- [ ] JWT
- [ ] Paginação
- [ ] Filtros e busca de produtos
- [ ] Documentação com Swagger
- [ ] Testes automatizados
- [ ] Docker

## 👨‍💻 Autor

Desenvolvido para fins de estudo e gerenciamento de produtos de uma quitanda.

## 📄 Licença

Este projeto está disponível para fins educacionais.
