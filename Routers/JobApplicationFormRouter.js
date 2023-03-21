const express = require('express');
const jobDetails = require('../Controller/jobApplicationFormController');
const router = express.Router();

  
router.route("/jobDetails").post(jobDetails);
  
module.exports = router;