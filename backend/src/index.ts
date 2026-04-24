import express from "express";
const app = express();
const porta = 4000;

// rota inicial
app.get("/inicial", (req, res) => {
  res.send("Bem-vindo à rota /inicial!");
});

app.listen(porta, () => {
    console.log(`rodando na porta ${porta}`);
});
