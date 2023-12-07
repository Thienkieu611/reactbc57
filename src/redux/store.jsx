import { configureStore } from "@reduxjs/toolkit";
import { numberReducer } from "./reducers/numberReducer";
import imgReducer from "./reducers/imgReducer";
import fontSizeReducer from "./reducers/fontSizeReducer";
import gioHangReducer from "./reducers/gioHangReducer";
export const store = configureStore({
  reducer: {
    //chứa toàn bộ state của ứng dụng
    number: numberReducer,
    img: imgReducer,
    fSizeState: fontSizeReducer,
    gioHangState: gioHangReducer,
  },
});
