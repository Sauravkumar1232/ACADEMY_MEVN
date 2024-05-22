const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamps");

const Schema = mongoose.Schema;
const BookSchema = new Schema({
  bookName: { type: String, required: true },
  authorName: { type: String, required: true },
  price: { type: Number, default: 0 },
  bookImage: { type: String },
  createdAt: Date,
  updatedAt: Date,
});

BookSchema.plugin(timeStamp, { index: true });
module.exports = mongoose.model("Book", BookSchema);
