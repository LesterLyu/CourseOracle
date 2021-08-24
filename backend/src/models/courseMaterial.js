const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseMaterialSchema = new Schema(
    {
        course: { type: String }, // course name
        year: { type: String, required: true },
        semester: { type: String, required: true },
        description: { type: String, default: "" },
        institute: { type: String },
        profs: {type: Array}, // prof ids
        coverPage: { type: String, default: "https://source.unsplash.com/random" },
        type: {type: String},
        like: {type: Number, default:0},
        unlike: {type: Number, default:0},
        user: {type: mongoose.Schema.Types.ObjectId}, // user id
        price: {type: Number},
        file: {type: mongoose.Schema.Types.ObjectId}, //not ready
    },
    {
        timestamps: {
            currentTime: () => Math.floor(Date.now() / 1000),
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

const courseMaterial = mongoose.model("CourseMaterial", courseMaterialSchema, "courseMaterials");

module.exports = courseMaterial;
