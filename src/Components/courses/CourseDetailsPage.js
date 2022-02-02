import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const initialState = {
  name: "no name",
  time: 0,
  id: "",
};

const CourseDetailsPage = ({ getCourseDetails }) => {
  const [state, setState] = useState(initialState);
  const { courseId } = useParams();

  useEffect(() => {
    getCourseDetails(courseId).then((res) =>
      setState({ id: courseId, ...res })
    );
  }, [courseId]);

  return (
    <div>
      <h2>{state?.name}</h2>
      <p>{state.time}</p>
    </div>
  );
};

export default CourseDetailsPage;
