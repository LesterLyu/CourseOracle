const express = require("express");
const ratingController = require("../controllers/ratingController");

const router = express.Router();

router.post("/rating", ratingController.postRating)
router.get("/rating", ratingController.getRating)
router.post("/rating/like", ratingController.likeRating)
router.post("/rating/unlike", ratingController.unlikeRating)
router.post("/rating/like/cancel", ratingController.cancelLikeRating)
router.post("/rating/unlike/cancel", ratingController.cancelUnlikeRating)

module.exports = router;
