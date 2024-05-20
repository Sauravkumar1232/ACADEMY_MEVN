const SubjectSchema = require("../model/SubjectSchema");

const createSubject = async (req, res) => {
  try {
    console.log(req.body);
    let subject = new SubjectSchema(req.body);
    await subject.save();

    res.status(200).send({
      success: true,
      message: "Subject created..",
      data: subject,
    });
  } catch (err) {
    console.log(err);
  }
};

const subjectEdit = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id, "id");
    console.log(req.body);
    const { branchCode, branchFullName, branchNickName, course } = req.body;
    let branch = await Subject.findById({ _id: id });
    console.log(Subject, "branch for update");

    (branch.branchCode = branchCode),
      (branch.branchFullName = branchFullName),
      (branch.branchNickName = branchNickName),
      (branch.course = course);
    await branch.save();
    res.status(200).send({
      success: true,
      message: "branch Updated...",
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

const getAllSubject = async (req, res) => {
  try {
    // let courses = await Course.find({});
    // console.log(req.query.name, "req.query.name");
    // let name = req.query.name;

    // let courses = await Course.find({
    //   courseFullName: { $regex: new RegExp(req.query.name.toLowerCase(), "i") },
    // });
    let subjects = await SubjectSchema.find({});

    res.status(200).send({
      message: "subject fetched",
      data: subjects,
    });
  } catch (err) {}
};
module.exports = {
  createSubject,
  getAllSubject,
};
