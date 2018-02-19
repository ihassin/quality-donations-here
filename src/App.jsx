import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import './App.css'
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm'
import Header from './components/Header'
import Home from './components/Home'
import DonateForm from './pages/DonateForm'

const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar navbar-toggleable-md fixed-top navbar-light bg-faded">
				 <a className="navbar-brand" href="#">
    				<img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
    				Quality Donations
 				</a>

				<ul className="navbar-nav mr-auto">
				</ul>

				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/donate" className="nav-link">
							donate
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/mystuff" className="nav-link">
							my donations
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/mypickups" className="nav-link">
							my pickups
						</Link>
					</li>
					<li>
						<Link to="#" className="nav-link" onClick={props._logout}>
							logout
						</Link>
					</li>
				</ul>

		</nav>
		)
	} else {
		return (
			<nav className="navbar navbar-toggleable-md fixed-top navbar-light bg-faded">
				 <a className="navbar-brand" href="#">
    				<img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
    				Quality Donations
 				</a>
				 <ul className="navbar-nav mr-auto">
				</ul>
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							donate
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							sign up
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	render() {
		return (
			<div className="App">
				<Header user={this.state.user} />
				{/* LINKS to our different 'pages' */}
				<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user} />
				{/*  ROUTES */}
				{/* <Route exact path="/" component={Home} /> */}
				<Route exact path="/" render={() => <Home user={this.state.user} />} />
				<Route
					exact
					path="/login"
					render={() =>
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>}
				/>
				<Route exact path="/signup" component={SignupForm} />
				<Route exact path="/donate" component={DonateForm} />
				{/* <LoginForm _login={this._login} /> */}
			</div>
		)
	}
}

export default App
