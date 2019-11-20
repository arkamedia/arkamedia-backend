const express = require('express');
const wishController = require('../Controllers/whistlist');
const verifyToken = require('../Configs/auth');

const Router = express.Router();

// GET            : http://localhost:9600/v1/api/wishlist
// @DESC          : Get whistlist user
// USER           : Acces
// AUTHENTICATED  : TRUE
Router.get('/', verifyToken, wishController.getUserWhistlist);

module.exports = Router;
