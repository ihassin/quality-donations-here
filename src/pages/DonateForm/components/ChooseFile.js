import React from "react";

const chooseFile = props => (
  <form id="choose-file" className="ml-2 mb-4">
    <div className="form-row">
      <div className="col-8">
        <input
          type="file"
          className="form-control p-1 m-0 bg-transparent border border-success"
          id="file-chosen"
          onChange={props.handleFileChosen}
        />
      </div>
      <div className="col-4">
      <button
          className="btn btn-success float-left  px-4 py-2"
          onClick={props.handleUploadPicture}
        >
          Upload
        </button>
      </div>
    </div>
  </form>
);

export default chooseFile;


         
       