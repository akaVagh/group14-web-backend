// Author: Harsh Vaghani - B00923828 - harsh.vaghani@dal.ca

const NewUsers = require('../../Models/user-signup');

const updateUser = async (req, res) => {
	const updatedUserData = req.body;

	try {
		const updatedUser = await NewUsers.findByIdAndUpdate(
			updatedUserData.id,
			updatedUserData,
			{ new: true }
		);
		if (!updatedUser) {
			return res.status(404).json({
				message: 'User not found!',
			});
		}

		const user = {
			id: updatedUser._id,
			firstName: updatedUser.firstName,
			lastName: updatedUser.lastName,
			username: updatedUser.username,
			email: updatedUser.email,
			birthdate: updatedUser.birthdate,
			phone: updatedUser.phone,
			address: updatedUser.address,
			city: updatedUser.city,
			country: updatedUser.country,
		};

		res.status(200).json({
			message: 'User updated successfully',
			user: user,
		});
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: 'Update user failed.' });
	}
};

module.exports = updateUser;
