//rxslice
import { createSlice } from "@reduxjs/toolkit";

//initialState: state mặc định
const initialState = {
  imgState: "./img/CarBasic/products/red-car.jpg",
};

const imgReducer = createSlice({
  name: "imgReducer", //name: tên của reducer (góp phần tạo thành type action)
  initialState,
  reducers: {
    changeCarColorAction: (state, action) => {
      state.imgState = `./img/CarBasic/products/${action.payload}-car.jpg`;
    },
  },
});

export const { changeCarColorAction } = imgReducer.actions;

export default imgReducer.reducer;

// export const imgReducer = (
//   state = "./img/CarBasic/products/red-car.jpg",
//   action
// ) => {
//   if (action.type === "CHANGE_CAR_COLOR_ACTION") {
//     state = `./img/CarBasic/products/${action.payload}-car.jpg`;
//   }

//   return state;
// };
