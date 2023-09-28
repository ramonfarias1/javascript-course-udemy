const express = require('express');
const route = express.Router();
const homePageController = require('./controllers/homePageController.js');
const contactPageController = require('./controllers/contactPageController.js');

route.get('/', homePageController.homePage);
route.post('/', homePageController.homePagePost);

route.get('/contact', contactPageController.contactPage);

module.exports = route;