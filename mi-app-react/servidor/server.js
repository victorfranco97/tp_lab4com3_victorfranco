const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Mostrar ruta real
console.log('__dirname:', __dirname);

// Servir archivos estáticos del build de React
app.use(express.static(path.resolve(__dirname, '..', 'dist')));

// Ruta fallback: cualquier otra va al index.html
app.get('*', (req, res) => {
  const indexPath = path.resolve(__dirname, '..', 'dist', 'index.html');
  console.log('Sirviendo index desde:', indexPath);
  res.sendFile(indexPath);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
