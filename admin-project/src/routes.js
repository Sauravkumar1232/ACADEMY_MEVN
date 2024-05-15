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
        path: "",
        component: () =>
          import(/* webpackChunkName: "Overview" */ "./views/OverView.vue"),
      },
      {
        path: "messages",
        component: () =>
          import(/* webpackChunkName: "Messages" */ "./views/MessAges.vue"),
      },
      {
        path: "profile",
        component: () =>
          import(/* webpackChunkName: "Profile" */ "./views/ProFile.vue"),
      },
      {
        path: "settings",
        component: () =>
          import(/* webpackChunkName: "Settings" */ "./views/SettIngs.vue"),
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
  {
    path: "/dashboard",
    name: "CourseEx",
    component: () => import("./components/Course/CourseEx"),
  },
  // {
  //   path: "/courseList",
  //   name: "CourseList",
  //   component: () => import("./components/Course/CourseList"),
  // },
  {
    path: "/courseEdit/:id",
    name: "CourseEdit",
    component: () => import("./components/Course/CourseEdit"),
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
