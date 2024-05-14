const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/RD-ADMIN");
    console.log("db connected");
  } catch (err) {
    console.log("db not connected", err);
  }
};

module.exports = connect;
