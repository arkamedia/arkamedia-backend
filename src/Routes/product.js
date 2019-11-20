const express = require('express');
const productController = require('../Controllers/product');

const Router = express.Router();

// GET            : http://localhost:9600/v1/api/product/category?cat_name=NamaCategory (Cth: Book)
// @DESC          : Get Product By Category Name
// PUBLIC         : Acces
// AUTHENTICATED  : FALSE
Router.get('/category', productController.getAllProductByCatName);

// GET            : http://localhost:9600/v1/api/product/genre?genre=NamaGenre (Cth: Fantasy)
// @DESC          : Get Product By Genre
// PUBLIC         : Acces
// AUTHENTICATED  : FALSE
Router.get('/genre', productController.getAllProductByGenre);

// GET            : http://localhost:9600/v1/api/product/book?book_type=NamaType (Cth: Novel)
// @DESC          : Get Book By Type (Cth: Novel)
// PUBLIC         : Acces
// AUTHENTICATED  : FALSE
Router.get('/book', productController.getAllBookByType);

// POST           : http://localhost:9600/v1/api/product/
// @DESC          : Add New Product
// ADMIN          : Acces
// AUTHENTICATED  : TRUE
Router.post('/', productController.insertProduct);

// PATCH          : http://localhost:9600/v1/api/product/idProduct (Cth: 3124)
// @DESC          : Update Product
// ADMIN          : Acces
// AUTHENTICATED  : TRUE
Router.patch('/:id', productController.updateProduct);

// DELETE         : http://localhost:9600/v1/api/product/idProduct (Cth: 3124)
// @DESC          : Delete Product
// ADMIN          : Acces
// AUTHENTICATED  : TRUE
Router.delete('/:id', productController.deleteProduct);

module.exports = Router;
