const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: String,
  age: Date,
});

module.exports = mongoose.model("User", schema);
