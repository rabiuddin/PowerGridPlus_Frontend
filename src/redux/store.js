// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"; // Example slice

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
