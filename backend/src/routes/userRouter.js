const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/auth", userController.authUser);
router.get("/profile/:address", userController.getUser);
router.post("/profile/update-profile", userController.updateProfile);

module.exports = router;
