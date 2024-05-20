const SubjectMappingSchema = require("../model/SubjectMappingSchema");

const createSubjectMapping = async (req, res) => {
  try {
    console.log(req.body);
    let subjectMapping = new SubjectMappingSchema(req.body);
    await subjectMapping.save();

    res.status(200).send({
      success: true,
      message: "subjectMapping created..",
      data: subjectMapping,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllSubjectMapping = async (req, res) => {
  try {
    let courseId = req.query.courseId;
    console.log(courseId);
    let branches = await SubjectMappingSchema.find({})
      .populate("course")
      .populate("branch")
      .populate("subject");
    console.log(branches);

    res.status(200).send({
      message: "branches by course id  fetched",
      data: branches,
    });
  } catch (err) {}
};
module.exports = { createSubjectMapping, getAllSubjectMapping };
