const cruiseLocationModels = require('../../Models/cruiseDestination')

const cruiseDestinationController=async(req, res) => {
    try {
        const Locations = await cruiseLocationModels.find()
        res.status(200).json(Locations);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

module.exports= cruiseDestinationController;