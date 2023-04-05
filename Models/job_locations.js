// Author: Akash Gupta - B00912118 - ak459448@dal.ca

const mongoose = require("mongoose");

const jobDestinationsSchema = mongoose.Schema(
    {
        location: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)


const jobLocationModels = mongoose.model('job_destination', jobDestinationsSchema);

module.exports = jobLocationModels;
