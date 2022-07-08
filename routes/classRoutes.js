const express = require("express");
const classController = require("./../controllers/classController");
const classSchemaJoi = require("./../schemas/classSchema");
const commonValidator = require("./../middlewares/commonValidator");
const router = express.Router();
router
  .route("/")
  .post(
    commonValidator.commonValidator(classSchemaJoi.createSchema),
    classController.createClass
  )
  .get(classController.getAllClass);
router
  .route("/:id")
  .get(classController.getClass)
  .patch(
    commonValidator.commonValidator(classSchemaJoi.updateSchema),
    classController.updateClass
  )
  .delete(classController.deleteClass);

module.exports = router;
