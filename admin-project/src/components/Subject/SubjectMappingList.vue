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
      <h1>Subject Mapping List</h1>
      <!-- <input
        type="text"
        class="form-control"
        placeholder="Enter Branch"
        v-model="listQuery.name"
        @input="getBranchList()"
      /> -->
      <table class="table">
        <caption>
          <!-- Branch List -->
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Course</th>
            <th>Branch</th>
            <th>Year</th>
            <th>Semester</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr
            v-for="(subjectMapping, index) in subjectMappingList"
            :key="index"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ subjectMapping.subject.subjectName }}</td>
            <td>{{ subjectMapping.course.courseFullName }}</td>
            <td>{{ subjectMapping.branch.branchFullName }}</td>
            <td>{{ subjectMapping.year }}</td>
            <td>{{ subjectMapping.semester }}</td>

            <td>
              <input
                class="edit"
                type="submit"
                value="Edit"
                @click="openEditPage(subjectMapping._id)"
              />
              <input
                class="delete"
                type="submit"
                value="Delete"
                @click="deletesubjectMapping(subjectMapping._id)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <nav aria-label="...">
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
      </nav>
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
      subjectMappingList: [],
      courseFullName: "",
      branchFullName: "",
      subjectName: "",
      //   listQuery: {
      //     name: "",
      //     page: 1,
      //     limit: 2,
      //   },
      //   nop: 1,
    };
  },

  created() {
    this.getSubjectMappingList();
  },

  methods: {
    async openEditPage(id) {
      console.log(id);
      router.push({ path: "/branchEdit/" + id });

      // alert(id);
    },
    async getSubjectMappingList() {
      try {
        // alert("ok..");
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/subjectMapping/list",
          params: this.listQuery,
        });
        console.log(result, "message");
        this.subjectMappingList = result.data.data;

        this.nop = Math.ceil(result.data.totalcount / this.listQuery.limit);
      } catch (err) {
        console.log(err);
      }
    },
    getData(n) {
      this.listQuery.page = n;
      this.getBranchList();
    },
    async deletesubjectMapping(id) {
      try {
        console.log(id);
        let result = await axios({
          method: "delete",
          url: "http://localhost:3000/subjectMapping/delete/" + id,
        });
        console.log(result, " Deleted");
        this.getSubjectMappingList();
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
