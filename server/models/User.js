// backend/models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" }, // Add role field with default value 'user'
});

const User = mongoose.model("User", userSchema);

module.exports = User;
