const express = require('express');
const cruiseleasefetch = require('../Controller/CruiseLeaseFormController/cruiseLeaseFormFetch');
const cruiseleaseregister = require('../Controller/CruiseLeaseFormController/cruiseLeaseFormRegistration');
const cruiseleaseupdate = require('../Controller/CruiseLeaseFormController/cruiseLeaseFormUpdate');
const cruiseleasedelete = require('../Controller/CruiseLeaseFormController/cruiseLeaseFormDelete');
const jobDetails = require('../Controller/jobApplicationFormController');
const CruiseList = require('../Controller/CruiseListController');
const getCruiseDetail = require('../Controller/CruiseDetailController');
const router = express.Router();

  
router.route("/jobDetails").post(jobDetails);

router.route("/cruiseleaseupdate").post(cruiseleaseupdate);
router.route("/cruiseleaseregistration").post(cruiseleaseregister);
router.route("/cruiseleasedelete").post(cruiseleasedelete);
router.route("/cruiseleasefetch").post(cruiseleasefetch);
router.route('/cruiselist').get(CruiseList.getCruiseList);
router.route('/cruiselist/:id').get(CruiseList.getCruiseById);
router.route('/cruisedetail/:id').get(getCruiseDetail);

module.exports = router;