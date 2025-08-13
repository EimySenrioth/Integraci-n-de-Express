// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// app.get() define una ruta tipo GET en la raíz (/).
//Cuando alguien visite http://localhost:3000/, 
//el servidor responderá con el texto "Hola Mundo" en formato texto plano.
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Responde con un objeto JSON que incluye:
//mensaje: Un texto de saludo.
//timestamp: La fecha y hora actuales en formato ISO 8601.
app.get('/api/saludo', (req, res) => {
    res.json({ 
        mensaje: 'Hola Mundo desde la API',
        timestamp: new Date().toISOString()
    });
});

// Iniciar el servidor. sirve para iniciar el servidor y ponerlo a “escuchar” en un puerto específico
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});