/* Author: Krina Mistry - B00927702 kr981143@dal.ca  */

const mongoose = require("mongoose");

const CruiseListSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        description1: { type: String, required: true },
        description2: { type: String, required: true },
        image: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

const CruiseList = mongoose.model('cruise_list', CruiseListSchema);

module.exports = CruiseList;
