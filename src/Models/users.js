const db = require('../Configs/db');
const allQuery = require('../Helpers/query');

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
	getUserCartOrder: id => {
		return new Promise((resolve, reject) => {
			const query = allQuery.getUserCartOrder;
			db.query(query, [id], (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(err);
				}
			});
		});
	},
	getGrandTotal: id => {
		return new Promise((resolve, reject) => {
			const query = allQuery.grandTotalOrder;
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
