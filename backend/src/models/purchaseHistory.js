const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchaseHistorySchema = new Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId},
        material: {type: mongoose.Schema.Types.ObjectId},
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

const purchaseHistory = mongoose.model("PurchaseHistory", purchaseHistorySchema, "purchaseHistorys");

module.exports = purchaseHistory;
