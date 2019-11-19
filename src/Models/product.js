const db = require('../Configs/db');
const allQuery = require('../Helpers/query');

module.exports = {
	// @Method GET
	getAllProductByCatName: cat => {
		return new Promise((resolve, reject) => {
			const query = allQuery.getAllProductByCatName;

			db.query(query, [cat], (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(err);
				}
			});
		});
	},
	// @Method GET
	getAllProductByGenre: genre => {
		return new Promise((resolve, reject) => {
			const query = allQuery.getAllProductByGenre;
			db.query(query, [genre], (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(err);
				}
			});
		});
	},
	// @Method POST
	insertProduct: (product, detail) => {
		return new Promise((resolve, reject) => {
			// Start Transaction
			db.beginTransaction(error => {
				if (error) {
					console.log(error);
				} else {
					const query = 'INSERT INTO product SET ?';
					db.query(query, [product], (err, result) => {
						if (!err) {
							resolve(result);
						} else {
							reject(err);
							db.rollback(e => console.log(e));
						}

						db.query('INSERT INTO detail SET ?', [detail], (err, result) => {
							if (!err) {
								resolve(result);
								db.commit(e => {
									if (err) {
										db.rollback(() => console.log(e));
									}
									console.log('Completed');
									db.end();
								});
							} else {
								reject(err);
								db.rollback(e => console.log(e));
							}
						});
					});
				}
			});
			// End Transaction
		});
	},
};
