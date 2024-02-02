import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./features/cars/carsSlice";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    auth: authReducer,
  },
});
