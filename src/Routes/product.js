const express = require('express');
const productController = require('../Controllers/product');

const Router = express.Router();

Router.get('/', productController.getAllProduct);

module.exports = Router;
