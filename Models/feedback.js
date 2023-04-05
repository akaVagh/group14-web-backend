//Author: Karan Aggarwal (B00912580)

const mongoose = require("mongoose");



const FeedbackFormSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        feedback: {
            type: String,
            required: true,
        }
    }
)


const Feedback = mongoose.model('feedback', FeedbackFormSchema);

module.exports = Feedback;
