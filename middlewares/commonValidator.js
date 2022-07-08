const responseHandler = require("./../utils/responseHandler");
exports.commonValidator = function (schema) {
  return function (req, res, next) {
    const { value, error } = schema.validate(req.body);
    if (!error) {
      return next();
    }
    console.log(schema.validate(req.body));
    return responseHandler.errorResponse(400, error, res);
  };
};
