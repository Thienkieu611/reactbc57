import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fSize: 16, //giá trị state ban đầu
};

const fontSizeReducer = createSlice({
  name: "fontSizeReducer",
  initialState,
  reducers: {
    changeFontSizeAction: (state, action) => {
      state.fSize += action.payload;
    },
  },
});

export const { changeFontSizeAction } = fontSizeReducer.actions;

export default fontSizeReducer.reducer;
