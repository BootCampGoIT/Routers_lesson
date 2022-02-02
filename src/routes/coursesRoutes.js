import React from "react";

import CourseForm from "../Components/courses/CourseForm";

import CourseList from "../Components/courses/CourseList";
// const AsyncComponent = lazy(() => import("./AsyncComponent"));

const coursesRoutes = [
  { path: "create", name: "Create", component: CourseForm },
  { path: "list", name: "List", component: CourseList },
];

export default coursesRoutes;

// ...........
// import { lazy } from "react";

// const CourseForm = lazy(() =>
//   import(
//     "../Components/courses/CourseForm" /* webpackChunkName: "CourseForm" */
//   )
// );
// const CourseList = lazy(() =>
//   import(
//     "../Components/courses/CourseList" /* webpackChunkName: "CourseList" */
//   )
// );

// const coursesRoutes = [
//   { path: "create", name: "Create", component: CourseForm },
//   { path: "list", name: "List", component: CourseList },
// ];

// export default coursesRoutes;
