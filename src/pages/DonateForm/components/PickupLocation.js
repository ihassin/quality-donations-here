import React from 'react'

const pickupLocation = props => (
  <form className="font-weight-bold mx-4">
    <div className="form-row">
      <div className="col text-center mb-3">Pickup Day &amp; Time Frame</div>
    </div>
    <div className="form-row mb-2">
      <div className="col text-left">
        <select
          className="form-control"
          name="pickupLocationType"
          onChange={props.handleInputChange}
        >
          <option value="">select location type</option>
          <option value="residence">Residence</option>
          <option value="business">Business</option>
          <option value="police">Police Deptartment</option>
          <option value="fire">Fire Deptartment</option>
          <option value="placeOfWorship">Place of Worship</option>
        </select>
      </div>
    </div>
    <div className="form-row mb-2">
      <div className="col text-left">
        <select
          className="form-control"
          name="pickupDay"
          onChange={props.handleInputChange}
        >
          <option value="">select day of the week</option>
          <option value="sunday">Sunday</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
        </select>
      </div>
    </div>
    <div className="form-row">
      <div className="col-3 text-left form-inline pt-2">Between</div>
      <div className="col-3 text-center pr-0 pt-2">
        <input
          className="form-control"
          type="text"
          placeholder="0:00"
          name="pickupTimeStart"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="col-1 text-center pt-2">-</div>
      <div className="col-3 text-center pl-0 pt-2">
        <input
          className="form-control"
          type="text"
          placeholder="0:00"
          name="pickupTimeEnd"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="col-2 pl-5">
        <div className="form-row">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="radio"
              value="am"
              name="donorPickupAmPm"
              onChange={props.handleInputChange}
            />
            am
          </label>
        </div>
        <div className="form-row">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="radio"
              value="pm"
              name="donorPickupAmPm"
              onChange={props.handleInputChange}
            />
            pm
          </label>
        </div>
      </div>
    </div>
  </form>
)

export default pickupLocation
