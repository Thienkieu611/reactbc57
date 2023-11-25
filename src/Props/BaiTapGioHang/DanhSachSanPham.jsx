import React, { Component } from "react";
import SanPhamDT from "./SanPhamDT";

export default class DanhSachSanPham extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center">Danh sách các sản phẩm điện thoại</h3>
        <div className="row">
          {this.props.dataSP.map((sanPham) => {
            return (
              <div key={sanPham.maSP} className="col-4">
                <SanPhamDT
                  sanPham={sanPham}
                  themGioHang={this.props.themGioHang}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
