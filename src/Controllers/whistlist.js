const wishModel = require('../Models/whistlist');
const jwt = require('jsonwebtoken');

module.exports = {
	getUserWhistlist: (req, res) => {
		jwt.verify(req.token, process.env.SECRET_KEY, (err, data) => {
			if (err) {
				res.sendStatus(403);
			} else {
				const { user_id } = data.response;

				wishModel
					.getUserWhistlist(user_id)
					.then(result => {
						if (result.length === 0) {
							res.status(404).json({
								msg: 'Wishlist is empty',
							});
						} else {
							res.json(result);
						}
					})
					.catch(err => {
						res.json(err);
					});
			}
		});
	},
};
