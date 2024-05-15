<template>
  <html>
    <head> </head>
    <body>
      <!-- <h1>User List</h1>  -->
      <input
        type="text"
        class="form-control"
        placeholder="Enter Course"
        v-model="listQuery.name"
        @input="getCourseList()"
      />

      <table class="table">
        <caption>
          Course List
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Course Code</th>
            <th>courseFullName</th>
            <th>courseNickName</th>
            <th>courseDuration</th>
            <th>courseMode</th>
            <th>affilatedUniversity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr v-for="(course, index) in courseList" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ course.courseCode }}</td>
            <td>{{ course.courseFullName }}</td>
            <td>{{ course.courseNickName }}</td>
            <td>{{ course.courseDuration }}</td>
            <td>{{ course.courseMode }}</td>
            <td>{{ course.affilatedUniversity }}</td>
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
                @click="deleteCourse(course._id)"
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
  name: "CourseList",

  data() {
    return {
      courseList: {},
      listQuery: {
        name: "",
      },
    };
  },

  created() {
    this.getCourseList();
  },

  methods: {
    async openEditPage(id) {
      console.log(id);
      router.push({ path: "/courseEdit/" + id });

      // alert(id);
    },
    async getCourseList() {
      try {
        // alert("ok..");
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/course/list",
          params: this.listQuery,
        });
        console.log(result, "message");
        this.courseList = result.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteCourse(id) {
      try {
        console.log(id);
        let result = await axios({
          method: "delete",
          url: "http://localhost:3000/course/delete/" + id,
        });
        console.log(result, " Deleted");
        this.getCourseList();
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
