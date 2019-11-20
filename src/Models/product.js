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
	// @Method PATCH
	updateProduct: (product, detail, id) => {
		return new Promise((resolve, reject) => {
			// Start Transaction
			db.beginTransaction(error => {
				if (error) {
					console.log(error);
				} else {
					const query = 'UPDATE product SET ? WHERE product_id = ?';
					db.query(query, [product, id], (err, result) => {
						if (!err) {
							resolve(result);
						} else {
							reject(err);
							db.rollback(e => console.log(e));
						}

						db.query(
							'UPDATE detail SET ? WHERE detail_id = ?',
							[detail, id],
							(err, result) => {
								if (!err) {
									resolve(result);
									db.commit(e => {
										if (err) {
											db.rollback(() => console.log(e));
										}
										console.log('Completed');
									});
								} else {
									reject(err);
									db.rollback(e => console.log(e));
								}
							}
						);
					});
				}
			});
			// End Transaction
		});
	},
	// @Method GET
	getAllBookByType: book_type => {
		return new Promise((resolve, reject) => {
			const query = allQuery.getAllBookByType;
			db.query(query, [book_type], (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(err);
				}
			});
		});
	},
	deleteProduct: id => {
		return new Promise((resolve, reject) => {
			const query = allQuery.deleteProduct;
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
