import { configureStore } from "@reduxjs/toolkit";
import { pageWidthSlice } from "./state/pageWidthSlice";
import { scrollPositionSlice } from "./state/scrollPositionSlice";

export default configureStore({
  reducer: {
    scrollPosition: scrollPositionSlice.reducer,
    pageWidth: pageWidthSlice.reducer
  }
});
