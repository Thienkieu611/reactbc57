import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gioHang: [
    // {
    //   maSP: 1,
    //   tenSP: "VinSmart Live",
    //   giaBan: 5700000,
    //   hinhAnh: "./img/vsphone.jpg",
    //   soLuong: 2,
    // },
    // {
    //   maSP: 2,
    //   tenSP: "Meizu 16Xs",
    //   giaBan: 7600000,
    //   hinhAnh: "./img/meizuphone.jpg",
    //   soLuong: 3,
    // },
  ],
};

const gioHangReducer = createSlice({
  name: "gioHangReducer",
  initialState,
  reducers: {
    themGioHangAction: (state, action) => {
      let { sanPham } = action.payload;
      //thay đổi state.gioHang
      let spGioHang = { ...sanPham, soLuong: 1 };
      //kiểm tra sản phẩm có trong giỏ hàng hay chưa
      let sp = state.gioHang.find((spGH) => spGH.maSP === spGioHang.maSP);
      if (sp) {
        sp.soLuong += 1;
      } else {
        state.gioHang.push(spGioHang);
      }
    },
    xoaGioHangAction: (state, action) => {
      const maSPXoa = action.payload;
      state.gioHang = state.gioHang.filter((sp) => sp.maSP !== maSPXoa);
      console.log(action);
    },
    tangGiamSoLuongAction: (state, action) => {
      let { maSP, soLuong } = action.payload;

      let spGH = state.gioHang.find((sp) => sp.maSP === maSP);
      if (spGH) {
        spGH.soLuong += soLuong;
        if (spGH.soLuong < 1) {
          if (window.confirm("Bạn có muốn xoá sản phẩm này không?")) {
            state.gioHang = state.gioHang.filter((sp) => sp.maSP !== maSP);
            return;
          } else {
            spGH.soLuong += 1;
          }
        }
      }
    },
  },
});

export const { themGioHangAction, xoaGioHangAction, tangGiamSoLuongAction } =
  gioHangReducer.actions;

export default gioHangReducer.reducer;
