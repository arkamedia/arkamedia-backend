const express = require('express');
const userController = require('../Controllers/users');
const verifyToken = require('../Configs/auth');

const Router = express.Router();

// POST           : http://localhost:9600/v1/api/user/email
// @DESC          : Get User By Email
// ADMIN          : Acces
// AUTHENTICATED  : TRUE ?
Router.post('/email', userController.getUserByEmail);

// POST           : http://localhost:9600/v1/api/user/login
// @DESC          : Login User
// ADMIN          : Acces
// AUTHENTICATED  : FALSE
Router.post('/login', userController.loginUser);

// POST           : http://localhost:9600/v1/api/user/register
// @DESC          : Register User
// ADMIN          : Acces
// AUTHENTICATED  : FALSE
Router.post('/register', userController.registerUser);

// GET            : http://localhost:9600/v1/api/user/order
// @DESC          : Get User Order
// ADMIN          : Acces
// AUTHENTICATED  : TRUE
Router.get('/order', verifyToken, userController.getUserOrder);

module.exports = Router;
