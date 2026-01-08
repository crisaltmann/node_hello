const express = require('express');
const app = express();

// Porta onde o servidor vai rodar
const PORT = process.env.PORT || 3000;

// Endpoint Hello World
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hello', (req, res) => {
  res.json({
    message: 'Olá, mundo!',
    status: 'ok'
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
