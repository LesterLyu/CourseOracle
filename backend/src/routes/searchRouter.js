const express = require("express");
const searchController = require("../controllers/searchController");

const router = express.Router();

// router.post("/home", searchController.postRating)
router.get("/universities", searchController.getUniversities)
router.get("/courses", searchController.getCourses)


module.exports = router;
