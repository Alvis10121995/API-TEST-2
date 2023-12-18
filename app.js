const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});