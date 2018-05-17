import React from "react";

const pictureInfo = props => (
  <form id="picture-info" className="mr-5">
    <div className="form-row mt-2 mb-3 font-weight-bold">
      <div className="col-3 form-inline">
        <label className="text-left">Item Type</label>
      </div>
      <div className="col-9 form-inline">
        <input
          className="form-control"
          type="text"
          id="picture-info-type"
          name="nameDisplay"
          placeholder="i.e. Chair, Shirt, Computer, Car ..."
          onChange={props.handleNameChange}
        />
      </div>
    </div>
    <div className="form-row mb-3 font-weight-bold">
      <div className="col-3 form-inline">
        <label className="text-left">Item Desc</label>
      </div>
      <div className="col-9 form-inline">
        <textarea
          name="desc"
          id="picture-info-desc"
          onChange={props.handleInputChange}
          className="form-control"
          rows="3"
        />
      </div>
    </div>
    <div className="form-row font-weight-bold">
      <div className="col-3 form-inline">
        <label className="text-left">Posted</label>
      </div>
      <div className="col-9 form-inline">
        <input
          className="form-control"
          type="text"
          id="picture-info-posted"
          value={props.datePosted}
          name="datePosted"
          readOnly
        />
      </div>
    </div>
  </form>
);

export default pictureInfo;
