/* Author: Krina Mistry - B00927702 kr981143@dal.ca  */

const CruiseDetail = require('../Models/cruise_details')

const getCruiseDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const cruiseDetail = await CruiseDetail.findOne({cruiseid: id});
        res.status(200).json(cruiseDetail);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

module.exports= getCruiseDetail;
