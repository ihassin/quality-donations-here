import React, { Component } from "react";
import "./MyPickups.css";


class MyPickups extends Component {
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
      <div className="page-content">
        <h1>My Pickups</h1>
      </div>
    );
  }
}

export default MyPickups;
