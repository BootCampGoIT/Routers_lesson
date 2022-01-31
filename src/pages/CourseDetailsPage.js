import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { courses } from "./CoursesPage";

const initialState = {
  name: "no name",
  modules: [],
  id: "",
};

const CourseDetailsPage = () => {
  const [state, setState] = useState(initialState);
  const location = useLocation();
  const { courseId } = useParams();
  console.log(location);
  console.log(courseId);

  useEffect(() => {
    const course = courses.find((course) => course.id === courseId);
    setState(course);
    //   const res = axios.get(`https://courses/${courseId}.json`);
  }, [courseId]);

  return (
    <div>
      <h2>DETAILS</h2>
      <h2>{state.name}</h2>
      <ul className='modulesList'>
        {state.modules.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetailsPage;
