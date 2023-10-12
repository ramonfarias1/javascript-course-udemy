const express = require('express');
const route = express.Router();
const homePageController = require('./src/controllers/homePageController.js');
const resLocalsExemplo = require('./src/middlewares/resLocalsExemplo.js');

route.get('/', resLocalsExemplo, homePageController.homePage); // Usando o middleware do res.locals

route.post('/', homePageController.homePagePost);

module.exports = route;