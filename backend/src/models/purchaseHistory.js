const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchaseHistorySchema = new Schema(
    {
        user: {type: Number},
        material: {type: Number},
        price: {type: Number},
        tip: {type: Number},
        rate: {type: Number},
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
