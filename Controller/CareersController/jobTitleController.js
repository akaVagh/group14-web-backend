// Author: Akash Gupta - B00912118 - ak459448@dal.ca

const jobTitleModels = require('../../Models/job_titles')

const jobTitleController=async(req, res) => {
    try {
        const job_Titles = await jobTitleModels.find();
        res.status(200).json(job_Titles);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

module.exports= jobTitleController;