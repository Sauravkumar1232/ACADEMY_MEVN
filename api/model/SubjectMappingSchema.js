const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamps");
const Schema = mongoose.Schema;
const SubjectMappingSchema = new Schema({
  subject: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
  course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  branch: { type: Schema.Types.ObjectId, ref: "Branch", required: true },
  year: { type: String, required: true },
  semester: { type: String, required: true },

  createdAt: Date,
  updatedAt: Date,
});
SubjectMappingSchema.plugin(timeStamp, { index: true });
module.exports = mongoose.model("Subject_Mapping", SubjectMappingSchema);
