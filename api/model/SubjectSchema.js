const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamps");
const Schema = mongoose.Schema;
const SubjectSchema = new Schema({
  subjectCode: { type: String, required: true },
  subjectName: { type: String, required: true },
  subjectType: {
    type: String,
    default: "Regular",
    enum: ["Regular", "Elective"],
  },
  subjectStatus: {
    type: String,
    default: "Active",
    enum: ["Active", "Disable"],
  },
  createdAt: Date,
  updatedAt: Date,
});
SubjectSchema.plugin(timeStamp, { index: true });
module.exports = mongoose.model("Subject", SubjectSchema);
