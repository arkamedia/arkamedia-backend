const productModel = require('../Models/product');
const moment = require('moment');

module.exports = {
	// @Method GET
	getAllProductByCatName: (req, res) => {
		const { cat_name } = req.query;
		productModel
			.getAllProductByCatName(cat_name)
			.then(result => {
				res.json(result);
			})
			.catch(err => res.json(err));
	},
	// @Method GET
	getAllProductByGenre: (req, res) => {
		const { genre } = req.query;
		productModel
			.getAllProductByGenre(genre)
			.then(result => {
				res.json(result);
			})
			.catch(err => res.json(err));
	},
	// @Method POST
	insertProduct: (req, res) => {
		const id = Math.floor(Math.random() * 99990) + 99;
		const date = moment().format('YYYY-MM-DD');

		const product = {
			product_id: id,
			detail_id: id,
			product_name: req.body.product_name,
			imgurl: req.body.imgurl,
			cat_name: req.body.cat_name,
			quantity: req.body.quantity,
			price: req.body.price,
			description: req.body.description,
		};
		const detail = {
			detail_id: id,
			weight: req.body.weight,
			width: req.body.width,
			height: req.body.height,
			ISBN: req.body.ISBN,
			publisher: req.body.publisher,
			pages: req.body.pages,
			genre: req.body.genre,
			author: req.body.author,
			import: req.body.import,
			publish_date: date,
			pages: req.body.pages,
		};
		productModel
			.insertProduct(product, detail)
			.then(result => {
				console.log(result);
				res.status(200).json({
					msg: 'Succes Add Product',
					result: [product, detail],
				});
			})
			.catch(err => res.json(err));
	},
};
