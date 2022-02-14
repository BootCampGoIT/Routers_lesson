// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   devTools: process.env.NODE_ENV !== "production",
// });

// export const persistor = persistStore(store);

// export default store;

// ============== redux =====================s

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { setDataTest } from "./operations/courses";
import { setError } from "./reducers/coursesReducer";

const customMW = (store) => (next) => (action) => {
 
  return next(action);
};

const middlewares = [customMW, thunk];
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, composeWithDevTools(enhancer));
export const persistor = persistStore(store);
export default store;
