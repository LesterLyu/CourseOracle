const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profSchema = new Schema(
    {
        name: {type: String},
        institute: { type: Number, default: "" },
    },
    {
        timestamps: {
            currentTime: () => Math.floor(Date.now() / 1000),
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

const prof = mongoose.model("Prof", profSchema, "profs");

module.exports = prof;
