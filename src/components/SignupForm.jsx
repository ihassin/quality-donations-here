import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			firstname:'',
			lastname:'',
			email:'',
			confirmPassword: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		// TODO - validate!
		axios
			.post('/auth/signup', {
				username: this.state.username,
				password: this.state.password,
				firstname:this.state.firstname,
				lastname:this.state.lastname,
				email:this.state.email
			})
			.then(response => {
				console.log("sign up response", response)
				console.log("response", response);
				if (!response.data.error) {
					console.log('youre good')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="SignupForm page-content">
				<h1>Signup form</h1>
				<label htmlFor="firstname">Firstname: </label>
						<input
							type="text"
							name="firstname"
							value={this.state.firstname}
							onChange={this.handleChange}
						/>
						<label htmlFor="lastname">Lastname: </label>
						<input
							type="text"
							name="lastname"
							value={this.state.lastname}
							onChange={this.handleChange}
						/>
						<label htmlFor="email">Email: </label>
						<input
							type="text"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<label htmlFor="confirmPassword">Confirm Password: </label>
				<input
					type="password"
					name="confirmPassword"
					value={this.state.confirmPassword}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleSubmit}>Sign up</button>
			</div>
		)
	}
}

export default SignupForm
