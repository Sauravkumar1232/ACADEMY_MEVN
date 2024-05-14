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

const getAllBranch = async (req, res) => {
  try {
    let branches = await Branch.find({}).populate("course") ;
    // branches.forEach(branch=>{
    //   branch.course
    // })
    res.status(200).send({
      message: "Branch fetched",
      data: branches,
    });
  } catch (err) {}
};
module.exports = {
  createBranch,
  // deleteCourse,
  getAllBranch,
  // getCourseForEdit,
  // courseEdit,
};
