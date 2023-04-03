const Cruise_Lease = require('../../Models/cruise-lease');

const leaselist = async(req, res) => {
    console.log("request body is "+JSON.stringify(req.body.cruiseID))
    try {
        const product = await Cruise_Lease.find()
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

module.exports= leaselist;