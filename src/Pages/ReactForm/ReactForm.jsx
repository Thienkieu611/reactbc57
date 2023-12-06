import React, { Component } from "react";
import ProductForm from "./ProductForm";

export default class ReactForm extends Component {
  state = {
    arrProduct: [
      {
        id: 1,
        name: "iphone",
        price: 1000,
        img: "https://picsum.photos/id/1/200/200",
        type: "phone",
        description: "iphone 9",
      },
      {
        id: 2,
        name: "iphone XS",
        price: 1000,
        img: "https://picsum.photos/id/2/200/200",
        type: "phone",
        description: "iphone XS",
      },
    ],
    productEdit: {
      id: "",
      name: "",
      price: "",
      img: "",
      type: "",
      description: "",
    },
  };
  addProduct = (newProduct) => {
    this.state.arrProduct.push({ ...newProduct });
    console.log(newProduct);
    //setState
    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };
  deleteProduct = (idProduct) => {
    this.state.arrProduct = this.state.arrProduct.filter(
      (prod) => prod.id !== idProduct
    );
    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };
  editProduct = (prodClick) => {
    this.setState({
      productEdit: prodClick,
    });
  };

  updateProduct = (prodUpdate) => {
    //tìm ra product có id = product update lấy ra thay đổi
    let prod = this.state.arrProduct.find((prod) => prod.id === prodUpdate.id);

    if (prod) {
      for (let key in prod) {
        //lấy ra các trường prod trong arrProduct gán = dữ liệu sau khi bấm nút update
        prod[key] = prodUpdate[key];
      }
    }
    //gọi hàm setstate render lại giao diện
    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Product management</h3>
        <ProductForm
          addProduct={this.addProduct}
          productEdit={this.state.productEdit}
          updateProduct={this.updateProduct}
        />
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>img</th>
              <th>price</th>
              <th>type</th>
              <th>description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrProduct.map((prod) => {
              return (
                <tr key={prod.id}>
                  <td>{prod.id}</td>
                  <td>{prod.name}</td>
                  <td>
                    <img src={prod.img} alt="..." width={50} height={50} />
                  </td>
                  <td>{prod.price}</td>
                  <td>{prod.type}</td>
                  <td>{prod.description}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.deleteProduct(prod.id);
                      }}
                    >
                      <i className="fa fa-close"></i>
                    </button>
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => {
                        this.editProduct(prod);
                      }}
                    >
                      <i className="fa fa-edit"></i>
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
