import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { resetErrAction } from "./globalActions/globalActions";

//initialState
const initialState = {
  loading: false,
  error: null,
 userAuth: {
    loading: false,
    error: null,
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

//register action
export const registerUserAction = createAsyncThunk(
  "users/register",
  async (
    { email, password, fullname },
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      //make the http request
      const { data } = await axios.post("http://localhost:7000/api/register", {
        email,
        password,
        fullname,
      });
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//update user shipping address action


//user profile action


//login action
export const loginUserAction = createAsyncThunk(
  "users/login",
  async ({ email, password }, { rejectWithValue, getState, dispatch }) => {
    try {
      //make the http request
      const { data } = await axios.post("http://localhost:7000/api/login", {
        email,
        password,
      });
      //save the user into localstorage
      localStorage.setItem("userInfo", JSON.stringify(data));
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//logout action
export const logoutAction = createAsyncThunk(
  "users/logout",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    //get token
    localStorage.removeItem("userInfo");
    return true;
  }
);
export const resetSuccAction = createAsyncThunk(
    "resetSuccess-Action",
    () => {
      return {};
    }
  );
//users slice

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    //handle actions
    //login
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.userAuth.loading = true;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.userAuth.userInfo = action.payload;
      state.userAuth.loading = false;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.userAuth.error = action.payload;
      state.userAuth.loading = false;
    });
    //register
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    //logout
    builder.addCase(logoutAction.fulfilled, (state, action) => {
      state.userAuth.userInfo = null;
    });
    //profile
    
    //reset error action
    builder.addCase(resetErrAction.pending, (state) => {
      state.error = null;
    });

    builder.addCase(resetSuccAction.fulfilled, (state) => {
        state.userAuth.userInfo = null;
      });
  },
});

//generate reducer
const usersReducer = usersSlice.reducer;

export default usersReducer;