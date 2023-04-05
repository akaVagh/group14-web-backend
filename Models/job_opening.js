// Author: Akash Gupta - B00912118 - ak459448@dal.ca

const mongoose = require("mongoose");

const JobApplicationFormSchema = mongoose.Schema(
    {
        company_name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        pay: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        days: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        company_logo: {
            type: String,
            required: true
        },
        about: {
            type: String,
            required: true
        },
        responsibility: {
            type: String,
            required: true
        },
        qualification: {
            type: String,
            required: true
        },
        perks: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)


const JobOpenings = mongoose.model('job_openings', JobApplicationFormSchema);

module.exports = JobOpenings;
