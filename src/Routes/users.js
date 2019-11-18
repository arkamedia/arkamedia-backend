const express = require('express');
const userController = require('../Controllers/users');

const Router = express.Router();

// @route GET /v1/api/user/order/:user_id
// @desc GET User Order
// @access Private
Router.get('/order/:user_id', userController.getUserOrder);

module.exports = Router;
