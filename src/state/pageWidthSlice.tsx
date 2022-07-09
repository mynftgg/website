import { createSlice } from "@reduxjs/toolkit";

export const pageWidthSlice = createSlice({
  name: "pageWidth",
  initialState: {
    value: window.innerWidth
  },
  reducers: {
    setPageWidth: (state, action) => {
      state.value = action.payload
    }
  }
});

export const { setPageWidth } = pageWidthSlice.actions;

export default pageWidthSlice.reducer;
