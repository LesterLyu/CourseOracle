const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
    {
        code: { type: String },
        name: { type: String, required: true },
        description: { type: String, default: "" },
        institute: { type: String },
        profs: {type: Array}
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
