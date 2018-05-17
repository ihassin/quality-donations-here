import React from "react";

const conditionTags = props => (
  <form className="pb-1 mb-2 border-bottom border-success font-weight-bold text-left">
    <div className="form-row">
      <div className="col-3 text-left">Condition</div>
      <div className="col-9">
        <div className="form-row">
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="conditionTag"
                value="new"
                onChange={props.handleInputChange}
              />
              New
            </label>
          </div>
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="conditionTag"
                value="likeNew"
                onChange={props.handleInputChange}
              />
              Like New
            </label>
          </div>
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="conditionTag"
                value="veryGood"
                onChange={props.handleInputChange}
              />
              Very Good
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
                name="conditionTag"
                value="good"
                onChange={props.handleInputChange}
              />
              Good
            </label>
          </div>
        </div>
      </div>
    </div>
  </form>
);

export default conditionTags;
