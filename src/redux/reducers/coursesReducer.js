// import { ADD_PROFILE_INFO, SIGN_OUT } from "../actions/profileActions";

const initialState = {
  coursesList: [],
  isLoading: false,
  error: "",
};

const coursesReducer = (state = initialState, action) => {
  console.log("coursesReducer", action);
  switch (action.type) {
    // case ADD_PROFILE_INFO:
    //   return { ...state, error: "Something ...." };
    // case SIGN_OUT:
    //   return initialState;
    default:
      return state;
  }
};

export default coursesReducer;
