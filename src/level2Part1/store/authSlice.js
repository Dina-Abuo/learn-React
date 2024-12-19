import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LogIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});
export const { LogIn, logOut } = authSlice.actions;

export default authSlice.reducer;
