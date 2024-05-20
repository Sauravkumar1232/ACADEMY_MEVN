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
          <h4 class="text-center" style="color: red">Subject Create</h4>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <!--either get or post-->
            <div class="field my-3">
              <label for="" class="form-label">Subject Code:</label>
              <input type="text" class="form-control" v-model="subjectCode" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Subject Name:</label>
              <input type="text" class="form-control" v-model="subjectName" />
            </div>

            <div class="field my-3">
              <label for="" class="form-label">Subject Type:</label>
              <select class="form-control" v-model="subjectType">
                <option value="Regular">Regular</option>
                <option value="Elective">Elective</option>
              </select>
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Subject Status:</label>
              <select class="form-control" v-model="subjectStatus">
                <option value="Active">Active</option>
                <option value="Disable">Disable</option>
              </select>
            </div>

            <input
              type="submit"
              value="Course Create"
              class="btn btn-info my-3 w-100"
              @click="subjectCreate()"
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
      subjectCode: "",
      subjectName: "",
      subjectType: "",
      subjectStatus: "",
    };
  },
  methods: {
    async subjectCreate() {
      try {
        let data = {
          subjectCode: this.subjectCode,
          subjectName: this.subjectName,
          subjectType: this.subjectType,
          subjectStatus: this.subjectStatus,
        };
        let result = await axios({
          method: "post",
          url: "http://localhost:3000/subject/create",
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
    async allSubject() {
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
