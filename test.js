const joi = require("joi");

const schema = joi.object({
  name: joi.string().pattern(new RegExp("^[a-zA-Z'-\\s]+$")).min(1).max(40),
  age: joi.number().min(1).max(100).required(),
  gender: joi.string().valid("male", "female"),
});

const a = schema.validate({
  name: "hung",
  age: 90,
  gender: "male",
});
console.log(a);
