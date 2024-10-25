import { createSlice } from "@reduxjs/toolkit";

export const navMenuFunctions = createSlice({
  name: "navigation menu functionality",
  initialState: {
    value: {
      fullMenuView: false,
      isDarkMode: false,
    },
  },
  reducers: {
    toggleMenuView: (state) => {
      state.value.fullMenuView = !state.value.fullMenuView;
    },
    updateThemeMode: (state, action) => {
      state.value.isDarkMode = action?.payload?.isDark;
    },
  },
});

export const { toggleMenuView, updateThemeMode } = navMenuFunctions.actions;

export default navMenuFunctions.reducer;
