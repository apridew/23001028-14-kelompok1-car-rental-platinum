import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isLoggedIn: false,
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
    setLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    setLoggedOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { setLoading, clearLoading, setLoggedIn, setLoggedOut } =
  authSlice.actions;

export default authSlice.reducer;
