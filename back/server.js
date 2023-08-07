const express = require('express');
const app = express();
const cors = require('cors'); // Importar el módulo 'cors'
const PORT = 3001;

// Usar el middleware CORS en todas las rutas
app.use(cors());



// Definir una ruta de API
app.get('/api/data', (req, res) => {
    const responseData = {
        message: 'Datos de la API'
    };

    res.json(responseData);
});

app.listen(PORT, () => {
    console.log(`Servidor backend en http://localhost:${PORT}`);
});

