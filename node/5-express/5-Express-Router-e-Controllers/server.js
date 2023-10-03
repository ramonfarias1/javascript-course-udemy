const express = require('express');
const app = express();
const routes = require('./routes'); // Importando os routers
const port = 3000;

app.use( express.urlencoded() );

app.use(routes); // Usando os routers

app.listen(port, () => {
    console.log(`Server iniciado: http://localhost:${port}`);
});