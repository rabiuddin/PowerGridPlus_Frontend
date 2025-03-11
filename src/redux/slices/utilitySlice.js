import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavOpen: false,
};

const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {
    setIsNavOpen: (state, action) => {
      state.isNavOpen = action.payload;
    },
  },
});

export const { setIsNavOpen } = utilitySlice.actions;
export default utilitySlice.reducer;
