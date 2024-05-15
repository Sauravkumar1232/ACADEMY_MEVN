<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <h1>Course Edit</h1>
      <!-- <h1>{{ user }}</h1> -->

      <div class="container">
        <div class="alert bg-success my-3">
          <h4 class="text-center" style="color: red">Course Edit</h4>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <!--either get or post-->
            <div class="field my-3">
              <label for="" class="form-label">courseCode: </label>
              <input
                type="text"
                id="firstname"
                class="form-control"
                v-model="course.courseCode"
              />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">courseFullName:</label>
              <input
                type="text"
                class="form-control"
                v-model="course.courseFullName"
              />
            </div>
            <div class="field my-3">
              <!-- <label for="" class="form-label">mobno:</label>
                  <input type="text" class="form-control" v-model="mobno" /> -->
              <div class="field my-3">
                <label for="" class="form-label">courseNickName:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="course.courseNickName"
                />
              </div>
              <div class="field my-3">
                <label for="" class="form-label">courseDuration:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="course.courseDuration"
                />
              </div>
              <div class="field my-3">
                <label for="" class="form-label">courseMode:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="course.courseMode"
                />
              </div>
              <div class="field my-3">
                <label for="" class="form-label">affilatedUniversity:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="course.affilatedUniversity"
                />
              </div>
            </div>
            <input
              type="submit"
              value="Edit "
              class="btn btn-info my-3 w-100"
              @click="editCourse(course._id)"
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
import { useRoute } from "vue-router";

export default {
  name: "UserEdit",
  data() {
    return {
      course: {},
      // firstname: "",
      // Lastname: "",
      // //   mobno: "",
      // email: "",
      // password: "",
    };
  },

  created() {
    this.getCourseData();
  },
  methods: {
    async editCourse(id) {
      let data = {
        courseCode: this.course.courseCode,
        courseFullName: this.course.courseFullName,
        courseNickName: this.course.courseNickName,
        courseDuration: this.course.courseDuration,
        courseMode: this.course.courseMode,
        affilatedUniversity: this.course.affilatedUniversity,
      };

      let result = await axios({
        method: "put",
        url: "http://localhost:3000/course/edit/" + id,
        data: data,
      });
      console.log(result);
      router.push({ path: "/course/list" });
    },

    async getCourseData() {
      const route = useRoute();
      let id = route.params.id;

      console.log(id); //   let id = re;
      let result = await axios({
        method: "get",
        url: "http://localhost:3000/course/forEdit/" + id,
      });
      console.log(result, "fetched user for db");
      this.course = result.data.data;
    },
  },
};
</script>

<style scoped></style>
