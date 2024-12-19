import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "./authSlice";

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    increaseByPayload: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [logOut]: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increase, decrease, increaseByPayload } = counterSlice.actions;
export default counterSlice.reducer;
