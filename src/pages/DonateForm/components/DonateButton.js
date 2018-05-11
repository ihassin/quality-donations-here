import React from 'react';

const donateButton = props => (
    <form>
    <div className="form-row ">
      <div className="col text-center mx-4">
      <button
          className="btn btn-success btn-block px-4 py-2"
          onClick={props.handleCreate}
        >
          Donate
        </button>
      </div>
    </div>
  </form>

);

export default donateButton;