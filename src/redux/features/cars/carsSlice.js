import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCars = createAsyncThunk(
  "search-car/cars",
  async ({ inputName, inputCategory, inputAvailable, inputMin, inputMax }) => {
    try {
      const res = await axios.get(
        `https://api-car-rental.binaracademy.org/customer/v2/car?page=1&pageSize=10&name=${inputName}&category=${inputCategory}&isRented=${inputAvailable}&minPrice=${inputMin}&maxPrice=${inputMax}`
      );
      console.log("API Car List", res.data.cars);
      return res.data;
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }
);

const initialState = {
  carList: [],
  loading: false,
  error: "",
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false;
        state.carList = action.payload.cars;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default carsSlice.reducer;
