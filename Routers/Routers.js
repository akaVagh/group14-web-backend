const express = require('express');
const cruiseleasefetch = require('../Controller/CruiseLeaseFormController/cruiseLeaseFormFetch');
const cruiseleaseregister = require('../Controller/CruiseLeaseFormController/cruiseLeaseFormRegistration');
const cruiseleaseupdate = require('../Controller/CruiseLeaseFormController/cruiseLeaseFormUpdate');
const cruiseleasedelete = require('../Controller/CruiseLeaseFormController/cruiseLeaseFormDelete');
const jobDetails = require('../Controller/CareersController/JobOpenings');
const jobLocationsController = require('../Controller/CareersController/jobLocationsController');
const jobTitleController = require('../Controller/CareersController/jobTitleController');
const JobApplicationController = require('../Controller/CareersController/JobApplicationController');
const CruiseList = require('../Controller/CruiseListController');
const getCruiseDetail = require('../Controller/CruiseDetailController');
const addNewUser = require('../Controller/UserAuth/user-registration');
const login = require('../Controller/UserAuth/user-login');

const feedback = require('../Controller/Feedback/feedback');
const router = express.Router();
const cruiseSourceController = require('../Controller/HomepageController/cruiseSourceController');
const cruiseDestinationController = require('../Controller/HomepageController/cruiseDestinationController');

//homepage
router.route('/cruiseDestination').get(cruiseDestinationController);
router.route('/cruiseSource').get(cruiseSourceController);

router.route('/jobDetails').post(jobDetails);
router.route('/cruiseleaseupdate').post(cruiseleaseupdate);
router.route('/cruiseleaseregistration').post(cruiseleaseregister);
router.route('/cruiseleasedelete').post(cruiseleasedelete);
router.route('/cruiseleasefetch').post(cruiseleasefetch);
router.route("/cruiseleaseupdate").post(cruiseleaseupdate);
router.route("/cruiseleaseregistration").post(cruiseleaseregister);
router.route("/cruiseleasedelete").post(cruiseleasedelete);
router.route("/cruiseleasefetch").post(cruiseleasefetch);
router.route('/cruiselist').get(CruiseList.getCruiseList);
router.route('/cruiselist/:id').get(CruiseList.getCruiseById);
router.route('/cruisedetail/:id').get(getCruiseDetail);
router.route("/jobLocations").get(jobLocationsController);
router.route("/jobApplication").post(JobApplicationController);
router.route("/jobTitles").get(jobTitleController);
router.route("/careersList").get(jobDetails);

//user authentication routes
router.route('/addNewUser').post(addNewUser);
router.route('/login').post(login);

router.route("/cruiseleaseupdate").post(cruiseleaseupdate);
router.route("/cruiseleaseregistration").post(cruiseleaseregister);
router.route("/cruiseleasedelete").post(cruiseleasedelete);
router.route("/cruiseleasefetch").post(cruiseleasefetch);
router.route("/feedback").post(feedback);
  
module.exports = router;