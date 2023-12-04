import React, { Component } from "react";
import ProductForm from "./ProductForm";

export default class ReactForm extends Component {
  render() {
    return (
      <div className="container">
        <h3>Product management</h3>
        <ProductForm />
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>img</th>
              <th>price</th>
              <th>type</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}
