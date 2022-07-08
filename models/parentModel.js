const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
});
const Parent = mongoose.model("Parent", parentSchema);
module.exports = Parent;
