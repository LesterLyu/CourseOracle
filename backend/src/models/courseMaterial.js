const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseMaterialSchema = new Schema(
    {
        course: { type: String }, // course id
        year: { type: String, required: true },
        semester: { type: String, required: true },
        description: { type: String, default: "" },
        institute: { type: String },
        profs: {type: Array}, // prof ids
        coverPage: { type: String, default: "" },
        type: {type: String},
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

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
