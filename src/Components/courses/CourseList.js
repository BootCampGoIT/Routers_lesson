import React from "react";
import { Link } from "react-router-dom";
const CourseList = ({ courses }) => {
  return (
    <>
      <ul className='courses'>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={course.id}>{course.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseList;
