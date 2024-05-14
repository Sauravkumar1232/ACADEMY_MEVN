const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamps");
const Schema = mongoose.Schema;
const BranchSchema = new Schema({
  branchCode: { type: String, required: true },
  branchFullName: { type: String, required: true },
  branchNickName: { type: String, default: "" },
  course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  createdAt: Date,
  updatedAt: Date,
});
BranchSchema.plugin(timeStamp, { index: true });
module.exports = mongoose.model("Branch", BranchSchema);
