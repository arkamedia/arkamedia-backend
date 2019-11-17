const db = require('../Configs/db');

module.exports = {
	getAllProduct: () => {
		return new Promise((resolve, reject) => {
			const query = `SELECT * FROM product`;

			db.query(query, (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(err);
				}
			});
		});
	},
};
