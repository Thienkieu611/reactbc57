import React, { Component } from "react";

export default class ChangeColor extends Component {
  state = {
    color: "black",
  };
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <i
          style={{ color: this.state.color }}
          className="fa fa-home display-4 mt-3"
        ></i>
        <br />

        <br />
        <button
          className="btn btn-danger mx-2"
          onClick={() => {
            this.setState({
              color: "red",
            });
          }}
        >
          Red
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={() => {
            this.setState({
              color: "green",
            });
          }}
        >
          Green
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            this.setState({
              color: "blue",
            });
          }}
        >
          Blue
        </button>
      </div>
    );
  }
}
