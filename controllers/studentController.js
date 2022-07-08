const Student = require("./../models/studentModel");
const Class = require("./../models/classModel");
const mongoose = require("mongoose");
const responseHandler = require("../utils/responseHandler");

// const { aggregate } = require("../models/parentModel");
/*
exports.getAllStudents = async function (req, res, next) {
  try {
    const students = await Student.find().populate("class");
    res.status(200).json({
      status: "success",
      length: students.length,
      data: {
        students,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "error",
      data: null,
    });
  }
};
*/
exports.createStudent = async function (req, res, next) {
  try {
    const student = await Student.create(req.body);
    return res.status(201).json({
      status: "success",
      data: {
        student,
      },
    });
  } catch (err) {
    //console.log(err);
    return responseHandler.errorReponse(
      400,
      "Please input name, age and gender",
      res
    );
  }
};

exports.updateStudent = async function (req, res, next) {
  try {
    const student = await Student.findOneAndUpdate(req.params.id, req.body);
    return res.status(200).json({
      status: "success",
      data: student,
    });
  } catch (err) {
    console.log(err);
    return responseHandler.errorReponse(400, err, res);
  }
};

exports.getStudent = async function (req, res, next) {
  try {
    const student = await Student.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $lookup: {
          from: "parents",
          localField: "parent",
          foreignField: "_id",
          as: "parent",
        },
      },
      {
        $lookup: {
          from: "classes",
          localField: "class",
          foreignField: "_id",
          as: "class",
        },
      },
    ]);
    //const student = await Student.findById(req.params.id);
    return res.status(200).json({
      status: "success",
      data: student,
    });
  } catch (err) {
    console.log(err);
    return responseHandler.errorReponse(400, "error", res);
  }
};

exports.deleteStudent = async function (req, res, next) {
  try {
    await Student.findByIdAndDelete(req.params.id);
    return res.status(204).json({});
  } catch (err) {
    console.log(err);
    return responseHandler.errorReponse(400, "error", res);
  }
};

exports.getAllStudents = async function (req, res, next) {
  try {
    const students = await Student.aggregate([
      {
        $lookup: {
          from: "classes",
          localField: "class",
          foreignField: "_id",
          as: "class",
        },
      },
    ]);
    return res.status(200).json({
      status: "success",
      length: students.length,
      data: {
        students,
      },
    });
  } catch (err) {
    console.log(err);
    return responseHandler.errorResponse(400, "error", res);
  }
};

exports.validateName = function (req, res, next) {
  //console.log(typeof req.body.name);
  let nameRegexCheck = /^[a-zA-Z'\-s]+$/.test(req.body.name);
  if (!nameRegexCheck) {
    return responseHandler.errorReponse(400, "Please input a valid name", res);
  }
  return next();
};

exports.validateAge = function (req, res, next) {
  let ageRegexCheck = /^[1-9]+$/.test(req.body.age);
  if (ageRegexCheck && req.body.age < 100 && req.body.age > 0) {
    return next();
  }
  return responseHandler.errorReponse(400, "Please input a valid age", res);
};
