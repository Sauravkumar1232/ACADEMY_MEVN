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
          <h4 class="text-center" style="color: red">Branch Edit</h4>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <!--either get or post-->
            <div class="field my-3">
              <label for="" class="form-label">branchCode Code:</label>
              <input
                type="text"
                class="form-control"
                v-model="branch.branchCode"
              />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Branch Full Name:</label>
              <input
                type="text"
                class="form-control"
                v-model="branch.branchFullName"
              />
            </div>
            <div class="field my-3">
              <!-- <label for="" class="form-label">mobno:</label>
                    <input type="text" class="form-control" v-model="mobno" /> -->
              <div class="field my-3">
                <label for="" class="form-label">Branch NickName:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="branch.branchNickName"
                />
              </div>
              <div class="field my-3">
                <label for="" class="form-label">course :</label>
                <!-- <input type="text" v-model="branch.course.courseFullName" /> -->
                <select class="form-control" v-model="courseSelected">
                  <option disabled value="">{{ courseFullName }}</option>
                  <!-- <option>{{ courseFullName }}</option> -->
                  <option
                    v-for="(course, index) in courseList"
                    :key="index"
                    :value="course._id"
                  >
                    {{ course.courseFullName }}
                  </option>
                </select>
              </div>
            </div>
            <input
              type="submit"
              value="Branch Edit"
              class="btn btn-info my-3 w-100"
              @click="branchEdit(branch._id)"
            />

            <input
              type="submit"
              value="All Branch"
              class="btn btn-info my-3 w-100"
              @click="getAllbranch()"
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
      branch: {},
      courseList: [],
      courseSelected: "",
      courseFullName: "",
    };
  },

  created() {
    this.getbranchData();
    this.getCourseList();
  },
  methods: {
    async getCourseList() {
      try {
        // alert("ok..");
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/course/list",
        });
        console.log(result, "message");
        this.courseList = result.data.data;
      } catch (err) {
        console.log(err);
      }
    },

    async branchEdit(id) {
      let data = {
        branchCode: this.branch.branchCode,
        branchFullName: this.branch.branchFullName,
        branchNickName: this.branch.branchNickName,
        course: this.courseSelected,
      };

      let result = await axios({
        method: "put",
        url: "http://localhost:3000/branch/edit/" + id,
        data: data,
      });
      console.log(result);
      if (result.data.success) {
        router.push({ path: "/branch/list" });
      }
      this.getAllbranch();
    },

    async getAllbranch() {
      let result = await axios({
        method: "get",
        url: "http://localhost:3000/branch/list/",
        // data: data,
      });

      console.log(result);
    },

    async getbranchData() {
      const route = useRoute();
      let id = route.params.id;

      console.log(id); //   let id = re;
      let result = await axios({
        method: "get",
        url: "http://localhost:3000/branch/forEdit/" + id,
      });
      console.log(result, "fetched user for db");
      this.branch = result.data.data;
      this.courseFullName = this.branch.course.courseFullName;
      console.log(this.branch.course.courseFullName, this.courseFullName);
    },
  },
};
</script>

<style scoped></style>
