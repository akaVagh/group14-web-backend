//Author: Karan Aggarwal (B00912580)
const mongoose = require("mongoose");



const CruiseLeaseFormSchema = mongoose.Schema(
    {
        cruiseID: {
            type: String,
            required: true
        },
        cruisename: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        capacity: {
            type: Number,
            required: true,
        },
        rooms: {
            type: Number,
            required: true,
        },
        fromavailability: {
            type: String,
            required: true,
        },
        toavailability: {
            type: String,
            required: true,
        },
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        companyname: {
            type: String,
            required: false,
        },
        rnumber: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const Cruise_Lease = mongoose.model('cruise_lease', CruiseLeaseFormSchema);

module.exports = Cruise_Lease;
