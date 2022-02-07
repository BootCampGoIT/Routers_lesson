import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./Components/App";
import "./index.css";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";
import DefaultPage from "./pages/DefaultPage";
import store from "./redux/store";
import ProfilePage from "./pages/ProfilePage";

// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<HomePage />} />
            <Route
              path='courses/*'
              element={<CoursesPage routePath='/courses' />}
            />
            <Route
              path='profile'
              element={<ProfilePage field='info' fn={(v) => console.log(v)} />}
            />
            <Route path='*' element={<DefaultPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
