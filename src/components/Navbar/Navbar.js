import React from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom'
import LoginM from '../Login/LoginM';
import SignupM from '../Login/SignupM';


const DonateNavbar = props => {
  if (props.loggedIn) {
    return (
      <nav className="navbar navbar-expand-sm fixed-top">
        <div className="container">
          <a className="navbar-brand p-0 m-0 justify-context-center" href="#">
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
              <form className="form-inline my-2 my-lg-0 mx-auto">
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
                  className="form-control mr-sm-2"
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
              <Navbar.Form pullLeft>
                <FormGroup>
                  <ControlLabel id="donate-title">Donate</ControlLabel>
                </FormGroup>{' '}
              </Navbar.Form>
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

              {/* <NavDropdown
                eventKey={3}
                title={props.user.local.username}
                id="basic-nav-dropdown"
              >
                <MenuItem eventKey={3.1} href="#">
                  my donations
                </MenuItem>

                <MenuItem eventKey={3.2} href="#">
                  my pickups
                </MenuItem>
              </NavDropdown> */}

              <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle rounded-circle" data-toggle="dropdown" href="#">{props.user.local.username}</a>
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">My Donations</a>
                        <a href="#" className="dropdown-item">My Pickups</a>
                        <a href="#" className="dropdown-item">My Profile</a>
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

      /* { <Navbar fixedTop>
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

			}

			<NavDropdown eventKey={3} title={props.user.local.username} id="basic-nav-dropdown">

				<MenuItem eventKey={3.1} href="#">
					my donations
				</MenuItem>

				<MenuItem eventKey={3.2} href="#">
					my pickups
				</MenuItem>
			</NavDropdown>

			<NavItem eventKey={4} href="#" onClick={props._logout}>
				logout
			</NavItem>

		</Nav>
	</Navbar.Collapse>
</Navbar> } */
    )
  } else {
    return (
      <nav className="navbar navbar-expand-sm fixed-top">
        <div className="container">
          <a className="navbar-brand p-0 m-0" href="#">
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
              <form className="form-inline my-2 my-lg-0 mx-auto">
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
                  className="form-control mr-sm-2"
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
                  onClick={props.handleShowLogIn}
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

      //   <Navbar fixedTop>
      //     <Navbar.Header>
      //       <Navbar.Brand>
      //         <a href="#">
      //           <img
      //             id="logo"
      //             src={require('../../images/qualitydonationslogo.png')}
      //           />
      //         </a>
      //       </Navbar.Brand>
      //     </Navbar.Header>
      //     <Navbar.Collapse>
      //       {props.shop ? (
      //         <Navbar.Form pullLeft>
      //           <FormGroup>
      //             <FormControl
      //               type="text"
      //               id="keyword-search-input"
      //               name="keyword"
      //               onChange={props.handleKeywordSearch}
      //               placeholder="What are you looking for?"
      //             />
      //           </FormGroup>{' '}
      //           <FormGroup>
      //             <FormControl
      //               type="text"
      //               id="cityZip-search-input"
      //               name="keyword"
      //               onChange={props.handleCityZipSearch}
      //               placeholder="Enter City or Zip"
      //             />
      //           </FormGroup>{' '}
      //         </Navbar.Form>
      //       ) : (
      //         ''
      //       )}
      //       <Nav pullRight>
      //         {props.shop ? (
      //           ''
      //         ) : (
      //           <NavItem className="color-white" eventKey={1} href="/">
      //             shop
      //           </NavItem>
      //         )}

      //         <NavItem eventKey={2} href="#" onClick={props.handleShowLogIn}>
      //           donate
      //         </NavItem>

      //         <NavItem eventKey={3} href="#" onClick={props.handleShowLogIn}>
      //           login
      //         </NavItem>

      //         <NavItem eventKey={4} href="#" onClick={props.handleShowSignup}>
      //           sign up
      //         </NavItem>
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Navbar>
    )
  }
}

export default DonateNavbar
