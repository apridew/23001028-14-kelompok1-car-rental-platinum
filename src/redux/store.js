import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./features/cars/carsSlice";
import paymentRdeucer from "./features/payment/paymentSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    payment: paymentRdeucer,
  },
});
