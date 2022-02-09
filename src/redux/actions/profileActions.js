import { createAction } from "@reduxjs/toolkit";

// const ADD_PROFILE_INFO = "profile/addProfileInfo";
// const SIGN_OUT = "profile/signOut";

const addProfileInfo = createAction("profile/addProfileInfo");
const signOut = createAction("profile/signOut");

// types

// export { ADD_PROFILE_INFO, SIGN_OUT };

// //actionCreators
// // const addProfileInfo = (profileInfo) => {
// //   return {
// //     type: ADD_PROFILE_INFO,
// //     payload: profileInfo,
// //   };
// // };
// const addProfileInfo = (payload) => ({
//   type: ADD_PROFILE_INFO,
//   payload,
// });

// const signOut = () => ({ type: SIGN_OUT });

export { addProfileInfo, signOut };
