const db = require('../Configs/db');
const allQuery = require('../Helpers/query');

module.exports = {
	getUserWhistlist: user_id => {
		return new Promise((resolve, reject) => {
			const query = allQuery.getUserWhislist;

			db.query(query, [user_id], (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
};
