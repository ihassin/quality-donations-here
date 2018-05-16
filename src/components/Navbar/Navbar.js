import React from 'react'
// import {
//   Navbar,
//   Nav,
//   NavItem,
//   NavDropdown,
//   MenuItem,
//   FormGroup,
//   FormControl,
//   ControlLabel
// } from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom'
import LoginM from '../Login/LoginM'
import SignupM from '../Login/SignupM'

const DonateNavbar = props => {
  if (props.loggedIn) {
    return (
      <nav className="navbar navbar-expand-md navbar-light p-0 m-0">
        <div className="container-fluid mx-2 my-2">
          <a className="navbar-brand p-0 mr-4 my-0" href="#">
            <img
              id="logo"
              src={require('../../images/qualitydonationslogo.png')}
            />
          </a>

          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNavForm"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavForm">
            {props.shop ? (
              <form className="form-inline">
                <input
                  type="text"
                  className="form-control mr-1"
                  id="keyword-search-input"
                  name="keyword"
                  onChange={props.handleKeywordSearch}
                  placeholder="What are you looking for?"
                />
                <input
                  type="text"
                  className="form-control mr-1"
                  id="cityZip-search-input"
                  name="keyword"
                  onChange={props.handleCityZipSearch}
                  placeholder="Enter City or Zip"
                />
              </form>
            ) : (
              ''
            )}

            {props.donate ? (
              <form className="form" id="donate-title">
                  Donate
              </form>
            ) : (
              ''
            )}

            <ul className="navbar-nav ml-auto">
              {props.shop ? (
                ''
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    shop
                  </a>
                </li>
              )}

              {props.donate ? (
                ''
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" id="donate-link" to="/donate">
                    donate
                  </Link>
                </li>
              )}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle rounded-circle"
                  data-toggle="dropdown"
                  href="#"
                >
                  {props.user.local.username}
                </a>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    My Donations
                  </a>
                  <a href="#" className="dropdown-item">
                    My Pickups
                  </a>
                  <a href="#" className="dropdown-item">
                    My Profile
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" onClick={props._logout}>
                  logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className="navbar navbar-expand-md navbar-light p-0 m-0">
        <div className="container-fluid mx-2 my-2">
          <a className="navbar-brand p-0 mr-4 my-0" href="#">
            <img
              id="logo"
              src={require('../../images/qualitydonationslogo.png')}
            />
          </a>

          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNavForm"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavForm">
            {props.shop ? (
              <form className="form-inline mr-1">
                <input
                  type="text"
                  className="form-control mr-sm-2"
                  id="keyword-search-input"
                  name="keyword"
                  onChange={props.handleKeywordSearch}
                  placeholder="What are you looking for?"
                />
                <input
                  type="text"
                  className="form-control mr-1"
                  id="cityZip-search-input"
                  name="keyword"
                  onChange={props.handleCityZipSearch}
                  placeholder="Enter City or Zip"
                />
              </form>
            ) : (
              ''
            )}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  // onClick={props.handleShowLogIn}
                  data-toggle="modal"
                  data-target="#loginModal"
                >
                  donate
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  // onClick={props.handleShowLogIn}
                  data-toggle="modal"
                  data-target="#loginModal"
                >
                  login
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  // onClick={props.handleShowSignup}
                  data-toggle="modal"
                  data-target="#signupModal"
                >
                  sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
        <LoginM
          username={props.username}
          password={props.password}
          handleChange={props.handleChange}
          handleLoginSubmit={props.handleLoginSubmit}
        />

        <SignupM
          signupFirstname={props.signupFirstname}
          signupLastname={props.signupLastname}
          signupEmail={props.signupEmail}
          signupUsername={props.signupUsername}
          signupPassword={props.signupPassword}
          signupconfirmPassword={props.signupconfirmPassword}
          handleChange={props.handleChange}
          handleSignupSubmit={props.handleSignupSubmit}
        />
      </nav>
    )
  }
}

export default DonateNavbar
