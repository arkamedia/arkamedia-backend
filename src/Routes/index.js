const express = require('express');
const product = require('./product');
const user = require('./users');
const whislist = require('./wishlist');

const Router = express.Router();

Router.use('/api/product', product);
Router.use('/api/user', user);
Router.use('/api/wishlist', whislist);

module.exports = Router;
