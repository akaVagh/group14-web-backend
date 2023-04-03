// Author: Harsh Vaghani - B00923828 - harsh.vaghani@dal.ca

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	username: { type: String, required: false, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	phone: { type: String, required: false },
	birthdate: { type: String, required: false },
	address: { type: String, required: false },
	city: { type: String, required: false },
	country: { type: String, required: false },
});

userSchema.plugin(uniqueValidator);

const NewUsers = mongoose.model('NewUsers', userSchema);

module.exports = NewUsers;
