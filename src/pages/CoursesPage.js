import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import coursesRoutes from "../routes/coursesRoutes";
import CourseDetailsPage from "./CourseDetailsPage";

export const courses = [
  {
    id: "html_fghjkl",
    name: "HTML",
    modules: ["Lesson1", "Lesson2"],
  },
  {
    id: "js_dfghjbnklj;",
    name: "Java Script",
    modules: ["Lesson 111"],
  },
  {
    id: "react_dtfyguhkjl",
    name: "React",
    modules: ["lesson4", "lesson5"],
  },
];

const CoursesPage = () => {
  return (
    <>
      <h2>Courses page</h2>
      <ul className='courseList'>
        {courses.map((course) => (
          <li className='courseListItem' key={course.id}>
            <Link to={course.id}>{course.name}</Link>
            {/* <Link
              to={{
                pathname: course.id,
                hash: "comment",
                search: "query=fghj",
              }}
              state={{ message: "Hello" }}>
              {course.name}
            </Link> */}
          </li>
        ))}
      </ul>
      <Routes>
        {coursesRoutes.map(({ path, component: MyComponent }) => (
          <Route path={path} element={<MyComponent />} key={path} />
        ))}
      </Routes>
    </>
  );
};

export default CoursesPage;
