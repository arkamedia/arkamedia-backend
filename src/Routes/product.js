const express = require('express');
const productController = require('../Controllers/product');

const Router = express.Router();

// GET http://localhost:9600/v1/api/product/category?cat_name=NamaCategory (Cth: Book)
// @DESC Get Product By Category Name
// PUBLIC <- Acess
Router.get('/category', productController.getAllProductByCatName);

// GET http://localhost:9600/v1/api/product/genre?genre=NamaGenre (Cth: Fantasy)
// @DESC Get Product By Category Name
// PUBLIC <- Acess
Router.get('/genre', productController.getAllProductByGenre);

// GET http://localhost:9600/v1/api/product/book?book_type=NamaType (Cth: Novel)
// @DESC Get Product By Category Name
// PUBLIC <- Acess
Router.get('/book', productController.getAllBookByType);

// POST  http://localhost:9600/v1/api/product/
// @DESC Get Product By Category Name
// ADMIN <- Acces
Router.post('/', productController.insertProduct);

module.exports = Router;
