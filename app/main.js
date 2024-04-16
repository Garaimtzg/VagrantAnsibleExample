// Importamos el módulo Express
const express = require('express');

// Creamos una nueva aplicación Express
const app = express();

// Definimos una ruta para la página principal
app.get('/', (req, res) => {
    res.send(`
    <html lang="">
      <head>
        <title>Mi Página</title>
      </head>
      <body>
        <h1>¡Hola, mundo!</h1>
        <p>Bienvenido a mi página.</p>
      </body>
    </html>
  `);
});

// Iniciamos el servidor en el puerto 3001
app.listen(3001, () => {
    console.log('Aplicación escuchando en el puerto 3001, la ip de la máquina es 192.168.' +
        '56.12, usa curl http://192.168.56.12:3001\n para ver que funciona o buscalo en el navegador web');
});