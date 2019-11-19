const express = require('express');
const product = require('./product');
const user = require('./users');

const Router = express.Router();

Router.use('/api/product', product);
Router.use('/api/user', user);

module.exports = Router;
