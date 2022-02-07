// types
const ADD_PROFILE_INFO = "profile/addProfileInfo";
const SIGN_OUT = "profile/signOut";

export { ADD_PROFILE_INFO, SIGN_OUT };

//actionCreators
const addProfileInfo = (profileInfo) => {
  return {
    type: ADD_PROFILE_INFO,
    payload: profileInfo,
  };
};

const signOut = () => ({ type: SIGN_OUT });

export { addProfileInfo, signOut };
