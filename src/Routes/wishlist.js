const express = require('express');
const wishController = require('../Controllers/whistlist');
const verifyToken = require('../Configs/auth');

const Router = express.Router();

Router.get('/', verifyToken, wishController.getUserWhistlist);

module.exports = Router;
