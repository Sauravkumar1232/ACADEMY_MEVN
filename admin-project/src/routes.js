import { createRouter, createWebHistory } from "vue-router";
const routes = [
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
    path: "/",
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
