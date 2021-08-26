const express = require("express");
const materialsController = require("../controllers/materialsController");

const router = express.Router();

router.get('/materials', materialsController.getMaterials)
router.post('/material/purchase', materialsController.purchaseMaterial)
router.post('/material/rate', materialsController.rateMaterial)
router.post('/material/tip', materialsController.tipMaterial)

module.exports = router;