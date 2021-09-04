const express = require("express");
const transactionController = require("../controllers/transactionController");

const router = express.Router();
router.post("/transaction/deposit", transactionController.deposit)
router.post("/transaction/withdraw", transactionController.withdraw)


module.exports = router;
