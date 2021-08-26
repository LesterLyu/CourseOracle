const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseRatingSchema = new Schema(
    {
        course: { type: String }, // course id
        year: { type: String, required: true },
        semester: { type: String, required: true },
        institute: { type: String },
        prof: {type: String},
        coverPage: { type: String, default: "" },
        like: {type: Number, default:0},
        unlike: {type: Number, default:0},
        user: {type: Number}, // user id
        price: {type: Number}
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
