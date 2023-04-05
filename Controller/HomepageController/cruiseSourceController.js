const cruiseSourcesModels = require('../../Models/cruiseSource')

const cruiseSourceController=async(req, res) => {
    try {
        const Locations = await cruiseSourcesModels.find()
        console.log("sources"+Locations)
        res.status(200).json(Locations);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

module.exports= cruiseSourceController;