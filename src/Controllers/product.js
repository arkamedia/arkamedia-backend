const productModel = require('../Models/product');

module.exports = {
	getAllProduct: (req, res) => {
		productModel.getAllProduct().then(result => {
			res.json(result);
		});
	},
};
