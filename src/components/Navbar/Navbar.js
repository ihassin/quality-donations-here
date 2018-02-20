import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

const Navbar = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar navbar-toggleable-md fixed-top navbar-light bg-faded">
				 <a className="navbar-brand" href="#">
    				<img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
    				Quality Donations
 				</a>
                 {props.shop ? 
                      <form className="form-inline">
                      <input className="form-control form-rounded" type="text" id="search-input" placeholder="What are you looking for?"/>
                      {/* <input class="form-control" type="text" id="location-input" placeholder="city, state or zip"/> */}
                    </form>
                    : ""}
				<ul className="navbar-nav mr-auto">
				</ul>
                <ul className="nav">

                    {props.shop ? "" :
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            shop 
                        </Link>
                    </li>}

					<li className="nav-item">
						<Link to="/donate" className="nav-link">
							donate
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/mydonations" className="nav-link">
							my donations
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/mypickups" className="nav-link">
							my pickups
						</Link>
					</li>
                    <li>
                        <Link to="#" className="nav-link">
                            {props.user.local.username}
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
                {props.shop ? 
                      <form class="form-inline">
                      <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    : ""}

                    <ul className="nav">

                    {props.shop ? "" :
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            shop 
                        </Link>
                    </li>}

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

export default Navbar