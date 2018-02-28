import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import "./Navbar.css";
import {Link} from 'react-router-dom';

const DonateNavbar = props => {
	if (props.loggedIn) {
		return (

<Navbar fixedTop>
	<Navbar.Header>
		<Navbar.Brand>
		<a href="#"><img id="logo" src={require("../../images/qualitydonationslogo.png")}/></a>
		</Navbar.Brand>
	</Navbar.Header>
	<Navbar.Collapse>
		{props.shop ? 
			<Navbar.Form pullLeft>
				<FormGroup>
					<FormControl type="text" id="keyword-search-input" name="keyword" onChange={props.handleKeywordSearch} placeholder="What are you looking for?" />
				</FormGroup>{' '}
				<FormGroup>
					<FormControl type="text" id="cityZip-search-input" name="keyword" onChange={props.handleCityZipSearch} placeholder="Enter City or Zip" />
				</FormGroup>{' '}
			</Navbar.Form>
			: ""}
			{props.donate ? 
			<Navbar.Form pullLeft>
				<FormGroup>
					<ControlLabel id="donate-title">Donate</ControlLabel>
				</FormGroup>{' '}
			</Navbar.Form>
			: ""}
			<Nav pullRight>
			{props.shop ? "" :
				<NavItem eventKey={1} href="/">
							shop 
				</NavItem>
				}

			{props.donate ? "" :
				<NavItem eventKey={2} href="#">
					<Link id="donate-link" to="/donate">
						donate
					</Link>
				 </NavItem>
				// <NavItem eventKey={2} href="/donate">
				// 		donate
				// </NavItem>
				
			}

			<NavDropdown eventKey={3} title={props.user.local.username} id="basic-nav-dropdown">
				{/* <MenuItem eventKey={3.1} href="/mydonations"> */}
				<MenuItem eventKey={3.1} href="#">
					my donations
				</MenuItem>
				{/* <MenuItem eventKey={3.2} href="/mypickups"> */}
				<MenuItem eventKey={3.2} href="#">
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

<Navbar fixedTop>
  <Navbar.Header>
    <Navbar.Brand>
	<a href="#"><img id="logo" src={require("../../images/qualitydonationslogo.png")}/></a>
    </Navbar.Brand>
  </Navbar.Header>
	<Navbar.Collapse>
		{props.shop ? 
			<Navbar.Form pullLeft>
				<FormGroup>
				<FormControl type="text" id="keyword-search-input" name="keyword" onChange={props.handleKeywordSearch} placeholder="What are you looking for?" />
				</FormGroup>{' '}
				<FormGroup>
					<FormControl type="text" id="cityZip-search-input" name="keyword" onChange={props.handleCityZipSearch} placeholder="Enter City or Zip" />
				</FormGroup>{' '}
			</Navbar.Form>
			: ""}
			<Nav pullRight>
			{props.shop ? "" :
				<NavItem className="color-white" eventKey={1} href="/">
							shop 
				</NavItem>
				}

				<NavItem eventKey={2} href="#" onClick={props.handleShowLogIn}>
						donate
				</NavItem>

				<NavItem eventKey={3} href="#" onClick={props.handleShowLogIn}>
					login
				</NavItem>

				<NavItem eventKey={4} href="#" onClick={props.handleShowSignup}>
						sign up 
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>

		)
	}
}

export default DonateNavbar