import { ADD_PROFILE_INFO, SIGN_OUT } from "../actions/profileActions";

const initialState = {
  firstName: "",
  lastName: "",
  id: "",
  info: {
    dfghb: "vcfghvbj",
  },
};

const profileReducer = (state = initialState, action) => {
  console.log("profileReducer", action);

  switch (action.type) {
    case ADD_PROFILE_INFO:
      return { ...state, ...action.payload };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};

export default profileReducer;
