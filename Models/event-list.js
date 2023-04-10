const mongoose = require('mongoose');

const contactDetailsSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	phone: String,
});

const eventSchema = new mongoose.Schema({
	name: String,
	location: String,
	date: Date,
	time: String,
});

const detailsSchema = new mongoose.Schema({
	description: String,
	highlights: [String],
	additionalDetails: String,
});

const EventDetailSchema = new mongoose.Schema({
	//_id: String,
	contactDetails: contactDetailsSchema,
	event: eventSchema,
	details: detailsSchema,
});

const EventDetail = mongoose.model('event_detail', EventDetailSchema);

module.exports = EventDetail;
