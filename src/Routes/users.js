const express = require('express');
const userController = require('../Controllers/users');
// const verifyToken = require('../Configs/auth');
// const jwt = require('jsonwebtoken');

const Router = express.Router();

// @route POST  /v1/api/user/email
Router.post('/email', userController.getUserByEmail);

// @route POST  /v1/api/user/order/:user_id
Router.post('/login', userController.loginUser);

Router.post('/register', userController.registerUser);

// @route GET /v1/api/user/order/:user_id
Router.get('/order/:user_id', userController.getUserOrder);

// Router.get('/testing', verifyToken, (req, res) => {
// 	jwt.verify(req.token, process.env.SECRET_KEY, (err, data) => {
// 		if (err) {
// 			res.sendStatus(403);
// 		} else {
// 			res.json(data);
// 		}
// 	});
// });

// {
//     "response": {
//         "user_id": 4,
//         "name": "Iyan",
//         "address": null,
//         "email": "ikhyan7@gmail.com",
//         "dob": null,
//         "username": "iyansr",
//         "password": "$2a$10$G0vUR6zG1OIS4gNLSQWC3OWxjT79m5Sw2zVi1RGtmPT3QHrvmOHxq",
//         "imguser": null
//     },
//     "iat": 1574260050,
//     "exp": 1574261490
// }

module.exports = Router;
