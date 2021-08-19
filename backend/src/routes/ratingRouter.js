const express = require("express");
const ratingController = require("../controllers/ratingController");

const router = express.Router();

router.post("/auth", ratingController.authUser);
router.get("/profile/:address", ratingController.getUser);
router.post("/profile/update-profile", ratingController.updateProfile);

module.exports = router;
