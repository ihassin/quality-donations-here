import React from "react";

const pickupAddress = props => (
  <form id="pickup-address" className="font-weight-bold mx-4">
    <div className="form-row">
      <div className="col text-center mb-3">Pickup Address</div>
    </div>
    <div className="form-row mb-2">
      <div className="col">
        <input
          className="form-control"
          type="text"
          placeholder="address"
          name="pickupAddress1"
          onChange={props.handleInputChange}
        />
      </div>
    </div>
    <div className="form-row mb-2">
      <div className="col">
        <input
          className="form-control"
          type="text"
          placeholder="address"
          name="pickupAddress2"
          onChange={props.handleInputChange}
        />
      </div>
    </div>
    <div className="form-row mb-2">
      <div className="col-6">
        <input
          className="form-control"
          type="text"
          placeholder="city"
          name="pickupCity"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="col-2">
        <input
          className="form-control"
          type="text"
          placeholder="st"
          name="pickupState"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="col-4">
        <input
          className="form-control"
          type="text"
          placeholder="zip"
          name="pickupZip"
          onChange={props.handleInputChange}
        />
      </div>
    </div>
  </form>
);

export default pickupAddress;
