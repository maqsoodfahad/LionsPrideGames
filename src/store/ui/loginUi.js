import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLoader: false,
  craditional: {},
};

const slice = createSlice({
  name: "loginUI",
  initialState,
  reducers: {
    showLoginLoader: (state, action) => {
      state.showLoader = action.payload;
    },
    setCredational: (state, action) => {
      state.craditional = action.payload;
    },
  },
  resetLoginUI: (state, action) => {
    state = initialState;
  },
});

export const { showLoginLoader, resetLoginUI, setCredational } = slice.actions;
export default slice.reducer;
