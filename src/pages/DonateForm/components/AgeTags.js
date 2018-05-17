import React from "react";

const ageTags = props => (
  <form className="pb-1 mb-2 border-bottom border-success font-weight-bold text-left">
    <div className="form-row">
      <div className="col-3 text-left">Age</div>
      <div className="col-9">
        <div className="form-row">
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="ageTag"
                value="baby"
                onChange={props.handleInputChange}
              />
              Baby
            </label>
          </div>
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="ageTag"
                value="child"
                onChange={props.handleInputChange}
              />
              Child
            </label>
          </div>
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="ageTag"
                value="youth"
                onChange={props.handleInputChange}
              />
              Youth
            </label>
          </div>
        </div>
      </div>
    </div>
    <div className="form-row">
      <div className="col-3 text-left" />
      <div className="col-9">
        <div className="form-row">
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="ageTag"
                value="adult"
                onChange={props.handleInputChange}
              />
              Adult
            </label>
          </div>
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="ageTag"
                value="senior"
                onChange={props.handleInputChange}
              />
              Senior
            </label>
          </div>
        </div>
      </div>
    </div>
  </form>
);

export default ageTags;
