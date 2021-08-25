const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {type: String, required: true},
    last_name: {type: String},
    email: {type: String, required: true, unique: true},
    // do we need description?
    description: {type: String, default: ""},
    profile_picture: {type: String},
    salt: String,
    hash: String,
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
