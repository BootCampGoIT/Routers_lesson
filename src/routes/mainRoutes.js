import CoursesPage from "../pages/CoursesPage";
import HomePage from "../pages/HomePage";

const mainRoutes = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
    innerRoutes: [],
  },
  {
    name: "Courses",
    path: "courses/*",
    component: CoursesPage,
  },
];

export default mainRoutes;
