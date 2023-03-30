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
