const EventDetail = require('../../Models/event-list');

const getAllEvents = async (req, res) => {
	console.log('get events');
	try {
		const result = await EventDetail.find();
		res.status(200).json({
			events: result,
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ error: error.message });
	}
};

const getEventById = async (req, res) => {
	const { id } = req.params;
	console.log('get event by id', id);
	try {
		const result = await EventDetail.findById(id);
		res.status(200).json({
			events: result,
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ error: error.message });
	}
};

module.exports = { getAllEvents, getEventById };
