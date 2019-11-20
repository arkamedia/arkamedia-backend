const db = require('../Configs/db');

module.exports = {
	// @route POST
	loginUser: email => {
		return new Promise((resolve, reject) => {
			const query = `SELECT * FROM user WHERE email = ?  `;

			db.query(query, [email], (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(err);
				}
			});
		});
	},
	// @route POST
	getUserByEmail: email => {
		return new Promise((resolve, reject) => {
			const query = `SELECT * FROM user WHERE email = ? `;

			db.query(query, [email], (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(err);
				}
			});
		});
	},
	// @route POST
	registerUser: body => {
		return new Promise((resolve, reject) => {
			const query = `INSERT INTO user SET ? `;

			db.query(query, [body], (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(err);
				}
			});
		});
	},
	// @route GET
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
