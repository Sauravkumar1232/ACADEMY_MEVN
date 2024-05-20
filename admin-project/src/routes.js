import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./views/Dashboard.vue";
// import Vue from "vue";
// import VueRouter from "vue-router";
// import dashboard from "../views/dashboard";
const routes = [
  {
    path: "",
    component: Dashboard,
    children: [
      {
        path: "/branch/create",
        component: () =>
          import(
            /* webpackChunkName: "Overview" */ "./components/Branch/BranchCreate.vue"
          ),
      },
      {
        path: "/branch/list",
        component: () =>
          import(
            /* webpackChunkName: "Messages" */ "./components/Branch/BranchList.vue"
          ),
      },
      {
        path: "/course/Create",
        component: () =>
          import(
            /* webpackChunkName: "Profile" */ "./components/Course/CourseCreate.vue"
          ),
      },
      {
        path: "/course/list",
        component: () =>
          import(
            /* webpackChunkName: "Settings" */ "./components/Course/CourseList.vue"
          ),
      },
      {
        path: "/courseEdit/:id",
        name: "CourseEdit",
        component: () => import("./components/Course/CourseEdit"),
      },
      {
        path: "/subject/Create",
        component: () =>
          import(
            /* webpackChunkName: "Profile" */ "./components/Subject/SubjectCreate.vue"
          ),
      },
      {
        path: "/subject/list",
        component: () =>
          import(
            /* webpackChunkName: "Settings" */ "./components/Subject/SubjectList.vue"
          ),
      },
      {
        path: "/subjectMapping/Create",
        component: () =>
          import(
            /* webpackChunkName: "Profile" */ "./components/Subject/SubjectMappingCreate.vue"
          ),
      },
      {
        path: "/subjectMapping/list",
        component: () =>
          import(
            /* webpackChunkName: "Settings" */ "./components/Subject/SubjectMappingList.vue"
          ),
      },
    ],
  },

  {
    path: "/course/Create",
    name: "CourseCreate",
    component: () => import("./components/Course/CourseCreate"),
  },
  {
    path: "/branch/list",
    name: "BranchList",
    component: () => import("./components/Branch/BranchList"),
  },
  {
    path: "/course/list",
    name: "CourseList",
    component: () => import("./components/Course/CourseList"),
  },
  // {
  //   path: "/dashboard",
  //   name: "CourseEx",
  //   component: () => import("./components/Course/CourseEx"),
  // },
  // {
  //   path: "/courseList",
  //   name: "CourseList",
  //   component: () => import("./components/Course/CourseList"),
  // },
  // {
  //   path: "/courseEdit/:id",
  //   name: "CourseEdit",
  //   component: () => import("./components/Course/CourseEdit"),
  // },
  {
    path: "/branchEdit/:id",
    name: "BranchEdit",
    component: () => import("./components/Branch/BranchEdit"),
  },
  {
    path: "/branch/create",
    name: "BranchCreate",
    component: () => import("./components/Branch/BranchCreate"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
