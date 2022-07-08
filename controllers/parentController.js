const Parent = require("./../models/parentModel");

exports.getAllParents = async function (req, res, next) {
  try {
    const parents = await Parent.find();
    res.status(200).json({
      status: "success",
      length: parents.length,
      data: {
        parents,
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

exports.createParent = async function (req, res, next) {
  try {
    const parent = await Parent.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        parent,
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

exports.updateParent = async function (req, res, next) {
  try {
    const parent = await Parent.findOneAndUpdate(req.param.id, req.body);
    res.status(200).json({
      status: "success",
      data: parent,
    });
  } catch (err) {
    return responseHandler.errorResponse(400, "error", "error");
  }
};

exports.getParent = async function (req, res, next) {
  try {
    const parent = await Parent.findById(req.params.id);
    return res.status(200).json({
      status: "success",
      data: parent,
    });
  } catch (err) {
    return ErrorHandler.errorResponse(400, "error", res);
  }
};

exports.deleteParent = async function (req, res, next) {
  try {
    await Parent.findOneAndDelete({ _id: req.params.id });
    res.status(204).json();
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "error",
      data: null,
    });
  }
};
