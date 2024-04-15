// Importamos el módulo Express
const express = require('express');

// Creamos una nueva aplicación Express
const app = express();

// Definimos una ruta para la página principal
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación escuchando en el puerto 3000');
});
