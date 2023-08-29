const mongoose = require("mongoose");

const schema = mongoose.Schema({
  action: String,
  group: String,
  date: Date,
  registerId: String,
  registerDesc: String,
});

module.exports = mongoose.model("Proof", schema);
