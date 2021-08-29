const express = require("express");
const uploadController = require("../controllers/uploadController");

const router = express.Router();

router.get('/upload/:fileId', uploadController.getFile);
router.delete('/upload/:fileId', uploadController.deleteUploadedFile);
router.post('/upload/:filename', uploadController.receiveFileUpload);

module.exports = router;