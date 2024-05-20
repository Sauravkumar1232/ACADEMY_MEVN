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
      <h1>subject List</h1>
      <input
        type="text"
        class="form-control"
        placeholder="Enter subject"
        v-model="listQuery.name"
        @input="getSubjectList()"
      />
      <table class="table">
        <caption>
          <!-- subject List -->
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Subject Type</th>
            <th>Subject Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr v-for="(subject, index) in subjectList" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ subject.subjectCode }}</td>
            <td>{{ subject.subjectName }}</td>
            <td>{{ subject.subjectType }}</td>
            <td>{{ subject.subjectStatus }}</td>
            <!-- <td>{{ course.courseMode }}</td> -->
            <!-- <td>{{ course.affilatedUniversity }}</td> -->
            <!-- <td>{{ course.courseCodeCode }}</td> -->

            <td>
              <input
                class="edit"
                type="submit"
                value="Edit"
                @click="openEditPage(subject._id)"
              />
              <input
                class="delete"
                type="submit"
                value="Delete"
                @click="deleteSubject(subject._id)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- <nav aria-label="...">
        <ul class="pagination pagination-lg">
          <li
            v-for="n in nop"
            :key="n"
            class="page-item page-link"
            @click="getData(n)"
          >
            {{ n }}
          </li>
        </ul>
      </nav> -->
    </body>
  </html>
</template>

<script>
// import router from "@/router";
import router from "@/routes";
import axios from "axios";

export default {
  name: "subjectList",

  data() {
    return {
      subjectList: {},
      courseFullName: "",
      listQuery: {
        name: "",
        page: 1,
        limit: 2,
      },
      nop: 1,
    };
  },

  created() {
    this.getSubjectList();
  },

  methods: {
    async openEditPage(id) {
      console.log(id);
      router.push({ path: "/subjectEdit/" + id });

      // alert(id);
    },
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
    getData(n) {
      this.listQuery.page = n;
      this.getsubjectList();
    },
    async deleteSubject(id) {
      try {
        console.log(id);
        let result = await axios({
          method: "delete",
          url: "http://localhost:3000/subject/delete/" + id,
        });
        console.log(result, " Deleted");
        this.getsubjectList();
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
