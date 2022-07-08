const mongoose = require("mongoose");
const Class = require("./classModel");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty"],
  },
  age: {
    type: Number,
    required: [true, "Age cannot be empty"],
  },
  class: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
  parent: [{ type: mongoose.Schema.Types.ObjectId, ref: "Parent" }],
  gender: {
    type: String,
    enum: ["male", "female"],
    required: [true, "Gender cannot be empty"],
  },
});

// studentSchema.pre("findOneAndUpdate", function (next) {
//   if (
//     this._update.gender !== "male" &&
//     this._update.gender !== "female" &&
//     this._update.gender !== undefined
//   ) {
//     console.log(this._update.gender);
//     throw "Gender must be male or female.";
//   }
//   if (this._update.name !== undefined) {
//     let nameRegexCheck = /^[a-zA-Z'\-s]+$/.test(this.update_.name);
//     throw "Please give a correct name";
//   }

//   if (this._update.age !== undefined) {
//     let classRegexCheck = /^[1-9]+$/;
//     if (this._update.age > 100 || this._update.age < 0) {
//       throw "Please give a correct age";
//     }
//   }

//   return next();
// });

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
