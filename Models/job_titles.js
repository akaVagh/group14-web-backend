// Author: Akash Gupta - B00912118 - ak459448@dal.ca

const mongoose = require("mongoose");

const Job_TitleSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)


const jobTitleModels = mongoose.model('Job_Title', Job_TitleSchema);

module.exports = jobTitleModels;
