const joi = require("joi");

exports.createSchema = joi.object({
  name: joi
    .string()
    .pattern(new RegExp("^[a-zA-Z'-\\s]+$"))
    .min(1)
    .max(40)
    .required(),
  age: joi.number().min(1).max(100).required(),
  gender: joi.string().valid("male", "female").required(),
});
exports.updateSchema = joi.object({
  name: joi.string().pattern(new RegExp("^[a-zA-Z'-\\s]+$")).min(1).max(40),
  age: joi.number().min(1).max(100),
  gender: joi.string().valid(),
});
