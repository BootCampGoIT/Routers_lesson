import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./Components/App";
import "./index.css";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import CoursesPage from "./pages/CoursesPage";
import DefaultPage from "./pages/DefaultPage";
import HomePage from "./pages/HomePage";
import mainRoutes from "./routes/mainRoutes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          {mainRoutes.map(({ path, component: MyComponent }) => (
            <Route path={path} element={<MyComponent />} key={path} />
          ))}
        </Route>
        {/* <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='courses'>
            <Route index element={<CoursesPage />} />
            <Route path='new' element={<h2>New</h2>} />
            <Route path=':courseId' element={<CourseDetailsPage />} />
          </Route>
          <Route path='*' element={<DefaultPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
