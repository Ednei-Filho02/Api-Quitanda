const express = require("express");
const cors = require("cors");

const produtoRoutes = require("./routes/produtoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API da Quitanda funcionando!"
  });
});

app.use("/produtos", produtoRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
