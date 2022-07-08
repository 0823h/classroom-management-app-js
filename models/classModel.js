const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  name: String,
  numOfStudent: Number,
});
const Class = mongoose.model("Class", classSchema);
module.exports = Class;
