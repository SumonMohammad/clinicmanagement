const express = require("express");
const router = express.Router();

const {newPatient, getPatients, getSinglePatient} = require("../controllers/apointmentControllers");

router.route("/patients").get(getPatients);
router.route("/singlepatient/:id").get(getSinglePatient);
router.route("/patient/new").post(newPatient);

module.exports = router;