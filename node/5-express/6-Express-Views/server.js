const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes.js');
const path = require('path');

app.set( 'views', path.resolve(__dirname, 'src', 'views') );
app.set('view engine', 'ejs');

app.use( express.urlencoded() );
app.use(routes);

app.listen(port, () => {
    console.log(`servidor iniciado: http://localhost:${port}`);
});