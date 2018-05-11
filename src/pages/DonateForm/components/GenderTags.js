import React from 'react';

const  genderTags = props => (

    <form className="pb-1 mb-2 border-bottom border-success font-weight-bold text-left">
    <div className="form-row">
      <div className="col-3 text-left">Gender</div>
      <div className="col-9">
        <div className="form-row">
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="genderTag"
                value="male"
                onChange={props.handleInputChange}
              />
              Male
            </label>
          </div>
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="genderTag"
                value="female"
                onChange={props.handleInputChange}
              />
              Female
            </label>
          </div>
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="genderTag"
                value="neutral"
                onChange={props.handleInputChange}
              />
              Neutral
            </label>
          </div>
        </div>
      </div>
    </div>
  </form>
);

export default genderTags;