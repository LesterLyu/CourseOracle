const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId},
        type: {type: String},
        amount: {type: Number},
        hash: {type: String},
        rate: {type: Number, default: 1} // use cfx to buy our token
    },
    {
        timestamps: {
            currentTime: () => Math.floor(Date.now() / 1000),
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

const transaction = mongoose.model("Transaction", transactionSchema, "transactions");

module.exports = transaction;
