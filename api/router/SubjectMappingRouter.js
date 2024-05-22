const express = require("express");
const router = express.Router();
const SubjectMappingController = require("../controller/SubjectMappingController");
router.post("/subjectMapping/create", (req, res) => {
  SubjectMappingController.createSubjectMapping(req, res);
});

router.get("/subjectMapping/list", (req, res) => {
  SubjectMappingController.getAllSubjectMapping(req, res);
});
router.get("/subjectMapping/get", (req, res) => {
  SubjectMappingController.getSubjectMappings(req, res);
});

router.delete("/subjectMapping/delete/:id", (req, res) => {
  SubjectMappingController.deleteSubjectMapping(req, res);
});
router.get("/SubjectMapping/forEdit/:id", (req, res) => {
  SubjectMappingController.getSubjectMappingForEdit(req, res);
});
router.put("/SubjectMapping/edit/:id", (req, res) => {
  SubjectMappingController.SubjectMappingEdit(req, res);
});
module.exports = router;
