const db = require('../Configs/db');

module.exports = {
	// @route GET ?
	// @desc GET User Order
	// @access Private
	getUser: () => {
		return new Promise((resolve, reject) => {
			const query = `SELECT * FROM user`;

			db.query(query, (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(err);
				}
			});
		});
	},
	// @route GET /v1/api/user/order/:user_id
	// @desc GET User Order
	// @access Private
	getUserOrder: id => {
		return new Promise((resolve, reject) => {
			const query = `SELECT U.user_id, P.product_name, P.imgurl, P.quantity, P.price, P.description , D.weight, D.author , O.ord_id, O.ord_date, O.product_id, O.price, O.quantity FROM user U JOIN ord O ON U.user_id=O.user_id JOIN product P ON O.product_id=P.product_id JOIN detail D ON P.detail_id=D.detail_id WHERE U.user_id = ?`;

			db.query(query, [id], (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(err);
				}
			});
		});
	},
};
