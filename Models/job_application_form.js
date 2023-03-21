const mongoose = require("mongoose");

const JobApplicationFormSchema = mongoose.Schema(
    {
        FirstName: {
            type: String,
            required: true
        },
        LastName: {
            type: String,
            required: true
        },
        Email: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)


const Job_Application = mongoose.model('Job_Application', JobApplicationFormSchema);

module.exports = Job_Application;
