<template>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Bootstrap demo</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <div class="container">
        <div class="alert bg-success my-3">
          <h4 class="text-center" style="color: red">Subject Mapping</h4>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <!--either get or post-->
            <div class="field my-3">
              <label for="" class="form-label">Subject :</label>
              <select class="form-control" v-model="subject">
                <option
                  v-for="(subject, index) in subjectList"
                  :key="index"
                  :value="subject._id"
                >
                  {{ subject.subjectName }}
                </option>
              </select>
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Course :</label>
              <select
                class="form-control"
                v-model="course"
                @change="getBranchListByCourse(course)"
              >
                <option
                  v-for="(course, index) in courseList"
                  :key="index"
                  :value="course._id"
                >
                  {{ course.courseFullName }}
                </option>
              </select>
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Branch :</label>
              <select class="form-control" v-model="branch">
                <option
                  v-for="(branch, index) in branchList"
                  :key="index"
                  :value="branch._id"
                >
                  {{ branch.branchFullName }}
                </option>
              </select>
            </div>

            <div class="field my-3">
              <label for="" class="form-label">Year:</label>
              <input type="text" class="form-control" v-model="year" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Semester:</label>
              <input type="text" class="form-control" v-model="semester" />
            </div>

            <input
              type="submit"
              value="Subject MappingCreate Create"
              class="btn btn-info my-3 w-100"
              @click="subjectMappingCreate()"
            />

            <input
              type="submit"
              value="All Course"
              class="btn btn-info my-3 w-100"
              @click="allSubject()"
            />
          </div>
          <div class="col"></div>
        </div>
      </div>
    </body>
  </html>
</template>

<script>
import router from "@/routes";
import axios from "axios";

// import axios from "axios";
// import router from "@/router";

export default {
  name: "SignUp",
  data() {
    return {
      subject: "",
      course: "",
      branch: "",
      year: "",
      semester: "",
      courseList: [],
      branchList: [],
      subjectList: [],
    };
  },
  created() {
    this.getCourseList();
    // this.getBranchListByCourse();
    this.getSubjectList();
  },
  methods: {
    async getSubjectList() {
      try {
        // alert("ok..");
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/subject/list",
          params: this.listQuery,
        });
        console.log(result, "message");
        this.subjectList = result.data.data;
        // this.nop = Math.ceil(result.data.totalcount / this.listQuery.limit);
      } catch (err) {
        console.log(err);
      }
    },
    async getBranchListByCourse(courseId) {
      try {
        // alert("ok..");
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/branch/byCourse/",
          params: {
            courseId: courseId,
          },
        });
        console.log(courseId, "courseId");
        this.branchList = result.data.data;
        // this.nop = Math.ceil(result.data.totalcount / this.listQuery.limit);
      } catch (err) {
        console.log(err);
      }
    },
    async getCourseList() {
      try {
        // alert("ok..");
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/course/All",
        });
        console.log(result, "message");
        this.courseList = result.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    async subjectMappingCreate() {
      try {
        let data = {
          subject: this.subject,
          course: this.course,
          branch: this.branch,
          year: this.year,
          semester: this.semester,
        };
        console.log(data);
        let result = await axios({
          method: "post",
          url: "http://localhost:3000/subjectMapping/create",
          data: data,
        });
        console.log(result, "message");
        if (result.data.success) {
          // router.push({ path: "./userList" });
          router.push({ name: "SubjectList" });
        }
      } catch (err) {
        console.log(err);
      }
    },
    async allSubjectMapping() {
      let result = await axios({
        method: "get",
        url: "http://localhost:3000/course/list",
      });
      router.push({ path: "CourseList" });
      console.log(result, "Course");
    },
  },
};
</script>
