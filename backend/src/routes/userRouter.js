const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/register", userController.register);
router.get("/profile/:address", userController.getUser);
router.post("/profile/update-profile", userController.updateProfile);

module.exports = router;
