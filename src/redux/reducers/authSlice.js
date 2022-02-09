import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayName: "",
  email: "",
  expiresIn: "",
  idToken: "",
  localId: "",
  refreshToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp(_, action) {
      return action.payload;
    },
    signIn(_, action) {
      return action.payload;
    },
    signOut() {
      return initialState;
    },
  },
});

export const { signUp, signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
