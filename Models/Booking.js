/* Authors : Krina Mistry - B00927702 kr981143@dal.ca, Raj Patel - B00931998 rj506049@dal.ca  */

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  personalInformation: {
    Name: { type: String, required: true },
    DOB: { type: String, required: true },
    Email: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    Address: { type: String, required: true },
  },
  cardInformation: {
    cardnumber: { type: String, required: false }, // make cardnumber optional
    name: { type: String, required: false },
    expiration: { type: String, required: false },
    cvv: { type: String, required: false },
  },
  bookingInformation: {
    name: { type: String, required: false },
    cruiseid: { type: String, required: false },
    suitetype: { type: String, required: false },
    base_amount: { type: Number, required: false },
    tax_amount: { type: Number, required: false },
    total_amount: { type: Number, required: false },
  },
  rentBookingInformation: {
    name: { type: String, required: false },
    cruiseid: { type: String, required: false },
    fromavailable: { type: Date, required: false },
    toavailable: { type: Date, required: false },
    rooms: { type: Number, required: false },
    base_amount: { type: Number, required: false },
    tax_amount: { type: Number, required: false },
    total_amount: { type: Number, required: false },
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
