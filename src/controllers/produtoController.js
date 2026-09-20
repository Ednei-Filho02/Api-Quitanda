const db = require("../database/database");

const listarProdutos = (req, res) => {
  const sql = "SELECT * FROM produtos ORDER BY id DESC";

  db.all(sql, [], (err, produtos) => {
    if (err) {
      return res.status(500).json({
        erro: "Erro ao buscar produtos"
      });
    }

    res.json(produtos);
  });
};

const buscarProduto = (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM produtos WHERE id = ?";

  db.get(sql, [id], (err, produto) => {
    if (err) {
      return res.status(500).json({
        erro: "Erro ao buscar produto"
      });
    }

    if (!produto) {
      return res.status(404).json({
        erro: "Produto não encontrado"
      });
    }

    res.json(produto);
  });
};

const criarProduto = (req, res) => {
  const {
    nome,
    categoria,
    preco,
    estoque,
    unidade,
    validade
  } = req.body;

  if (!nome || !categoria || preco === undefined || estoque === undefined || !unidade) {
    return res.status(400).json({
      erro: "Nome, categoria, preço, estoque e unidade são obrigatórios"
    });
  }

  const sql = `
    INSERT INTO produtos
    (nome, categoria, preco, estoque, unidade, validade)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const valores = [
    nome,
    categoria,
    preco,
    estoque,
    unidade,
    validade || null
  ];

  db.run(sql, valores, function (err) {
    if (err) {
      return res.status(500).json({
        erro: "Erro ao cadastrar produto"
      });
    }

    res.status(201).json({
      id: this.lastID,
      nome,
      categoria,
      preco,
      estoque,
      unidade,
      validade: validade || null
    });
  });
};

const atualizarProduto = (req, res) => {
  const { id } = req.params;

  const {
    nome,
    categoria,
    preco,
    estoque,
    unidade,
    validade
  } = req.body;

  const sql = `
    UPDATE produtos
    SET nome = ?,
        categoria = ?,
        preco = ?,
        estoque = ?,
        unidade = ?,
        validade = ?
    WHERE id = ?
  `;

  const valores = [
    nome,
    categoria,
    preco,
    estoque,
    unidade,
    validade || null,
    id
  ];

  db.run(sql, valores, function (err) {
    if (err) {
      return res.status(500).json({
        erro: "Erro ao atualizar produto"
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({
        erro: "Produto não encontrado"
      });
    }

    res.json({
      mensagem: "Produto atualizado com sucesso"
    });
  });
};

const excluirProduto = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM produtos WHERE id = ?";

  db.run(sql, [id], function (err) {
    if (err) {
      return res.status(500).json({
        erro: "Erro ao excluir produto"
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({
        erro: "Produto não encontrado"
      });
    }

    res.json({
      mensagem: "Produto excluído com sucesso"
    });
  });
};

module.exports = {
  listarProdutos,
  buscarProduto,
  criarProduto,
  atualizarProduto,
  excluirProduto
};
