const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// 👉 Rota para listar contatos
app.get("/contatos", (req, res) => {
  db.query("SELECT * FROM contatos", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// 👉 Rota para adicionar contato
app.post("/contatos", (req, res) => {
  const { nome, telefone, email } = req.body;
  db.query("INSERT INTO contatos (nome, telefone, email) VALUES (?, ?, ?)",
    [nome, telefone, email],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, nome, telefone, email });
    });
});

// 👉 Rota para atualizar contato
app.put("/contatos/:id", (req, res) => {
  const { id } = req.params;
  const { nome, telefone, email } = req.body;
  db.query("UPDATE contatos SET nome=?, telefone=?, email=? WHERE id=?",
    [nome, telefone, email, id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id, nome, telefone, email });
    });
});

// 👉 Rota para deletar contato
app.delete("/contatos/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM contatos WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Contato deletado com sucesso!" });
  });
});

app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001");
});
