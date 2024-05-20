const express = require("express");
const router = express.Router();
const CourseController = require("../controller/CourseController");
router.post("/course/create", (req, res) => {
  CourseController.createCourse(req, res);
});

router.get("/course/list", (req, res) => {
  CourseController.getAllCourse(req, res);
});

router.get("/course/All", (req, res) => {
  CourseController.getAll(req, res);
});

router.delete("/course/delete/:id", (req, res) => {
  CourseController.deleteCourse(req, res);
});
router.get("/course/forEdit/:id", (req, res) => {
  CourseController.getCourseForEdit(req, res);
});
router.put("/course/edit/:id", (req, res) => {
  CourseController.courseEdit(req, res);
});
module.exports = router;
