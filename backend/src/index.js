const express = require('express');

const PORT = 3333;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json('Hello World');
})

app.listen(PORT);