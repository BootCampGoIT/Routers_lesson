import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
const addCourse = createAction("addCourse");
// const addCourse = (payload) => ({ type: "addCourse", payload });
const getCourses = (payload) => ({ type: "getCourses", payload });
const deleteCourse = (payload) => ({ type: "deleteCourse", payload });
const setLoader = createAction("setLoader");
const setError = (payload) => ({ type: "setError", payload });
const resetError = () => ({ type: "resetError" });

export { addCourse, getCourses, deleteCourse, setLoader, setError, resetError };

const getCoursesRequest = createAction("/courses/request");
const getCoursesSuccess = createAction("/courses/getSuccess");
const getCoursesError = createAction("/courses/error");

export { getCoursesRequest, getCoursesSuccess, getCoursesError };

const loaderReducer = createReducer(false, {
  [getCoursesRequest]: () => true,
  [getCoursesSuccess]: () => false,
  [getCoursesError]: () => false,
});

console.log(nanoid());

const errorReducer = (state = "", action) => {
  switch (action.type) {
    case "setError":
      return action.payload;
    case "/courses/error":
      return action.payload;
    case "resetError":
      return "";
    default:
      return state;
  }
};

const coursesList = createReducer([], {
  [getCoursesSuccess]: (_, action) => action.payload,
  [addCourse]: (state, action) => [...state, action.payload],
  [deleteCourse]: (state, action) =>
    state.filter((course) => course.id !== action.payload),
});

const coursesReducer = combineReducers({
  isLoading: loaderReducer,
  error: errorReducer,
  coursesList,
});

export default coursesReducer;
