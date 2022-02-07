import { combineReducers } from "redux";
import coursesReducer from "./reducers/coursesReducer";
import profileReducer from "./reducers/profileReducer";

const rootReducer = combineReducers({
  courses: coursesReducer,
  profile: profileReducer,
  test: () => ({
    message: "hello",
  }),
});

export default rootReducer;
