import { combineReducers } from "redux";
import authSlice from "./reducers/authSlice";
import coursesReducer from "./reducers/coursesReducer";
import profileReducer from "./reducers/profileReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistProfileConfig = {
  key: "profile",
  storage,
  blacklist: ["firstName", "id"],
};

const persistAuthConfig = {
  key: "auth",
  storage,
  whitelist: ["idToken"],
};

const rootReducer = combineReducers({
  courses: coursesReducer,
  profile: persistReducer(persistProfileConfig, profileReducer),
  auth: persistReducer(persistAuthConfig, authSlice),
  test: () => ({
    message: "hello",
  }),
});

export default rootReducer;
