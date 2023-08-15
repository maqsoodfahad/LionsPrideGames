import { createSlice } from '@reduxjs/toolkit';

const userData = createSlice({
  name: 'userData',
  initialState: {
    value: '', // Initial value of your stored data
  },
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload; // Update the value in the store
    },
  },
});

export const { updateValue } = userData.actions;
export default userData.reducer;