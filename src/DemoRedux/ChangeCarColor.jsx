import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCarColorAction } from "../redux/reducers/imgReducer";
class ChangeCarColor extends Component {
  render() {
    const { img, dispatch } = this.props;
    return (
      <div className="container">
        <h3>Change car color</h3>
        <div className="row">
          <div className="col-6">
            <img src={img.imgState} alt="..." className="w-100" />
          </div>
          <div className="col-6">
            <button
              className="btn btn-danger"
              onClick={() => {
                // const action = {
                //   type: "imgReducer/changeCarColorAction",
                //   payload: "red",
                // };
                const action = changeCarColorAction("red");
                dispatch(action);
              }}
            >
              Red
            </button>
            <button
              className="btn btn-dark mx-2"
              onClick={() => {
                // const action = {
                //   type: "imgReducer/changeCarColorAction",
                //   payload: "black",
                // };
                const action = changeCarColorAction("black");
                console.log(action);
                dispatch(action);
              }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//viết tắt của cú pháp es6 => {return} tương đương => (gia_tri_return)
const mapStateToProps = (state) => ({
  img: state.img,
});

export default connect(mapStateToProps)(ChangeCarColor);
