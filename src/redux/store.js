import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./features/cars/carsSlice";
import authSlice  from "./features/cars/auth/auth";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    auth: authSlice,

  },
});
