const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const PORT = 3333;

require('../database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(PORT);