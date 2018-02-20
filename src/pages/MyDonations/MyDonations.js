import React, { Component } from "react";
import "./MyDonations.css";


class MyDonations extends Component {
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
        <h1>My Donations</h1>
      </div>
    );
  }
}

export default MyDonations;
