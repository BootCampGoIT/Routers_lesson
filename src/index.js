import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./Components/App";
import "./index.css";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";
import DefaultPage from "./pages/DefaultPage";
import store, { persistor } from "./redux/store";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import { PersistGate } from "redux-persist/integration/react";

// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h2>...loading</h2>} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<HomePage />} />
              <Route
                path='courses/*'
                element={<CoursesPage routePath='/courses' />}
              />
              <Route path='profile' element={<ProfilePage />} />
              <Route path='signin' element={<AuthPage />} />
              <Route path='signup' element={<AuthPage />} />
              <Route path='*' element={<DefaultPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
