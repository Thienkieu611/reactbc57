import React, { Component } from "react";
import { connect } from "react-redux";
class ChangeNumberRedux extends Component {
  render() {
    let { number, dispatch } = this.props;
    console.log(this.props);
    return (
      <div className="container">
        <h3>Number: {number}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            //tạo ra object action chứa dữ liệu gửi đi
            const action = {
              type: "CHANGE_NUMBER_ACTION", //type là thuộc tính bắt buộc để biết được rằng action nào thực thi
              payload: number + 1, // payload là dữ liệu gửi lên redux
            };
            //Dùng hàm dispatch để đưa dữ liệu lên redux
            dispatch(action);
          }}
        >
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //state laf state cuar redux
  return {
    //props của component
    number: state.number,
  };
};

//kết nối với redux
const ComponentWithRedux = connect(mapStateToProps)(ChangeNumberRedux);
export default ComponentWithRedux;
//HOC: Higher order component
