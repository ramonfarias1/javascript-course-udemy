const express = require('express');
const app = express();
const routes = require('./routes');
const port = 3000;

app.use( express.urlencoded() );

app.use(routes);

app.listen(port, () => {
    console.log(`Server iniciado: http://localhost:${port}`);
});