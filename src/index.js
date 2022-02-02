import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./Components/App";
import "./index.css";

import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";
import DefaultPage from "./pages/DefaultPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route
            path='courses/*'
            element={<CoursesPage routePath='/courses' />}
          />

          <Route path='*' element={<DefaultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
