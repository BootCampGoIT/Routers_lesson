import axios from "axios";
import {
  getCourses,
  getCoursesError,
  getCoursesRequest,
  getCoursesSuccess,
  resetError,
  setError,
  setLoader,
} from "../reducers/coursesReducer";

// const course = { name: "dfg", d: "" };

// middleware
// export const addCourseOperation = (course) => (dispatch, getState) => {
//   axios.post(
//     "https://courses-b777d-default-rtdb.firebaseio.com/courses.json",
//     course
//   );
// };

export const getCoursesOperation = () => async (dispatch, getState) => {
  dispatch(getCoursesRequest()); // request
  try {
    const res = await axios.get(
      "https://courses-b777d-default-rtdb.firebaseio.com/courses.json"
    );
    const courses = Object.keys(res.data).map((key) => ({
      id: key,
      ...res.data[key],
    }));
    dispatch(getCoursesSuccess(courses)); // success
  } catch (error) {
    dispatch(getCoursesError(error.message)); // error
  }
};