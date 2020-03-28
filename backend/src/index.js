const express = require('express');
const PORT = 3333;
const app = express();

app.get('/', (req, res) => {
  return res.json({
    evento: "Ominstack",
    aluno: "joao pedro basso audibert"
  })
})

app.listen(PORT)