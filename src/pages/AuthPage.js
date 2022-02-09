import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { signIn, signUp } from "../redux/reducers/authSlice";
import { useDispatch } from "react-redux";

const initialState = {
  email: "",
  password: "",
  displayName: "",
};

const AuthPage = () => {
  const [state, setState] = useState(initialState);
  const location = useLocation();
  const dispatch = useDispatch();

  const isSignUpPage = () => location.pathname === "/signup";

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    isSignUpPage()
      ? axios
          .post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAcxIxRQ_TqYFW_msBt5T_cQ0uq9p5k4og`,
            { ...state, returnSecureToken: true }
          )
          .then((response) => dispatch(signUp(response.data)))
      : axios
          .post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcxIxRQ_TqYFW_msBt5T_cQ0uq9p5k4og`,
            {
              email: state.email,
              password: state.password,
              returnSecureToken: true,
            }
          )
          .then((response) => dispatch(signIn(response.data)));
  };

  return (
    <form onSubmit={onHandleSubmit}>
      {isSignUpPage() && (
        <label>
          User name
          <input
            type='text'
            name='displayName'
            value={state.displayName}
            onChange={onHandleChange}
          />
        </label>
      )}
      <label>
        Email
        <input
          type='text'
          name='email'
          value={state.email}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Password
        <input
          type='text'
          name='password'
          value={state.password}
          onChange={onHandleChange}
        />
      </label>
      <button type='submit'>{isSignUpPage() ? "Sign up" : "Sign in"}</button>
    </form>
  );
};

export default AuthPage;
