// const productModel = require('../Models/product');
const userModel = require('../Models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const validateEmail = em => {
	const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return regex.test(em);
};

module.exports = {
	getUserByEmail: (req, res) => {
		const { email } = req.body;
		userModel
			.getUserByEmail(email)
			.then(result => res.json(result))
			.catch(err => res.json(err));
	},

	loginUser: async (req, res, next) => {
		try {
			const { email, password } = req.body;

			if (email == null || email == undefined) {
				res.status(400).json({ msg: 'Email Cannot Empty' });
			} else if (!validateEmail(email)) {
				res.status(400).json({ msg: 'Email is Invalid' });
			} else if (password == null || password == undefined) {
				res.status(400).json({ msg: 'Password Cannot Empty' });
			} else {
				await userModel
					.loginUser(email)
					.then(response => {
						if (response.length === 0) {
							res.status(400).json({
								message: `User with email ${email} Not Found`,
							});
						} else {
							if (bcrypt.compareSync(password, response[0].password)) {
								jwt.sign(
									{ response: response[0] },
									process.env.SECRET_KEY,
									(err, token) => {
										res.json(token);
									}
								);

								console.log({ msg: 'berhasil login' });
							} else {
								res.status(400).json({
									message: 'Wrong password or Email',
								});
							}
						}
					})
					.catch(err => {
						res.json(err);
					});
			}
		} catch (err) {
			next(err);
		}
	},
	registerUser: async (req, res, next) => {
		try {
			const { name, address, email, dob, password, imguser } = req.body;
			const userData = {
				name,
				address,
				email,
				dob,
				password,
				imguser,
			};

			if (email == null || email == undefined) {
				res.status(400).json({ msg: 'Email is Required' });
			} else if (name == null || name == undefined) {
				res.status(400).json({ msg: 'Name is Required' });
			} else if (!validateEmail(email)) {
				res.status(400).json({ msg: 'Email is Invalid' });
			} else if (password == null || password == undefined) {
				res.status(400).json({ msg: 'Password Cannot Empty' });
			} else if (password.length < 5) {
				res.status(400).json({ msg: 'Password Should be greater than 5' });
			} else {
				await userModel
					.getUserByEmail(email)
					.then(result => {
						if (result.length > 0) {
							res.status(400).json({ msg: 'Ada user' });
						} else {
							bcrypt.hash(password, 10, (err, hash) => {
								userData.password = hash;
								userModel
									.registerUser(userData)
									.then(result => {
										res.json({ msg: 'Succes Register user' });
									})
									.catch(err => {
										res.json(err);
									});
							});
						}
					})
					.catch(err => {
						res.json(err);
					});
			}
		} catch (err) {
			next(err);
		}
	},

	// @route GET
	getUserOrder: (req, res, next) => {
		jwt.verify(req.token, process.env.SECRET_KEY, async (err, data) => {
			if (err) {
				res.sendStatus(403);
			} else {
				const { user_id } = data.response;

				let rslt = {};
				let total = {};

				try {
					await userModel
						.getUserCartOrder(user_id)
						.then(async result => {
							if (result.length === 0) {
								res.status(404).json({
									msg: 'Order is empty',
								});
							} else {
								rslt = result;
								await userModel
									.getGrandTotal(user_id)
									.then(grand => {
										if (result.length === 0) {
											res.status(404).json({
												msg: 'Order is empty',
											});
										} else {
											total = grand[0];
										}
									})
									.catch(err => {
										res.json(err);
									});
							}
						})
						.catch(err => {
							res.json(err);
						});

					let finalResult = {
						result: rslt,
						total: total.Grand,
					};
					res.json(finalResult);
				} catch (error) {
					next(err);
				}
			}
		});
	},
};
