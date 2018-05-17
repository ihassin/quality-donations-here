import React from "react";

const pickupComments = props => (
  <form id="pickup-comments" className="font-weight-bold mx-4 mb-4">
    <div className="form-row">
      <div className="col text-center mb-3">Pickup Comments</div>
    </div>
    <div className="form-row">
      <div className="col">
        <textarea
          name="donorPickupComments"
          onChange={props.handleInputChange}
          className="form-control"
          rows="2"
        />
      </div>
    </div>
  </form>
);

export default pickupComments;
