import React from "react";

const itemPicture = props => (
  <form className="ml-5">
    <div className="form-row">
      <div className="col">
        <div id="donate-img-container">
          <img
            id="donate-img"
            className="float-left m-0 p-0"
            alt=""
            src={props.url}
          />
        </div>
      </div>
    </div>
  </form>
);

export default itemPicture;
