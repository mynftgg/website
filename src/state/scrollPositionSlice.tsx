import { createSlice } from "@reduxjs/toolkit";

export const scrollPositionSlice = createSlice({
  name: "scrollPosition",
  initialState: {
    visibleSections: {},
    headerHeight: 0
  },
  reducers: {
    setSectionVisibility: (state, action) => {
      const { sectionName, isVisible } = action.payload;
      state.visibleSections = { ...state.visibleSections, [sectionName]: isVisible };
    },
    setHeaderHeight: (state, action) => {
      state.headerHeight = action.payload;
    }
  }
});

export const { setSectionVisibility, setHeaderHeight } = scrollPositionSlice.actions;

export default scrollPositionSlice.reducer;
