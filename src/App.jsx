import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm'
import DonateForm from './pages/DonateForm'
import MyDonations from './pages/MyDonations'
import MyPickups from './pages/MyPickups'
import Shop from './pages/Shop'

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
				<Route exact path="/" render={() => <div><Navbar _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user} shop={true}/> <Shop /></div>} />
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
				<Route exact path="/donate" render={() => <div> <Navbar _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user}/> <DonateForm /> </div>} />
				<Route exact path="/mydonations" render={() => <div> <Navbar _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user}/> <MyDonations /> </div>} />
				<Route exact path="/mypickups" render={() => <div> <Navbar _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user}/> <MyPickups /> </div>} />
			</div>
		)
	}
}

export default App