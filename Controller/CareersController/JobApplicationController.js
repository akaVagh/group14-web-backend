// Author: Akash Gupta - B00912118 - ak459448@dal.ca

const jobApplicationModels = require('../../Models/job_application');

const JobApplicationController=async(req, res) => {
    try {
        console.log("res body"+JSON.stringify(req.body));
        const job_Locations = await jobApplicationModels.insertMany(req.body)
        res.status(200).json(job_Locations);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}


module.exports = JobApplicationController;
