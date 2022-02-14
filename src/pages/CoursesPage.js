import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import CourseDetailsPage from "../Components/courses/CourseDetailsPage";
import CourseForm from "../Components/courses/CourseForm";
import CourseList from "../Components/courses/CourseList";
import Navigation from "../Components/navigation/Navigation";
import { getCoursesOperation } from "../redux/operations/courses";
import coursesRoutes from "../routes/coursesRoutes";

const CoursesPage = ({ routePath }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesOperation());
    location.pathname === routePath &&
      navigate(`${location.pathname}/${coursesRoutes[0].path}`);
  }, []);

  const addCourse = async (course) => {
    try {
      const res = await axios.post(
        "https://courses-b777d-default-rtdb.firebaseio.com/courses.json",
        course
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getCourseDetails = async (id) => {
    try {
      const res = await axios.get(
        `https://courses-b777d-default-rtdb.firebaseio.com/courses/${id}.json`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navigation links={coursesRoutes} />

      <Routes>
        <Route path='create' element={<CourseForm addCourse={addCourse} />} />
        <Route path='list/*'>
          <Route index element={<CourseList courses={[]} />} />
          <Route
            path=':courseId'
            element={<CourseDetailsPage getCourseDetails={getCourseDetails} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default CoursesPage;
