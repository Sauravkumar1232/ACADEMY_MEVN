const express = require("express");
const connect = require("./connection");
const cors = require("cors");
const app = express();
const courseRouter = require("./router/CourseRouter");
const branchRouter = require("./router/BranchRouter");

app.use(express.json());
app.use(cors());

app.use(courseRouter);
app.use(branchRouter);

app.listen(3000, () => {
  console.log("Server started at 3000");
});

connect();
