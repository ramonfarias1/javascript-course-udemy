const express = require('express');
const route = express.Router();
const homePageController = require('./src/controllers/homePageController.js');

route.get('/', homePageController.homePage);

module.exports = route;