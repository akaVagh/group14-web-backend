const NewUsers = require('../../Models/user-signup');

const deleteAccount = async (req, res) => {
	try {
		const deletedUser = await NewUsers.findByIdAndDelete(req.params.userId);

		if (!deletedUser) {
			return res.status(404).json({ message: 'User not found!' });
		}

		res.status(200).json({ message: 'Account deleted successfully.' });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: 'Failed to delete the account.' });
	}
};

module.exports = deleteAccount;
