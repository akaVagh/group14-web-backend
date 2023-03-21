const Job_Application = require('../Models/job_application_form')

const jobDetails=async(req, res) => {
    console.log("request body is "+JSON.stringify(req.body))
    try {
        const product = await Job_Application.create(req.body)
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

module.exports= jobDetails;