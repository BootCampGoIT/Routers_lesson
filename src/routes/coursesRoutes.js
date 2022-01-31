import CourseDetailsPage from "../pages/CourseDetailsPage";

const coursesRoutes = [
  {
    path: ":courseId",
    name: "Details",
    component: CourseDetailsPage,
  },
  {
    path: "new",
    name: "Form",
    component: () => <h2>Hello new</h2>,
  },
];

export default coursesRoutes;
