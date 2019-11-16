const express = require('express');

const app = express();
const PORT = process.env.PORT || 9600;

// @route GET /
// @desc Get Root of Route
// @access Public
app.get('/', (req, res) => {
	res.json({
		status: 200,
		message: 'Welcome to Arkamedia API',
	});
});

// @route GET *
// @desc Error when not found any specific route
// @access Public
app.get('*', (req, res) => {
	res.status(404).json({
		status: 404,
		message: 'Cannot found specific route',
	});
});

// Runn server
app.listen(PORT, () => {
	console.log(`Server running at port ${PORT}`);
});
