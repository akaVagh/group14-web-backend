/* Author: Krina Mistry - B00927702 kr981143@dal.ca  */

const CruiseList = require('../Models/cruise_list')

const getCruiseList = async (req, res) => {
    try {
        const cruises = await CruiseList.find();
        res.status(200).json(cruises);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

const getCruiseById = async (req, res) => {
    const { id } = req.params;
    try {
        const cruise = await CruiseList.findById(id);
        res.status(200).json(cruise);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

module.exports= {
    getCruiseList,
    getCruiseById
}
