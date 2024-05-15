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
          <h4 class="text-center" style="color: red">Branch Create</h4>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <!--either get or post-->
            <div class="field my-3">
              <label for="" class="form-label">branchCode Code:</label>
              <input type="text" class="form-control" v-model="branchCode" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Branch Full Name:</label>
              <input
                type="text"
                class="form-control"
                v-model="branchFullName"
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
                  v-model="branchNickName"
                />
              </div>
              <div class="field my-3">
                <label for="" class="form-label">Course :</label>
                <select class="form-control" v-model="course">
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
              value="Branch Create"
              class="btn btn-info my-3 w-100"
              @click="branchCreate()"
            />

            <input
              type="submit"
              value="All Branch"
              class="btn btn-info my-3 w-100"
              @click="allBranch()"
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
  name: "BranchCreate",
  data() {
    return {
      branchCode: "",
      branchFullName: "",
      branchNickName: "",
      // brachDuration: "",
      courseList: [],
      course: "",
    };
  },

  created() {
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
    async branchCreate() {
      try {
        // alert("dfghjk");
        let data = {
          branchCode: this.branchCode,
          branchFullName: this.branchFullName,
          branchNickName: this.branchNickName,
          brachDuration: this.brachDuration,
          course: this.course,
        };
        let result = await axios({
          method: "post",
          url: "http://localhost:3000/branch/create",
          data: data,
        });
        console.log(result, "message");
        if (result.data.success) {
          // router.push({ path: "./userList" });
          router.push({ name: "BranchList" });
        }
      } catch (err) {
        console.log(err);
      }
    },
    allBranch() {
      router.push({ name: "BranchList" });
    },
  },
};
</script>
