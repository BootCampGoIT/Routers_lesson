import axios from "axios";
import React, { useState } from "react";

const initState = {
  name: "",
  time: 0,
};

const CourseForm = ({ addCourse }) => {
  const [state, setState] = useState(initState);
  const onHandleChange = (e) =>
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    addCourse(state);
  };
  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <label>
          Name
          <input
            type='text'
            value={state.name}
            name='name'
            onChange={onHandleChange}
          />
        </label>
        <label>
          Time
          <input
            type='text'
            value={state.time}
            name='time'
            onChange={onHandleChange}
          />
        </label>
        <button type='submit'>Add Course</button>
      </form>
    </>
  );
};

export default CourseForm;
