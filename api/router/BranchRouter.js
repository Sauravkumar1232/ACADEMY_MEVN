const express = require("express");
const router = express.Router();
const BranchController = require("../controller/BranchController");
router.post("/branch/create", (req, res) => {
  BranchController.createBranch(req, res);
});

router.get("/branch/list", (req, res) => {
  BranchController.getAllBranch(req, res);
});
module.exports = router;
