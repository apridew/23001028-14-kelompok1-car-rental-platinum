import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    clearLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { setLoading, clearLoading } = authSlice.actions;

export default authSlice.reducer;
