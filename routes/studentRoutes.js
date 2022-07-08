const express = require("express");
const router = express.Router();
const studentController = require("./../controllers/studentController");
const commonValidator = require("./../middlewares/commonValidator");
const studentSchemaJoi = require("./../schemas/studentSchema");
router
  .route("/")
  .get(studentController.getAllStudents)
  .post(
    commonValidator.commonValidator(studentSchemaJoi.createSchema),
    studentController.createStudent
  );

router
  .route("/:id")
  .patch(
    commonValidator.commonValidator(studentSchemaJoi.updateSchema),
    studentController.updateStudent
  )
  .get(studentController.getStudent)
  .delete(studentController.deleteStudent);

module.exports = router;
