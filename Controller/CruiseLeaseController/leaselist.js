const Cruise_Lease = require('../../Models/cruise-lease');

const leaselist = async(req, res) => {
    try {
        const product = await Cruise_Lease.find();
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

const leaseById = async (req, res) => {
    const { id } = req.params;
    try {
        const cruise = await Cruise_Lease.findById(id);
        res.status(200).json(cruise);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

module.exports= { leaselist, leaseById};