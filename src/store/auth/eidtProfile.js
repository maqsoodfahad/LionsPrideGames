import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const eidtUserSlice = createSlice({
  name: "editUser",
  initialState,
  reducers: {
    setEditUser: (state, action) => {
      state.user = action.payload;
    },
 
  },
});

export const { setEditUser, setUpdatedEditUser } = eidtUserSlice.actions;
export default eidtUserSlice.reducer;
