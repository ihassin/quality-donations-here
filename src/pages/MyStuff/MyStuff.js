import React, { Component } from "react";


class MyStuff extends Component {
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
      <div className="MyStuff">
        <h1>My Stuff</h1>
      </div>
    );
  }
}

export default MyStuff;
