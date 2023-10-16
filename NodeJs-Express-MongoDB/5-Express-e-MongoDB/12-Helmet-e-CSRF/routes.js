const express = require('express');
const route = express.Router();

const homePageController = require('./src/controllers/homePageController.js');
const resLocalsExemplo = require('./src/middlewares/resLocalsExemplo.js');

route.get('/', homePageController.homePage);

route.post('/', resLocalsExemplo, homePageController.homePagePost);

module.exports = route;