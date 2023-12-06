import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    //chứa toàn bộ state của ứng dụng
    number: (state = 1, action) => {
      //   switch (action.type) {
      //     case "CHANGE_NUMBER_ACTION":
      //       {
      //         state = action.payload;
      //         return state;
      //       }
      //       break;
      //     default: {
      //       return state;
      //     }
      //   }
      if (action.type === "CHANGE_NUMBER_ACTION") {
        state = action.payload;
        return state;
      }
      return state;
    },
    img: (state = "./img/CarBasic/products/red-car.jpg", action) => {
      if (action.type === "CHANGE_CAR_COLOR_ACTION") {
        state = `./img/CarBasic/products/${action.payload}-car.jpg`;
      }

      return state;
    },
  },
});
