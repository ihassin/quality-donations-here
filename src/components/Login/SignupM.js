import React from "react";

const SignupM = props => (
  <div className="modal" id="signupModal">
    <div className="modal-dialog">
      <div className="modal-content">
      {/* Header */}
      {/* Logo */}
        <div className="modal-header">
          <img
            id="logo"
            src={require("../../images/qualitydonationslogo.png")}
            alt="Quality Donations Here"
          />
          <button className="close" data-dismiss="modal">
            &times;
          </button>
        </div>
        {/* Body */}
        <div className="modal-body">
          <form>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                {/* First Name */}
                  <input
                    className="form-control"
                    type="text"
                    id="signup-firstname-input"
                    placeholder="First Name"
                    name="signupFirstname"
                    value={props.signupFirstname}
                    onChange={props.handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                {/* Last Name */}
                  <input
                    className="form-control"
                    type="text"
                    id="signup-lastname-input"
                    placeholder="Last Name"
                    name="signupLastname"
                    value={props.signupLastname}
                    onChange={props.handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                {/* Email */}
                  <input
                    className="form-control"
                    type="email"
                    id="signup-email-input"
                    placeholder="Email"
                    name="signupEmail"
                    value={props.signupEmail}
                    onChange={props.handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                {/* Username */}
                  <input
                    className="form-control"
                    type="text"
                    id="signup-username-input"
                    placeholder="Username"
                    name="signupUsername"
                    value={props.signupUsername}
                    onChange={props.handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                {/* Password */}
                  <input
                    className="form-control"
                    type="password"
                    id="signup-password-input"
                    placeholder="Password"
                    name="signupPassword"
                    value={props.signupPassword}
                    onChange={props.handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                {/* Confirm Password */}
                  <input
                    className="form-control"
                    type="password"
                    id="signup-confirmPassword-input"
                    placeholder="Confirm Password"
                    name="signupconfirmPassword"
                    value={props.signupconfirmPassword}
                    onChange={props.handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
            {/* Sign up Button */}
              <button
                className="btn btn-success btn-block font-weight-bold"
                data-dismiss="modal"
                type="submit"
                id="signup-submit-button"
                onClick={props.handleSignupSubmit}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn btn-light" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default SignupM;
