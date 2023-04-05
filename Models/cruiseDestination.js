const mongoose = require("mongoose");

const cruiseDestinationsSchema = mongoose.Schema(
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


const cruiseLocationModels = mongoose.model('cruise_destinations', cruiseDestinationsSchema);

module.exports = cruiseLocationModels;
