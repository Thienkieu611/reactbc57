import React, { Component } from "react";
import { connect } from "react-redux";
import {
  tangGiamSoLuongAction,
  xoaGioHangAction,
} from "../../redux/reducers/gioHangReducer";

class GioHangRedux extends Component {
  render() {
    return (
      <div>
        <h3 className="mt-2">Giỏ hàng</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.gioHang.map((spGioHang) => {
              return (
                <tr key={spGioHang.maSP}>
                  <td>{spGioHang.maSP}</td>
                  <td>{spGioHang.tenSP}</td>
                  <td>
                    <img
                      src={spGioHang.hinhAnh}
                      alt="..."
                      width={50}
                      height={50}
                    />
                  </td>
                  <td>{spGioHang.giaBan}</td>
                  <td>
                    <button
                      className="mx-2"
                      onClick={() => {
                        const action = tangGiamSoLuongAction({
                          maSP: spGioHang.maSP,
                          soLuong: 1,
                        });
                        this.props.dispatch(action);
                      }}
                    >
                      +
                    </button>
                    {spGioHang.soLuong}
                    <button
                      className="mx-2"
                      onClick={() => {
                        const action = tangGiamSoLuongAction({
                          maSP: spGioHang.maSP,
                          soLuong: -1,
                        });
                        this.props.dispatch(action);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>{spGioHang.giaBan * spGioHang.soLuong}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        //tạo ra action type payload
                        const action = xoaGioHangAction(spGioHang.maSP);
                        this.props.dispatch(action);
                      }}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gioHang: state.gioHangState.gioHang, //tạo props component từ state redux
});

export default connect(mapStateToProps)(GioHangRedux);
