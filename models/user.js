const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  NSE: {
    type: String,
    required: true,
  },
  anxiety: {
    type: String,
    required: true,
  },
  depresion: {
    type: String,
    required: true,
  },
  suicide: {
    type: String,
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
