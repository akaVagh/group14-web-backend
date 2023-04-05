// Author: Akash Gupta - B00912118 - ak459448@dal.ca

const jobLocationModels = require('../../Models/job_locations')

const jobLocationsController=async(req, res) => {
    try {
        const job_Locations = await jobLocationModels.find()
        res.status(200).json(job_Locations);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

module.exports= jobLocationsController;