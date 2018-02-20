import React, { Component } from "react";
import "./DonateForm.css";


class DonateForm extends Component {
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
        <h1>Donate</h1>
      </div>
    );
  }
}

export default DonateForm;
