const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamps");
const Schema = mongoose.Schema;
const CourseSubjectMappingSchema = new Schema({
  session: { type: String, required: true },
  subject: { type: Schema.Types.ObjectId, ref: "Subhect", required: true },
  course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  branch: { type: Schema.Types.ObjectId, ref: "Branch", required: true },
  year: { type: Number, default: "1" },
  semester: { type: Number, default: "1" },
  createdAt: Date,
  updatedAt: Date,
});
CourseSubjectMappingSchema.plugin(timeStamp, { index: true });
module.exports = mongoose.model(
  "CourseSubjectMapping",
  CourseSubjectMappingSchema
);
