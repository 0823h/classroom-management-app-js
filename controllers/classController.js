const Class = require("./../models/classModel");
exports.createClass = async function (req, res, next) {
  try {
    const newClass = await Class.create(req.body);
    res.status(200).json({
      status: "success",
      data: newClass,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "error",
      data: null,
    });
  }
};

exports.getAllClass = async function (req, res, next) {
  try {
    const classes = await Class.find();
    res.status(200).json({
      status: "success",
      length: classes.length,
      data: {
        classes,
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

exports.updateClass = async function (req, res, next) {
  try {
    const newClass = await Class.findOneAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: newClass,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "error",
      data: null,
    });
  }
};

exports.getClass = async function (req, res, next) {
  try {
    const newClass = await Class.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: newClass,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      data: null,
    });
  }
};

exports.deleteClass = async function (req, res, next) {
  try {
    await Class.findOneAndDelete({ _id: req.params.id });
    res.status(204).json();
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "error",
      data: null,
    });
  }
};
