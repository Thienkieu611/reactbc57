import React, { Component } from "react";

const arrPhone = [
  {
    id: 1,
    name: "iphone",
    price: 100,
    img: "https://picsum.photos/id/1/200/200",
  },
  {
    id: 2,
    name: "iphone 15",
    price: 200,
    img: "https://picsum.photos/id/2/200/200",
  },
  {
    id: 3,
    name: "iphone 15 pro",
    price: 300,
    img: "https://picsum.photos/id/3/200/200",
  },
];
export default class RenderWithMap extends Component {
  renderListPhone = () => {
    let contentJSX = [];
    for (let phone of arrPhone) {
      //mỗi lần duyệt qua một objet sẽ tạo ra 1 thẻ jsx li
      let liJSX = <li key={phone.id}>{phone.name}</li>;
      //Lấy mảng jsx add liJSX vào
      contentJSX.push(liJSX);
    }
    return contentJSX;
  };

  renderListPhoneWithMap = () => {
    const arrJSX = arrPhone.map((phone, index) => {
      return <li key={index}>{phone.name}</li>;
    });
    return arrJSX;

    // return arrJSX = arrPhone.map((phone, index) => {
    //     return <li key={index}>{phone.name}</li>;
  };

  renderPhoneList = () => {
    return arrPhone.map((phone, index) => {
      return (
        <tr key={phone.id}>
          <td>{phone.id}</td>
          <td>{phone.name}</td>
          <td>{phone.price}</td>
          <td>
            <img src={phone.img} alt="..." width={50} height={50} />
          </td>
        </tr>
      );
    });
  };

  renderPhoneCard = () => {
    return arrPhone.map((phone, index) => {
      return (
        <div key={phone.id} className="col-4">
          <div className="card">
            <img src={phone.img} alt="..." />
            <div className="card-body">
              <h3>{phone.name}</h3>
              <p>{phone.price}</p>
              <button className="btn btn-dark">
                Add to card <i className="fa fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Demo render list ul li</h3>
        <ul>
          {/* {this.renderListPhone()} */}
          {this.renderListPhoneWithMap()}
        </ul>
        <h3>Product list</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderPhoneList()}</tbody>
        </table>

        <h3>Product card list</h3>
        <div className="row">{this.renderPhoneCard()}</div>
      </div>
    );
  }
}
