require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const session = require('express-session');
const mongoStore = require('connect-mongo');
const flashMessages = require('connect-flash');
const helmet = require('helmet'); // Importando o Helmet
const csrf = require('csurf'); // NÃO USE MAIS CSRF

const routes = require('./routes');
const middlewaresGlobais = require('./src/middlewares/middlewaresGlobais.js');
const port = 3000;

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado na Banco de Dados!');
        app.emit('pronto');
    })
    .catch(error => console.log(error));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(helmet()); // Usando o Helmet, consulte a documentação do mesmo para saber como configurá-lo de acordo com as necessidades do seu aplicativo.

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(session({
    secret: process.env.SESSION_SECRET,
    store: mongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 604800000,
    }
}));

app.use(flashMessages());

app.use(csrf()); // NÃO USE MAIS CSRF

app.use(middlewaresGlobais.checkCsrfError);
app.use(middlewaresGlobais.geraCsrfToken);
app.use(middlewaresGlobais.resLocalsExample);
app.use(routes);

app.on('pronto', () => {
    app.listen(port, () => {
        console.log(`Server started at: http://localhost:${port}`);
    });
});