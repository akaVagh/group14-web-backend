const mongoose = require("mongoose");

const cruiseSourcesSchema = mongoose.Schema(
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


const cruiseSourcesModels = mongoose.model('cruise_sources', cruiseSourcesSchema);

module.exports = cruiseSourcesModels;
