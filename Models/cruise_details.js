/* Author: Krina Mistry - B00927702 kr981143@dal.ca  */

const mongoose = require("mongoose");

const CruiseDetailSchema = mongoose.Schema(
    {
        cruiseid: { type: String, require: true },
        location: { type: String, required: true },
        description: { type: String, required: true },
        highlights: { type: Object, required: true },
        policies: { type: String, required: true },
        suites: { type: Object, required: true }
    },
    {
        timestamps: true
    }
);

const CruiseDetail = mongoose.model('cruise_detail', CruiseDetailSchema);

module.exports = CruiseDetail;
