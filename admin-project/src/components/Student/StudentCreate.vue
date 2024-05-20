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
          <h4 class="text-center" style="color: red">Course Create</h4>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <!--either get or post-->
            <div class="field my-3">
              <label for="" class="form-label">Course Code:</label>
              <input type="text" class="form-control" v-model="courseCode" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Course Full Name:</label>
              <input
                type="text"
                class="form-control"
                v-model="courseFullName"
              />
            </div>
            <div class="field my-3">
              <!-- <label for="" class="form-label">mobno:</label>
                  <input type="text" class="form-control" v-model="mobno" /> -->
              <div class="field my-3">
                <label for="" class="form-label">Course NickName:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="courseNickName"
                />
              </div>
              <div class="field my-3">
                <label for="" class="form-label">Course Duration:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="courseDuration"
                />
              </div>
              <div class="field my-3">
                <label for="" class="form-label">courseMode:</label>
                <select class="form-control" v-model="courseMode">
                  <option value="Sem">Semester</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
              <div class="field my-3">
                <label for="" class="form-label">affilatedUniversity:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="affilatedUniversity"
                />
              </div>
            </div>
            <input
              type="submit"
              value="Course Create"
              class="btn btn-info my-3 w-100"
              @click="courseCreate()"
            />

            <input
              type="submit"
              value="All Course"
              class="btn btn-info my-3 w-100"
              @click="allCourse()"
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
      courseCode: "",
      courseFullName: "",
      courseNickName: "",
      courseDuration: "",
      courseMode: "",
      affilatedUniversity: "",
    };
  },
  methods: {
    async courseCreate() {
      try {
        let data = {
          courseCode: this.courseCode,
          courseFullName: this.courseFullName,
          courseNickName: this.courseNickName,
          courseDuration: this.courseDuration,
          courseMode: this.courseMode,
          affilatedUniversity: this.affilatedUniversity,
        };
        let result = await axios({
          method: "post",
          url: "http://localhost:3000/course/create",
          data: data,
        });
        console.log(result, "message");
        if (result.data.success) {
          // router.push({ path: "./userList" });
          router.push({ name: "CourseList" });
        }
      } catch (err) {
        console.log(err);
      }
    },
    async allCourse() {
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
