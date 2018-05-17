import React from "react";

const categoryTags = props => (
  <form className="pb-1 mb-2 border-bottom border-success font-weight-bold text-left">
    <div className="form-row">
      <div className="col-3 text-left">Category</div>
      <div className="col-9">
        <div className="form-row">
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="categoryTag"
                value="home"
                onChange={props.handleInputChange}
              />
              Home
            </label>
          </div>
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="categoryTag"
                value="fashion"
                onChange={props.handleInputChange}
              />
              Fashion
            </label>
          </div>
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="categoryTag"
                value="jewelry"
                onChange={props.handleInputChange}
              />
              Jewelry
            </label>
          </div>
        </div>
      </div>
    </div>
    <div className="form-row">
      <div className="col-3" />
      <div className="col-9">
        <div className="form-row">
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="categoryTag"
                value="books"
                onChange={props.handleInputChange}
              />
              Books
            </label>
          </div>
          <div className="col-8 text-left">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="categoryTag"
                value="entertainment"
                onChange={props.handleInputChange}
              />
              Entertainment
            </label>
          </div>
        </div>
      </div>
    </div>
    <div className="form-row">
      <div className="col-3" />
      <div className="col-9">
        <div className="form-row">
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="categoryTag"
                value="toys"
                onChange={props.handleInputChange}
              />
              Toys
            </label>
          </div>
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="categoryTag"
                value="exercise"
                onChange={props.handleInputChange}
              />
              Exercise
            </label>
          </div>
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="categoryTag"
                value="tech"
                onChange={props.handleInputChange}
              />
              Tech
            </label>
          </div>
        </div>
      </div>
    </div>
    <div className="form-row">
      <div className="col-3" />
      <div className="col-9">
        <div className="form-row">
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="categoryTag"
                value="motors"
                onChange={props.handleInputChange}
              />
              Motors
            </label>
          </div>
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="categoryTag"
                value="cars"
                onChange={props.handleInputChange}
              />
              Cars
            </label>
          </div>
          <div className="col-4">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="categoryTag"
                value="other"
                onChange={props.handleInputChange}
              />
              Other
            </label>
          </div>
        </div>
      </div>
    </div>
  </form>
);

export default categoryTags;
