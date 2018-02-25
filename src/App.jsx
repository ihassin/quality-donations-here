import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
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
			user: null,
			firstname:null,
			redirectTo: false,
			keyword:"",
			city:"",
			zip:""
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
				this.setState({
					loggedIn: false,
					user: null,
					firstname:null,
					redirectTo: true
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
				console.log("login", response.data)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user,
						firstname: response.data.user.firstname,
						redirectTo: false
					})
				}
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
		if (this.state.redirectTo) {
			return <div><Navbar _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user} shop={true} handleKeywordSearch={this.handleKeywordSearch} handleCityZipSearch={this.handleCityZipSearch}/> <Shop keyword={this.state.keyword} city={this.state.city} zip={this.state.zip}/></div>
		}
		return (
			<div className="App">
				<Route exact path="/" render={() => <div><Navbar _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user} shop={true} handleKeywordSearch={this.handleKeywordSearch} handleCityZipSearch={this.handleCityZipSearch} /> <Shop keyword={this.state.keyword} city={this.state.city} zip={this.state.zip}/></div>} />
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
				<Route exact path="/donate" render={() => <div> <Navbar _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user} donate={true}/> <DonateForm user={this.state.user} firstname={this.state.firstname}/> </div>} />
				<Route exact path="/mydonations" render={() => <div> <Navbar _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user}/> <MyDonations /> </div>} />
				<Route exact path="/mypickups" render={() => <div> <Navbar _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user}/> <MyPickups /> </div>} />
			</div>
		)
	}
}

export default App
