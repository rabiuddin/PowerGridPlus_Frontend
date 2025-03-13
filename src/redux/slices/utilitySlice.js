import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavOpen: false,
  fetchingUser: false,
};

const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {
    setIsNavOpen: (state, action) => {
      state.isNavOpen = action.payload;
    },

    setFetchingUser: (state, action) => {
      state.fetchingUser = action.payload;
    },
  },
});

export const { setIsNavOpen, setFetchingUser } = utilitySlice.actions;
export default utilitySlice.reducer;
