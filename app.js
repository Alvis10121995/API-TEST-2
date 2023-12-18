const express = require('express');
require('dotenv').config();
const app = express();
const port =process.env.sPORT;
let valor =process.env.valor;
const cors = require('cors')
app.use(cors())


const number = process.env.nomber;


app.get('/inicio', (req, res) => {
 
  res.send('Resultado de variable de entorno '+valor);

});

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});