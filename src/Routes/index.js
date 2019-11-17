const express = require('express');
const product = require('./product');

const Router = express.Router();

Router.use('/api/product', product);

module.exports = Router;
