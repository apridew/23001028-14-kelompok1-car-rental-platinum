import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  curentUser : null,
  isLoading: false,
  isError : false,
  isSuccess : false,
  message : "",
  loading: false,
  isLoggedIn: false,
  
};

export const LoginUser = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  
  try {
    const response = await axios.post("https://api-car-rental.binaracademy.org/customer/auth/login", {
      email: user.email,
      password: user.password
    });
    localStorage.setItem ("accesToken", response.data.access_token)
    console.log (response)
    
    return response.data;
  } catch (error) {
    console.log ("err",error)
    if (error.response){
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }

  }
})

    
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
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
        extraReducers:(builder) =>{
          builder
          .addCase(LoginUser.pending, (state) => {
            state.isLoading = true;
          })
         .addCase(LoginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.curentUser = action.payload;
            state.isSuccess = true;
          })         
         .addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true ;
            state.message = action.payload

          })         

        }
    
})

export const { setLoading, clearLoading, setLoggedIn, setLoggedOut } =
  authSlice.actions;


export default authSlice.reducer;