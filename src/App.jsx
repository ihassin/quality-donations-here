import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import DonateForm from "./pages/DonateForm";
import MyDonations from "./pages/MyDonations";
import MyPickups from "./pages/MyPickups";
import Shop from "./pages/Shop";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loggedIn: false,
      user: null,
      firstname: null,
      redirectTo: false,
      keyword: "",
      city: "",
      zip: "",
      showLogIn: false,
      signupFirstname: "",
      signupLastname: "",
      signupEmail: "",
      signupUsername: "",
      signupPassword: "",
      signupconfirmPassword: "",
      showSignup: false
    };
    this._logout = this._logout.bind(this);
    this._login = this._login.bind(this);
    this.handleKeywordSearch = this.handleKeywordSearch.bind(this);
    this.handleCityZipSearch = this.handleCityZipSearch.bind(this);
  }
  componentDidMount() {
    axios.get("/auth/user").then(response => {
      console.log(response.data);
      if (!!response.data.user) {
        console.log("THERE IS A USER");
        console.log("login", response.data);
        this.setState({
          loggedIn: true,
          user: response.data.user,
          firstname: response.data.user.firstname,
          redirectTo: false
        });
      } else {
        this.setState({
          loggedIn: false,
          user: null,
          firstname: null,
          redirectTo: false
        });
      }
    });
  }

  _logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios.post("/auth/logout").then(response => {
      if (response.status === 200) {
        window.location.href = "/";
        this.setState({
          loggedIn: false,
          user: null,
          firstname: null,
          redirectTo: true
        });
      }
    });
  }

  _login(username, password) {
    axios
      .post("/auth/login", {
        username,
        password
      })
      .then(response => {
        console.log("login", response.data);
        if (response.status === 200) {
          // close login modal
          this.handleCloseLogin();
          var fName = response.data.user.firstname;
          // update the state
          this.setState({
            loggedIn: true,
            user: response.data.user,
            firstname: fName,
            redirectTo: false
          });
        }
      });
  }

  handleChange = event => {
    console.log("handlechange");
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleLoginSubmit = event => {
    event.preventDefault();
    console.log("this.handleLoginSubmit", this.state.username);
    this._login(this.state.username, this.state.password);
  }

  handleShowLogIn = () => {
    this.setState({
      showLogIn: true
    });
  }

  handleCloseLogin = () => {
    this.setState({
      showLogIn: false
    });
  }

  handleSignupSubmit = event => {
    console.log("handleSignupSubmit");
    event.preventDefault();
    // TODO - validate!
    axios
      .post("/auth/signup", {
        username: this.state.signupUsername,
        password: this.state.signupPassword,
        firstname: this.state.signupFirstname,
        lastname: this.state.signupLastname,
        email: this.state.signupEmail
      })
      .then(response => {
        this.handleCloseSignup();
      });

    // const signupObj = {
    // 	username: this.state.signupUsername,
    // 	password: this.state.signupPassword,
    // 	firstname:this.state.signupFirstname,
    // 	lastname:this.state.signupLastname,
    // 	email:this.state.signupEmail

    // API.signup(signupObj).then(response => {
    // 	this.handleCloseSignup();
    //   })
  }

  handleShowSignup = () => {
    this.setState({
      showSignup: true
    });
  }

  handleCloseSignup = () => {
    this.setState({
      showSignup: false,
      signupFirstname: "",
      signupLastname: "",
      signupEmail: "",
      signupUsername: "",
      signupPassword: "",
      signupconfirmPassword: ""
    });
  }

  handleKeywordSearch = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleCityZipSearch = event => {
    const { value } = event.target;

    // if value is not a number then it is city, otherwise zip
    if (isNaN(value.charAt(0))) {
      this.setState({
        city: value,
        zip: ""
      });
    } else {
      this.setState({
        zip: value,
        city: ""
      });
    }
  }

  render() {
    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     very popover. such engagement
    //   </Popover>
    // )
    // const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>
    if (this.state.redirectTo) {
      return (
        <div>
          <Navbar
            _logout={this._logout}
            handleShowLogIn={this.handleShowLogIn}
            handleLoginSubmit={this.handleLoginSubmit}
            username={this.state.username}
            password={this.state.password}
            handleChange={this.handleChange}
            handleShowSignup={this.handleShowSignup}
            signupFirstname={this.state.signupFirstname}
            signupLastname={this.state.signupLastname}
            signupEmail={this.state.signupEmail}
            signupUsername={this.state.signupUsername}
            signupPassword={this.state.signupPassword}
            signupconfirmPassword={this.state.signupconfirmPassword}
            handleSignupSubmit={this.handleSignupSubmit}
            loggedIn={this.state.loggedIn}
            user={this.state.user}
            shop={true}
            handleKeywordSearch={this.handleKeywordSearch}
            handleCityZipSearch={this.handleCityZipSearch}
          />{" "}
          <Shop
            keyword={this.state.keyword}
            city={this.state.city}
            zip={this.state.zip}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Navbar
                _logout={this._logout}
                handleShowLogIn={this.handleShowLogIn}
                handleLoginSubmit={this.handleLoginSubmit}
                username={this.state.username}
                password={this.state.password}
                handleChange={this.handleChange}
                handleShowSignup={this.handleShowSignup}
                signupFirstname={this.state.signupFirstname}
                signupLastname={this.state.signupLastname}
                signupEmail={this.state.signupEmail}
                signupUsername={this.state.signupUsername}
                signupPassword={this.state.signupPassword}
                signupconfirmPassword={this.state.signupconfirmPassword}
                handleSignupSubmit={this.handleSignupSubmit}
                loggedIn={this.state.loggedIn}
                user={this.state.user}
                shop={true}
                handleKeywordSearch={this.handleKeywordSearch}
                handleCityZipSearch={this.handleCityZipSearch}
              />{" "}
              <Shop
                keyword={this.state.keyword}
                city={this.state.city}
                zip={this.state.zip}
              />
            </div>
          )}
        />
        <Route
          exact
          path="/donate"
          render={() => {
            return (
              <div>
                <Navbar
                  _logout={this._logout}
                  loggedIn={this.state.loggedIn}
                  user={this.state.user}
                  donate={true}
                />
                <DonateForm user={this.state.user} />
              </div>
            );
          }}
        />
        <Route
          exact
          path="/mydonations"
          render={() => (
            <div>
              {" "}
              <Navbar
                _logout={this._logout}
                loggedIn={this.state.loggedIn}
                user={this.state.user}
              />{" "}
              <MyDonations />{" "}
            </div>
          )}
        />
        <Route
          exact
          path="/mypickups"
          render={() => (
            <div>
              {" "}
              <Navbar
                _logout={this._logout}
                loggedIn={this.state.loggedIn}
                user={this.state.user}
              />{" "}
              <MyPickups />{" "}
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
