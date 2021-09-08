const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseRatingSchema = new Schema(
    {
        institute: { type: mongoose.Schema.Types.ObjectId },
        course: { type: String }, // course id
        prof: { type: mongoose.Schema.Types.ObjectId },
        score: { type: Number },
        comment: { type: String },
        year: { type: Number },
        semester: { type: String },
        like: { type: Number, default:0 },
        unlike: { type: Number, default:0 },
        user: { type: String }, // user email
        chainTransactionID: { type: String, default: '' },
    },
    {
        timestamps: {
            currentTime: () => Math.floor(Date.now() / 1000),
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

const courseRating = mongoose.model("CourseRating", courseRatingSchema, "courseRatings");

module.exports = courseRating;
