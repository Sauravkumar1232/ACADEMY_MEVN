<template>
  <html>
    <head>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <h1>Branch List</h1>
      <input
        type="text"
        class="form-control"
        placeholder="Enter Branch"
        v-model="listQuery.name"
        @input="getBranchList()"
      />
      <table class="table">
        <caption>
          <!-- Branch List -->
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Branch Code</th>
            <th>BranchFullName</th>
            <th>BranchNickName</th>
            <!-- <th>courseDuration</th> -->
            <th>course full name</th>
            <!-- <th>affilatedUniversity</th> -->
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr v-for="(course, index) in branchList" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ course.branchCode }}</td>
            <td>{{ course.branchFullName }}</td>
            <td>{{ course.branchNickName }}</td>
            <td>{{ course.course.courseFullName }}</td>
            <!-- <td>{{ course.courseMode }}</td> -->
            <!-- <td>{{ course.affilatedUniversity }}</td> -->
            <!-- <td>{{ course.courseCodeCode }}</td> -->

            <td>
              <input
                class="edit"
                type="submit"
                value="Edit"
                @click="openEditPage(course._id)"
              />
              <input
                class="delete"
                type="submit"
                value="Delete"
                @click="deleteBranch(course._id)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
</template>

<script>
// import router from "@/router";
import router from "@/routes";
import axios from "axios";

export default {
  name: "BranchList",

  data() {
    return {
      branchList: {},
      courseFullName: "",
      listQuery: {
        name: "",
      },
    };
  },

  created() {
    this.getBranchList();
  },

  methods: {
    async openEditPage(id) {
      console.log(id);
      router.push({ path: "/branchEdit/" + id });

      // alert(id);
    },
    async getBranchList() {
      try {
        // alert("ok..");
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/branch/list",
          params: this.listQuery,
        });
        console.log(result, "message");
        this.branchList = result.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteBranch(id) {
      try {
        console.log(id);
        let result = await axios({
          method: "delete",
          url: "http://localhost:3000/course/delete/" + id,
        });
        console.log(result, " Deleted");
        this.getCourseListList();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: sans-serif;
}
caption {
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: #333;
}
.table {
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  width: 100%;

  /* display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    text-align: center; */
}
thead {
  background-color: aqua;
}
.tbody {
  vertical-align: bottom;
}
th,
td {
  border: 1px solid black;
  padding: 8px;
}
thead th {
  width: auto;
}
.delete {
  padding: 5px;
  width: auto;
  border-radius: 3px;
  border: none;
  background-color: red;
  color: white;
  font-size: medium;
  cursor: pointer;
}
.edit {
  color: white;
  margin-right: 5px;
  padding: 5px;
  width: auto;
  border-radius: 3px;
  border-style: groove;
  background-color: green;
  font-size: medium;
  cursor: pointer;
}
</style>
