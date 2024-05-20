// const { Query } = require("mongoose");
const Q = require("q");
const Branch = require("../model/BranchSchema");

const createBranch = async (req, res) => {
  try {
    console.log(req.body);
    let branch = new Branch(req.body);
    await branch.save();

    res.status(200).send({
      success: true,
      message: "branch created..",
      data: branch,
    });
  } catch (err) {
    console.log(err);
  }
};

const branchEdit = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id, "id");
    console.log(req.body);
    const { branchCode, branchFullName, branchNickName, course } = req.body;
    let branch = await Branch.findById({ _id: id });
    console.log(branch, "branch for update");

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

const getBranchForEdit = async (req, res) => {
  try {
    let id = req.params.id;

    let branch = await Branch.findById({ _id: id }).populate("course");
    res.status(200).send({
      success: true,
      message: "User Fetched...",
      data: branch,
    });
  } catch (err) {
    res.status(500).send({
      success: true,
      message: "Error ",
      err,
    });
  }
};

const getAllBranchByCourse = async (req, res) => {
  try {
    let courseId = req.query.courseId;
    console.log(courseId);
    let branches = await Branch.find({ course: courseId });
    console.log(branches);

    res.status(200).send({
      message: "branches by course id  fetched",
      data: branches,
    });
  } catch (err) {}
};

const getAllBranch = async (req, res) => {
  try {
    // console.log(req.query.name, "req.query.name");
    let name = req.query.name;
    let offSet = req.query.page ? (req.query.page - 1) * req.query.limit : 0;
    let limit = parseInt(req.query.limit ? req.query.limit : 2);
    console.log("offSet", offSet, "limit", limit);
    Q.all([
      Branch.countDocuments().exec(),
      Branch.find({
        branchFullName: { $regex: new RegExp(name.toLowerCase(), "i") },
      })
        .populate("course")
        .skip(parseInt(offSet))
        .limit(parseInt(limit))
        .exec(),
    ]).then(function (branches) {
      res.status(200).send({
        message: "Branch fetched",
        data: branches[1],
        totalcount: branches[0],
      });
    });
    // let branches = await Branch.find({}).populate("course");
    // let branches = await Branch.find({
    //   branchFullName: { $regex: new RegExp(name.toLowerCase(), "i") },
    // }).populate("course");
    // console.log(branches, "branches");
  } catch (err) {
    console.log(err.message, "msg");
  }
};
const deleteBranch = async (req, res) => {
  try {
    await Branch.deleteOne({ _id: req.params.id });
    res.status(200).send({
      message: "Branch deleted",
      data: "",
    });
  } catch (err) {
    res.status(500).send({
      success: true,
      message: "Error ",
      err,
    });
  }
};
module.exports = {
  createBranch,
  deleteBranch,
  getAllBranch,
  // getbranchForEdit,
  getBranchForEdit,
  branchEdit,
  // branchEdit,
  getAllBranchByCourse,
};
