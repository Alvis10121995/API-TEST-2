const express = require('express');
require('dotenv').config();
const app = express();
const port =process.env.sPORT;
const cors = require('cors')
app.use(cors())


const number = process.env.nomber;


app.get('/inicio', (req, res) => {
 
  res.send('Resultado de variable de entorno '+port);

});

app.listen(5000, () => {
  console.log(`El servidor está escuchando en http://localhost:${5000}`);
});