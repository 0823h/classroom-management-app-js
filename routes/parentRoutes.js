const express = require("express");
const router = express.Router();
const parentController = require("./../controllers/parentController");
const commonValidator = require("./../middlewares/commonValidator");
const parentSchemaJoi = require("./../schemas/parentSchema");
router
  .route("/")
  .get(parentController.getAllParents)
  .post(
    commonValidator.commonValidator(parentSchemaJoi.createSchema),
    parentController.createParent
  );
router
  .route("/:id")
  .get(parentController.getParent)
  .patch(
    commonValidator.commonValidator(parentSchemaJoi.updateSchema),
    parentController.updateParent
  )
  .delete(parentController.deleteParent);
module.exports = router;
