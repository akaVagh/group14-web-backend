const bcrypt = require('bcrypt');

const NewUsers = require('../../Models/user-signup');

const addNewUser = async (req, res) => {
	console.log('addNewUser request body is ' + JSON.stringify(req.body));
	bcrypt.hash(req.body.password, 10).then(async (hash) => {
		// console.log('req.body', req.body);
		const user = {
			...req.body,
			password: hash,
		};

		try {
			const result = await NewUsers.create(user);
			res.status(200).json({ message: 'User created', result: result });
		} catch (error) {
			console.log(error.message);
			res.status(500).json({ error: error.message });
		}
	});
};

module.exports = addNewUser;
