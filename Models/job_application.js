// Author: Akash Gupta - B00912118 - ak459448@dal.ca

const mongoose = require("mongoose");

const jobApplicationSchema = mongoose.Schema(
    {
         Firstname: {
            type: String,
            required: true
        },
        Lastname: {
            type: String,
            required: true
        },
        Email: {
            type: String,
            required: true
        },
        Contact: {
            type: String,
            required: true
        },
        fileupload: {
            type: String,
            required: true
        },
        Address: {
            type: String,
            required: true
        }
        
    },
    {
        timestamps: true
    }
)


const jobApplicationModels = mongoose.model('job_applications', jobApplicationSchema);

module.exports = jobApplicationModels;
