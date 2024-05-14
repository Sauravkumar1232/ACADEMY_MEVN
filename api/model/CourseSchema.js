const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamps");
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
  courseCode: { type: String, required: true },
  courseFullName: { type: String, required: true },
  courseNickName: { type: String, default: "" },
  courseDuration: { type: String, default: "" },
  courseMode: {
    type: String,
    required: false,
    default: "Semester",
    enum: [, "Yearly", "Semester"],
  },
  affilatedUniversity: { type: String, default: "" },
  createdAt: Date,
  updatedAt: Date,
});
CourseSchema.plugin(timeStamp, { index: true });
module.exports = mongoose.model("Course", CourseSchema);
