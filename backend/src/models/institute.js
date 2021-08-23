const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instituteSchema = new Schema(
    {
        name: {type: String},
        country: {type: String},
        website: {type: String},
        semester: {type: Array, default:['Fall', 'Winter', 'Summer']}
    },
    {
        timestamps: {
            currentTime: () => Math.floor(Date.now() / 1000),
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

const institute= mongoose.model("Institute", instituteSchema, "institutes");

module.exports = institute;
