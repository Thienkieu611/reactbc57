import React, { Component } from "react";

export default class ProductForm extends Component {
  state = {
    values: {
      id: "",
      name: "",
      price: "",
      type: "Laptop",
      description: "",
      img: "",
    },
    errors: {
      id: "",
      name: "",
      price: "",
      description: "",
      img: "",
    },
    isSubmit: false,
  };

  handleChangeInput = (e) => {
    //xử lý values
    let tag = e.target; //Lấy ra dom hiện tại đang gõ
    let dataType = e.target.getAttribute("data-type");
    console.log(dataType);
    let newValues = { ...this.state.values };
    newValues[tag.id] = tag.value;

    //xử lý error
    let newErrors = { ...this.state.errors };
    let messError = "";
    if (newValues[tag.id] === "") {
      messError = `${tag.id} cannot be blank !`;
    } else {
      if (dataType) {
        switch (dataType) {
          case "number":
            {
              let regexNumber = /^[0-9]{1,7}$/;
              if (!regexNumber.test(newValues[tag.id])) {
                messError = `${tag.id} is invalid`;
              }
            }
            break;
          default:
            break;
        }
      }
    }
    newErrors[tag.id] = messError;

    //xử lý nút submit
    //lỗi xác định khi nào? các giá trị trong error chỉ cần 1 trường có lỗi => lỗi, hoặc tất cả value '' thì lỗi
    let valid = true;
    for (let key in newErrors) {
      if (newErrors[key] !== "") {
        valid = false;
        break;
      }
    }
    for (let key in newValues) {
      if (newValues[key] === "") {
        valid = false;
        break;
      }
    }

    this.setState({
      values: newValues,
      errors: newErrors,
      isSubmit: valid,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); //chặn reload page
    //xử lý thêm dữ liệu vào table

    let { addProduct } = this.props;
    //truyền state.values ra cho hàm addProduct ở component React Form
    addProduct(this.state.values);
  };

  render() {
    console.log(this.state);
    let { id, name, price, img, type, description } = this.props.productEdit;
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-white">Product info</div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="id">ID:</label>
                <input
                  data-type="number"
                  type="text"
                  className="form-control"
                  id="id"
                  name="id"
                  value={id}
                  onInput={this.handleChangeInput}
                />
                <p className="text text-danger">{this.state.errors.id}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onInput={this.handleChangeInput}
                />
                <p className="text text-danger">{this.state.errors.name}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="price">Price:</label>
                <input
                  data-type="number"
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  value={price}
                  onInput={this.handleChangeInput}
                />
                <p className="text text-danger">{this.state.errors.price}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="img">Image URL:</label>
                <input
                  type="text"
                  className="form-control"
                  id="img"
                  name="img"
                  value={img}
                  onInput={this.handleChangeInput}
                />
                <p className="text text-danger">{this.state.errors.img}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="description">Description:</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  defaultValue={""}
                  value={description}
                  onInput={this.handleChangeInput}
                />
                <p className="text text-danger">
                  {this.state.errors.description}
                </p>
              </div>
              <div className="mb-3">
                <label htmlFor="type">Type:</label>
                <select
                  className="form-control"
                  id="type"
                  name="type"
                  value={type}
                  onInput={this.handleChangeInput}
                >
                  <option value="laptop">Laptop</option>
                  <option value="tablet">Tablet</option>
                  <option value="phone">Phone</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button
            disabled={!this.state.isSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
