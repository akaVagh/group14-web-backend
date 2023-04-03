//Author: Team

const express = require('express');
const router = express.Router();

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
const updateUser = require('../Controller/UserAuth/update-user');
const feedback = require('../Controller/Feedback/feedback');
const deleteAccount = require('../Controller/UserAuth/delete-user');
const createEvent = require('../Controller/CareersController/EventCreation/add-event');
const getEvents = require('../Controller/CareersController/EventCreation/get-events');

router.route('/jobDetails').post(jobDetails);
router.route('/cruiseleaseupdate').post(cruiseleaseupdate);
router.route('/cruiseleaseregistration').post(cruiseleaseregister);
router.route('/cruiseleasedelete').post(cruiseleasedelete);
router.route('/cruiseleasefetch').post(cruiseleasefetch);
router.route('/cruiselist').get(CruiseList.getCruiseList);
router.route('/cruiselist/:id').get(CruiseList.getCruiseById);
router.route('/cruisedetail/:id').get(getCruiseDetail);
router.route('/jobLocations').get(jobLocationsController);
router.route('/jobApplication').post(JobApplicationController);
router.route('/jobTitles').get(jobTitleController);
router.route('/careersList').get(jobDetails);
router.route('/feedback').post(feedback);
router.route('/addEvent').post(createEvent);
router.route('/getEvents').get(getEvents.getAllEvents);
router.route('/getEventById/:id').get(getEvents.getEventById);

//user authentication routes
router.route('/addNewUser').post(addNewUser);
router.route('/login').post(login);
router.route('/updateUser').put(updateUser);
router.route('/deleteAccount/:userId').delete(deleteAccount);

module.exports = router;
