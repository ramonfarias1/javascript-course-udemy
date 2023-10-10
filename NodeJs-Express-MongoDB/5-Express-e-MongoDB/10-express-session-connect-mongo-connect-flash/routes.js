const express = require('express');
const route = express.Router();
const homePageController = require('./src/controllers/homePageController.js');

route.get('/', homePageController.homePage);

route.post('/', homePageController.homePagePost);

module.exports = route;