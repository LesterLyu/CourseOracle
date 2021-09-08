const express = require("express");
const profController = require("../controllers/profController");

const router = express.Router();

router.get('/profs/:institute', profController.getProfsByInstitute);

module.exports = router;