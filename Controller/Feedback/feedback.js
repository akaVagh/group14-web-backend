//Author: Karan Aggarwal (B00912580)

const Feedback = require('../../Models/feedback')

const feedback = async(req, res) => {
    try{
        const feed_back = await Feedback.create(req.body);
        res.status(200).json(feed_back);
    } catch(error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
}
module.exports= feedback;
