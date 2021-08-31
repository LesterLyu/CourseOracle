const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
    {
        code: { type: String },
        name: { type: String, required: true },
        description: { type: String, default: "" },
        institute: {type: String},
        // institute: {type: mongoose.Schema.Types.ObjectId},
        profs: {type: Array} // prof id
    },
    {
        timestamps: {
            currentTime: () => Math.floor(Date.now() / 1000),
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

const course = mongoose.model("Course", courseSchema, "courses");

module.exports = course;
