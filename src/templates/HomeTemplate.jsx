import React, { Component } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  }
}
