import { configureStore } from "@reduxjs/toolkit";
import evalReducer from "./slices/evalSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    evaluation: evalReducer,
    auth: authReducer,
  },
});

export default store;
