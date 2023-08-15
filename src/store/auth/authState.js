import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  resetToken: "",
  emailForget: "",
};

const slice = createSlice({
  name: "authState",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setResetToken: (state, action) => {
      state.resetToken = action.payload;
    },
    setEmailForget: (state, action) => {
      state.emailForget = action.payload;
    },
    resetAuthState: (state, action) => {
      state = initialState;
    },
  },
});

export const { setToken, resetAuthState, setResetToken, setEmailForget } =
  slice.actions;
export default slice.reducer;
