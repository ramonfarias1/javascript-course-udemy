// O MongoDB é um sistema de gerenciamento de banco de dados NoSQL (não relacional) orientado a documentos. Ele é projetado para armazenar, consultar e gerenciar grandes volumes de dados de forma flexível e escalável. Ao contrário dos bancos de dados relacionais tradicionais, o MongoDB não utiliza tabelas para armazenar dados; em vez disso, ele utiliza coleções de documentos no formato BSON (Binary JSON), que são armazenados em estruturas semelhantes a objetos chamadas de documentos.

require('dotenv').config();
// Abra o arquivo ".env" para saber mais sobre Dotenv

const express = require('express');
const app = express();

const mongoose = require('mongoose');
// Mongoose é uma biblioteca Node.js que fornece uma camada de modelagem de dados para o MongoDB, um banco de dados NoSQL. Ele simplifica a interação com o MongoDB, permitindo que você defina esquemas, criar modelos e realizar operações de banco de dados de maneira mais fácil e intuitiva.

// Abra o arquivo "HomePageModel" na pasta "models" para ver um exemplo de como criar um Model

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado na Banco de Dados!');
        app.emit('pronto');
        // Essa promise vai esperar a conexão com a base de dados ser feita, quando a conexão ser feita, o método do Express "app.emit('pronto')" irá emitir um sinal que será capturado com o outro método "app.on('pronto')" que chamará uma function que irá iniciar o servidor.
        //! A conexão com o banco de dados sempre deve ser feita antes de iniciar o servidor!
    })
    .catch( error => console.log(error) );
// Conectando no servidor de Banco de Dados

const port = 3000;
const routes = require('./routes');
const path = require('path');
const { middlewareRetornaNome, outroMiddleware } = require('./src/middlewares/middlewaresGlobais.js');

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(middlewareRetornaNome);
app.use(outroMiddleware);

app.use(routes);

app.on('pronto', () => { // Capturando o sinal de "app.emit('pronto')"
    app.listen(port, () => {
        console.log(`Server started at: http://localhost:${port}`);
    });
});