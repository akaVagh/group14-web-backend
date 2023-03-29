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
