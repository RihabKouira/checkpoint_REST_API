const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  fname: { type: String, required: true },
  lname: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: Number,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
