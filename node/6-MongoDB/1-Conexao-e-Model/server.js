const express = require('express');
const app = express();

const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://Nomartsu:mdbram020418@aprendendomongodb.lfuk9if.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect();

const port = 3000;
const routes = require('./routes');
const path = require('path');
const {middlewareRetornaNome, outroMiddleware} = require('./src/middlewares/middlewaresGlobais.js');

app.set( 'views', path.resolve(__dirname, 'src', 'views') );
app.set( 'view engine', 'ejs');

app.use( express.urlencoded( {extended: true} ) );
app.use( express.static( path.resolve(__dirname, 'public') ) );

app.use(middlewareRetornaNome);
app.use(outroMiddleware);

app.use(routes);

app.listen(port, () => {
    console.log(`Server started at: http://localhost:${port}`);
});