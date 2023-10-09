require('dotenv').config();
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Conectado na Banco de Dados!');
    app.emit('pronto');
})
.catch(error => console.log(error));

const mongoStore = require('connect-mongo');
const connectFlash = require('connect-flash');

const session = require('express-session');
const sessionOptions = session({
    secret: `%_:6{{R!)"c3dHx%X*,v6'Mv'c]Cv&-")?@JJW*_XE;xAN]6w;"N-=yDRK)wx.8C+7M~wy)X<rFAnMh$uM,yn+frpa[9m/Xa74Mc51C*&;3{aD;"1pc4EN'~}2am;,/..PkEn;Kd>w$#h%PPUM8!a\H_4@(D/"EX*FQ([@Nn^$R8;@H?9/3_An3]pwkUw^e}[{3p_7D[/f3'4<J-j]&7p1AMX^xnYW4<P;DG*W/^X'<gxu9{K1*X(:9/_m=mM,6V`,
    store: new mongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        
    }
});

const express = require('express');
const app = express();
const routes = require('./routes');
const port = 3000;

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(routes);

app.on('pronto', () => {
    app.listen(port, () => {
        console.log(`Server started at: http://localhost:${port}`);
    });
});