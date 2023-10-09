const express = require('express');
const route = express.Router();
const homePageController = require('./src/controllers/homePageController.js');

// function meuMiddleware(req, res, next) {
//     req.session = {nome: 'mihawk', sobrenome: 'eagle'};
//     console.log();
//     console.log('Sou executado antes do middleware da homePage!');
//     console.log(`olha o que tem na minha req.session.nome: ${req.session.nome}`); // Essa req irá chegar até o último middleware
//     console.log();
//     next();
// };

route.get('/', homePageController.homePage);

route.post('/', homePageController.homePagePost); // Middleware

module.exports = route;