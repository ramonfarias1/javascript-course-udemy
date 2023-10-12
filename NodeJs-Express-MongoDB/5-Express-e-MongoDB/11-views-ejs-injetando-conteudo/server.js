require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const session = require('express-session');
const mongoStore = require('connect-mongo');
const flashMessages = require('connect-flash');
const routes = require('./routes');

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado na Banco de Dados!');
        app.emit('pronto');
    })
    .catch(error => console.log(error));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

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

app.use(routes);

app.on('pronto', () => {
    const port = 3000;

    app.listen(port, () => {
        console.log(`Server started at: http://localhost:${port}`);
    });
});