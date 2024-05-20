const express = require("express");
const router = express.Router();
const subjectController = require("../controller/SubjectController");
router.post("/subject/create", (req, res) => {
  subjectController.createSubject(req, res);
});

router.get("/subject/list", (req, res) => {
  subjectController.getAllSubject(req, res);
});

router.delete("/subject/delete/:id", (req, res) => {
  subjectController.deleteSubject(req, res);
});
router.get("/subject/forEdit/:id", (req, res) => {
  subjectController.getSubjectForEdit(req, res);
});
router.put("/subject/edit/:id", (req, res) => {
  subjectController.subjectEdit(req, res);
});
module.exports = router;
