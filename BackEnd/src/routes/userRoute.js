const express = require('express');
const userController = require('../controllers/userController');
const route = express.Router();

route.post('/signup', userController.signup);

module.exports = route;