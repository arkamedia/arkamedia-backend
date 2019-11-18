const productModel = require('../Models/product');
const userModel = require('../Models/users');

module.exports = {
	// @route GET /v1/api/user/order/:user_id
	// @desc GET User Order
	// @access Private
	getUserOrder: (req, res) => {
		const { user_id } = req.params;
		userModel
			.getUserOrder(user_id)
			.then(response => {
				res.json(response);
			})
			.catch(err => res.json(err));
	},
};
