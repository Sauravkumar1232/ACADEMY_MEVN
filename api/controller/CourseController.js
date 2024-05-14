const Course = require("../model/CourseSchema");

const createCourse = async (req, res) => {
  try {
    console.log(req.body);
    let course = new Course(req.body);
    await course.save();

    res.status(200).send({
      success: true,
      message: "Coures created..",
      data: course,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllCourse = async (req, res) => {
  try {
    let courses = await Course.find({}, "_id, courseFullName");
    res.status(200).send({
      message: "Course fetched",
      data: courses,
    });
  } catch (err) {}
};
const deleteCourse = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id, "user id");

    let course = await Course.deleteOne({ _id: id });
    res.status(200).send({
      success: true,
      message: "Deleted Success..",
      data: course,
    });
  } catch (error) {
    res.status(500).send({
      success: true,
      message: "Error ",
      error,
    });
  }
};

const getCourseForEdit = async (req, res) => {
  try {
    let id = req.params.id;

    let course = await Course.findById({ _id: id });
    res.status(200).send({
      success: true,
      message: "User Fetched...",
      data: course,
    });
  } catch (err) {
    res.status(500).send({
      success: true,
      message: "Error ",
      err,
    });
  }
};

const courseEdit = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id, "id");
    console.log(req.body);
    const {
      courseCode,
      courseFullName,
      courseNickName,
      courseDuration,
      courseMode,
      affilatedUniversity,
    } = req.body;
    let course = await Course.findById({ _id: id });
    console.log(course, "course for update");

    (course.courseCode = courseCode),
      (course.courseFullName = courseFullName),
      (course.courseNickName = courseNickName),
      (course.courseDuration = courseDuration),
      (course.courseMode = courseMode),
      (course.affilatedUniversity = affilatedUniversity),
      await course.save();
    res.status(200).send({
      success: true,
      message: "course Updated...",
      // data: user,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Error ",
      err,
    });
  }
};

module.exports = {
  createCourse,
  deleteCourse,
  getAllCourse,
  getCourseForEdit,
  courseEdit,
};
