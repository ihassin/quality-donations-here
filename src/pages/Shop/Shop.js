import React, { Component } from "react";
import "./Shop.css";


class Shop extends Component {
  state = {

  };

  componentDidMount() {

  }

  editDonation = id => {

  };

  deleteDonation = id => {

  };

  saveDonation = () => {

    };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

  };

  render() {
    return (
      <div className="Shop">
        <h1>Shop</h1>
      </div>
    );
  }
}

export default Shop;
