/* Author: Krina Mistry - B00927702 kr981143@dal.ca  */

const Booking = require('../../Models/Booking');

exports.addPersonalInformation = async (req, res) => {
  try {
    const { Name, DOB, Email, PhoneNumber, Address } = req.body;

    const booking = new Booking({ personalInformation: { Name, DOB, Email, PhoneNumber, Address } });
    const savedBooking = await booking.save();

    res.status(201).json({ message: 'Personal information added successfully!', booking: savedBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong!' });
  }
};

exports.addCardInformation = async (req, res) => {
  try {
    const { cardnumber, name, expiration, cvv } = req.body;

    const booking = await Booking.findById(req.params.id);
    booking.cardInformation = { cardnumber, name, expiration, cvv };
    const savedBooking = await booking.save();

    res.status(200).json({ message: 'Card information added successfully!', booking: savedBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong!' });
  }
};

exports.addBookingInformation = async (req, res) => {
  try {
    const { name, cruiseid, suitetype, base_amount, tax_amount, total_amount } = req.body;

    const booking = await Booking.findById(req.params.id);
    booking.bookingInformation = { name, cruiseid, suitetype, base_amount, tax_amount, total_amount };
    const savedBooking = await booking.save();

    res.status(200).json({ message: 'Booking information added successfully!', booking: savedBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong!' });
  }
};

exports.addRentBookingInformation = async (req, res) => {
  try {
    const { cruisename, cruiseid, fromavailable,toavailable, rooms, base_amount, tax_amount, total_amount } = req.body;

    const booking = await Booking.findById(req.params.id);
    booking.rentBookingInformation = { cruisename, cruiseid, fromavailable,toavailable, rooms, base_amount, tax_amount, total_amount };
    const savedBooking = await booking.save();

    res.status(200).json({ message: 'Booking information added successfully!', booking: savedBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong!' });
  }
};

exports.getBookingById = async (req, res) => {
	try {
		const booking = await Booking.findById(req.params.id);
		res.status(200).json(booking);
	} catch (error) {
		console.error(error);
		res.status(500).json({error: 'Something went wrong!'});
	}
};