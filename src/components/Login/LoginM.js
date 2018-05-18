import React from "react";
import googleButton from "./google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png";

const LoginM = props => (
  <div className="modal" id="loginModal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
        {/* Logo */}
          <img
            id="logo"
            src={require("../../images/qualitydonationslogo.png")}
            alt="Quality Donations Here"
          />
          <button className="close" data-dismiss="modal">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                {/* Username */}
                  <input
                    className="form-control"
                    type="text"
                    id="login-username-input"
                    placeholder="Username"
                    name="username"
                    value={props.username}
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
                    placeholder="Password"
                    name="password"
                    id="login-password-input"
                    value={props.password}
                    onChange={props.handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
            {/* Login Button */}
              <button
                className="btn btn-success btn-block font-weight-bold"
                data-dismiss="modal"
                type="submit"
                id="login-submit-button"
                onClick={props.handleLoginSubmit}
              >
                Login
              </button>
            </div>
            <div className="form-group">
            {/* Google Login Button */}
              <a href="/auth/google">
                <img
                  id="google-img"
                  src={googleButton}
                  alt="sign into Google Button"
                />
              </a>
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

export default LoginM;
