// Author: Harsh Vaghani - B00923828 - harsh.vaghani@dal.ca

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const NewUsers = require('../../Models/user-signup');

const login = async (req, res) => {
	console.log('login request body is ' + JSON.stringify(req.body));

	TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;
	const email = req.body.email;
	const password = req.body.password;
	let userFound;

	try {
		userFound = await NewUsers.findOne({ email }); // Use await to handle promises
		const user = {
			id: userFound._id,
			firstName: userFound.firstName,
			lastName: userFound.lastName,
			username: userFound.username,
			email: userFound.email,
			birthdate: userFound.birthdate,
			phone: userFound.phone,
			address: userFound.address,
			city: userFound.city,
			country: userFound.country,
		};
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

		return res.status(200).json({
			user: user,
			token: token,
			expiresIn: 3600,
		});
	} catch (error) {
		console.error(error.message); // Log error message to console
		return res.status(500).json({ message: 'Login failed.' }); // Provide informative error message to client
	}
};

module.exports = login;
