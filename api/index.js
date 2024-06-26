const express = require("express");
const connect = require("./connection");
const cors = require("cors");
const app = express();
const courseRouter = require("./router/CourseRouter");
const branchRouter = require("./router/BranchRouter");
const subjectRouter = require("./router/SubjectRouter");
const subjectMappingRouter = require("./router/SubjectMappingRouter");
const bookRouter = require("./router/BookRouter");

app.use(express.json());
app.use(cors());

app.use(bookRouter);

app.use(courseRouter);
app.use(branchRouter);
app.use(subjectRouter);
app.use(subjectMappingRouter);

app.listen(3000, () => {
  console.log("Server started at 3000");
});

connect();
