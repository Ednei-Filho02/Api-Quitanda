const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./quitanda.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS produtos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      categoria TEXT NOT NULL,
      preco REAL NOT NULL,
      estoque INTEGER NOT NULL,
      unidade TEXT NOT NULL,
      validade TEXT
    )
  `);
});

module.exports = db;
