//# EXPRESS ROUTER E CONTROLLERS
//# ----------------------------

//# Primeiramente, o que é um Router?:

// Um Object Roteador(Router) é uma instância isolada de middleware e rotas. Você pode considerá-lo um “miniaplicativo”, capaz apenas de executar functions de middleware e roteamento. Cada aplicativo Express possui um router de aplicativo integrado.

// Um router se comporta como o próprio middleware, então você pode usá-lo como argumento para app.use() ou como argumento para o método use() de outro router.

//# Express Router:

// O object "express" de nível superior possui um método Router() que cria um novo object router.

// Depois de criar um object router, você pode adicionar middleware e rotas de método HTTP (como get, put, post e assim por diante) como se fosse um aplicativo.

//# Controllers:

// O responsável por receber todas as requisições do usuário. São responsáveis por uma página, controlando qual model usar e qual view será mostrado ao usuário.

const express = require('express');
const route = express.Router(); // Criando um novo Object Router
const homePageController = require('./controllers/homePageController.js');
const contactPageController = require('./controllers/contactPageController.js');

route.get('/', homePageController.homePage); // Usa o controlador da Home Page
route.post('/', homePageController.homePagePost);

route.get('/contact', contactPageController.contactPage);

module.exports = route;