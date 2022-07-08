const joi = require("joi");
const nameRegex = /^[a-z ,.'-]+$/i;

exports.createSchema = joi.object({
  name: joi.string().pattern(new RegExp(nameRegex)).min(1).max(40).required(),
  numOfStudent: joi.number().min(1).max(100).required(),
});

exports.updateSchema = joi.object({
  name: joi.string().pattern(new RegExp(nameRegex)).min(1).max(40),
  numOfStudent: joi.number().min(1).max(100),
});
