exports.errorResponse = function (statusCode, message, res) {
  res.status(statusCode).json({
    status: "error",
    message: message,
  });
};
