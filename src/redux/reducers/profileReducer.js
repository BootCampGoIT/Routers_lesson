import { createReducer } from "@reduxjs/toolkit";
import { addProfileInfo, signOut } from "../actions/profileActions";

const initialState = {
  firstName: "",
  lastName: "",
  id: "",
};

const profileReducer = createReducer(initialState, {
  [addProfileInfo]: (state, { payload }) => ({ ...state, ...payload }),
  [signOut]: () => initialState,
});

export default profileReducer;





