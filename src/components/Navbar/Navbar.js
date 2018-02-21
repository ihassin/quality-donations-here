import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
import "./Navbar.css";

const DonateNavbar = props => {
	if (props.loggedIn) {
		return (

<Navbar>
	<Navbar.Header>
		<Navbar.Brand>
		<a href="#home">Quality Donations</a>
		</Navbar.Brand>
	</Navbar.Header>
	<Navbar.Collapse>
		{props.shop ? 
			<Navbar.Form pullLeft>
				<FormGroup>
					<FormControl type="text" id="keyword-search-input" name="keyword" onChange={props.handleKeywordSearch} placeholder="What are you looking for?" />
				</FormGroup>{' '}
			</Navbar.Form>
			: ""}
			<Nav pullRight>
			{props.shop ? "" :
				<NavItem eventKey={1} href="/">
							shop 
				</NavItem>
				}

			<NavItem eventKey={2} href="/donate">
				donate
			</NavItem>

			<NavDropdown eventKey={3} title={props.user.local.username} id="basic-nav-dropdown">
				<MenuItem eventKey={3.1} href="/mydonations">
					my donations
				</MenuItem>
				<MenuItem eventKey={3.2} href="/mypickups">
					my pickups
				</MenuItem>
			</NavDropdown>

			<NavItem eventKey={4} href="#" onClick={props._logout}>
				logout
			</NavItem>

		</Nav>
	</Navbar.Collapse>
</Navbar>

		)
	} else {
		return (

<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Quality Donations</a>
    </Navbar.Brand>
  </Navbar.Header>
	<Navbar.Collapse>
		{props.shop ? 
			<Navbar.Form pullLeft>
				<FormGroup>
				<FormControl type="text" id="keyword-search-input" name="keyword" onChange={props.handleKeywordSearch} placeholder="What are you looking for?" />
				</FormGroup>{' '}
			</Navbar.Form>
			: ""}
			<Nav pullRight>
			{props.shop ? "" :
				<NavItem eventKey={1} href="/">
							shop 
				</NavItem>
				}
				<NavItem eventKey={2} href="/login">
						donate
				</NavItem>

				<NavItem eventKey={3} href="/login">
						login
				</NavItem>

				<NavItem eventKey={4} href="/signup">
						sign up 
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>

		)
	}
}

export default DonateNavbar