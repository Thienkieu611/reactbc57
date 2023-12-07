/*
    Sau khi rcredux thì sẽ xoá
    1/ export trên class
    2/ mapDispatchToProps dưới hàm mapStateToProps
    3/ Xoá mapDispatchToProps trong connect
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import GioHangRedux from "./GioHangRedux";

class BaiTapGioHangRedux extends Component {
  render() {
    return (
      <div className="container">
        <GioHangRedux />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BaiTapGioHangRedux);
