const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const NewUsers = require('../../Models/user-signup');

const login = async (req, res) => {
	console.log('login request body is ' + JSON.stringify(req.body));

	const TOKEN_SECRET =
		'MDNNCeTQAAj1jYlt/yrTWZHYsayKxgRkYhXCx3qGPF//e2cYmjhBti0E9NVL4NtP5riRJADaI+n6nni+eAq/1HisVbtvAtGkCspDODr7r51SJIFBVjBxDXTXh5cdp/w6McMM2llzX9U5ZmBoNtZel5cU55/jcynsrBPPa3GnTtlTYIfplFDasiOLjKk1AA14Y6m2fokHGEjXUPwX3j40G/NP85sjWM0V5oRXYzWinJOMld/N5TF4AbeYvzBMDLeqFd0DhiUR4ReUp0MnaTOPGTIO/6j5joVOPIhnEQVzehGCGcFGZ+uCBbUG5YLxIfTFH3ECP7ghFhTyYg/hsVBsVw==';

	const email = req.body.email;
	const password = req.body.password;
	let userFound;

	try {
		userFound = await NewUsers.findOne({ email }); // Use await to handle promises

		if (!userFound) {
			return res.status(401).json({
				message: 'User not found!',
			});
		}

		const passwordMatch = await bcrypt.compare(
			password,
			userFound.password
		); // Use bcrypt.compareSync instead of compare

		if (!passwordMatch) {
			return res.status(401).json({
				message: 'Incorrect password!',
			});
		}

		const token = jwt.sign(
			{
				email: userFound.email,
				userId: userFound._id,
			},
			TOKEN_SECRET,
			{ expiresIn: '1h' }
		);

		return res.status(200).json({ token: token, expiresIn: 3600 });
	} catch (error) {
		console.error(error.message); // Log error message to console
		return res.status(500).json({ message: 'Login failed.' }); // Provide informative error message to client
	}
};

module.exports = login;
