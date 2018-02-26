import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import { Popover, Tooltip, Button, Modal, OverlayTrigger, Form, FormControl, Col, FormGroup } from 'react-bootstrap';
import './App.css'
import Navbar from './components/Navbar'
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm'
import DonateForm from './pages/DonateForm'
import MyDonations from './pages/MyDonations'
import MyPickups from './pages/MyPickups'
import Shop from './pages/Shop'
import googleButton from './components/Login/google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'

class App extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			loggedIn: false,
			user: null,
			firstname:null,
			redirectTo: false,
			keyword:"",
			city:"",
			zip:"",
			showLogIn: false
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
		this.handleKeywordSearch = this.handleKeywordSearch.bind(this)
		this.handleCityZipSearch = this.handleCityZipSearch.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				console.log("login", response.data)
				this.setState({
					loggedIn: true,
					user: response.data.user,
					firstname: response.data.user.firstname,
					redirectTo:false
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null,
					firstname: null,
					redirectTo: false
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			if (response.status === 200) {
				window.location.href = "/"
				this.setState({
					loggedIn: false,
					user: null,
					firstname:null,
					redirectTo: true
				})
			}
		});
		
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log("login", response.data)
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
					})
				}
			})
	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}


	handleLoginSubmit = event=> {
		event.preventDefault()
		this._login(this.state.username, this.state.password)
	}

	handleShowLogIn = () =>{
		this.setState({
			showLogIn: true
		})
	}

	handleCloseLogin = () => {
		this.setState({
			showLogIn: false
		})
	}


	handleKeywordSearch = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}



	handleCityZipSearch = event => {
		const { name, value } = event.target;

		// if value is not a number then it is city, otherwise zip
		if (isNaN(value.charAt(0))) {
			this.setState({
				city: value,
				zip:""
			});
		}else {
			this.setState({
				zip: value,
				city:""
			});
		}

	}




	render() {
		const popover = (
			<Popover id="modal-popover" title="popover">
			  very popover. such engagement
			</Popover>
		  );
		  const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
		if (this.state.redirectTo) {
			return <div><Navbar _logout={this._logout} handleShowLogIn={this.handleShowLogIn} loggedIn={this.state.loggedIn} user={this.state.user} shop={true} handleKeywordSearch={this.handleKeywordSearch} handleCityZipSearch={this.handleCityZipSearch}/> <Shop keyword={this.state.keyword} city={this.state.city} zip={this.state.zip}/></div>
		}
		return (
			<div className="App">
				<Route exact path="/" render={() => <div><Navbar _logout={this._logout}  handleShowLogIn={this.handleShowLogIn} loggedIn={this.state.loggedIn} user={this.state.user} shop={true} handleKeywordSearch={this.handleKeywordSearch} handleCityZipSearch={this.handleCityZipSearch} /> <Shop keyword={this.state.keyword} city={this.state.city} zip={this.state.zip}/></div>} />
				<Route
					exact
					path="/login"
					render={() =>
						<div>
						<Navbar _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user} />
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>
						</div>}
				/>
				<Route exact path="/signup" render={() => <div> <Navbar _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user} /> <SignupForm /> </div>} />
				<Route exact path="/donate" render={() => {
					console.log("Routing to /donate", this.state.firstname);
					 return (<div> 
						 <Navbar _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user} donate={true}/> 
						 <DonateForm user={this.state.user} firstname={this.state.firstname}/> 
					 </div>)}} />
				<Route exact path="/mydonations" render={() => <div> <Navbar _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user}/> <MyDonations /> </div>} /> 
				<Route exact path="/mypickups" render={() => <div> <Navbar _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user}/> <MyPickups /> </div>} />


		<Modal className="modal-container" show={this.state.showLogIn} onHide={this.handleCloseLogin}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">		
				<a href="#"><img id="logo" src={require("./images/qualitydonationslogo.png")}/></a>
			</Modal.Title>
          </Modal.Header>
          <Modal.Body>

			<Form horizontal>
				<FormGroup controlId="formHorizontalEmail">
					<Col md={12}>
					<FormControl type="email" 
					placeholder="Username" 
					name="username"
					value={this.state.username}
					onChange={this.handleChange} />
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPassword">
					<Col md={12}>
					<FormControl type="password" 
					placeholder="Password" 
					name="password"
					value={this.state.password}
					onChange={this.handleChange}/>
					</Col>
				</FormGroup>

				<FormGroup>
					<Col md={12}>
					<Button className="modal-submit" bsStyle="success" type="submit" onClick={this.handleLoginSubmit} >Login</Button>
					</Col>
				</FormGroup>
				<FormGroup>
				<Col md={6} xsOffset={2}>
					<a href="/auth/google">
						{/* <GoogleButton /> */}
						<img id="google-img" src={googleButton} alt="sign into Google Button" />
					</a>
					</Col>
				</FormGroup>
			</Form> 
           
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCloseLogin}>Close</Button>
          </Modal.Footer>
        </Modal>

			</div>
		)
	}
}

export default App


				
