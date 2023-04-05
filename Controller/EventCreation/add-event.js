const EventDetail = require('../../Models/event-list');

const createEvent = async (req, res) => {
	const event = req.body;
	console.log('event: ', event);
	try {
		const result = await EventDetail.create(event);
		res.status(200).json({
			message: 'Event created',
			result: result,
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ error: error.message });
	}
};

module.exports = createEvent;
