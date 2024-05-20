const express = require("express");
const router = express.Router();
const BranchController = require("../controller/BranchController");
router.post("/branch/create", (req, res) => {
  BranchController.createBranch(req, res);
});

router.get("/branch/list", (req, res) => {
  BranchController.getAllBranch(req, res);
});
router.get("/branch/byCourse", (req, res) => {
  BranchController.getAllBranchByCourse(req, res);
});
router.get("/branch/get", (req, res) => {
  BranchController.getBranchs(req, res);
});

router.delete("/branch/delete/:id", (req, res) => {
  BranchController.deleteBranch(req, res);
});
router.get("/branch/forEdit/:id", (req, res) => {
  BranchController.getBranchForEdit(req, res);
});
router.put("/branch/edit/:id", (req, res) => {
  BranchController.branchEdit(req, res);
});
module.exports = router;
