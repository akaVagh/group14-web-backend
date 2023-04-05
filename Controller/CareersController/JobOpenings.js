// Author: Akash Gupta - B00912118 - ak459448@dal.ca

const JobOpenings = require('../../Models/job_opening')

const jobDetails=async(req, res) => {
    try {
        const job_List = await JobOpenings.find()
        res.status(200).json(job_List);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

module.exports= jobDetails;