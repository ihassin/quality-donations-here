import React from "react";
import "./DonationCard.css";
import { Button, Col } from 'react-bootstrap';

const DonationCard = props => (



    <Col md={4} >
      {/* <div className="shop-card"> */}
      <div className="shop-img-container">
          <img className="shop-img" src={props.image} alt={props.name}  />
      </div>
      <div id="shop-details">
      <p className="card-title text-center">{props.name}</p>
      <Button id="interested-button" onClick={props.handleInterested}>Yes... I'm Interested!</Button> 
      {/* <Button  onClick={props.handleLike} inline>Like it</Button> */}
      <p>{props.city}, {props.state} {props.zip}</p>
      </div>
      {/* </div> */}
    </Col>





  // <div className="card">
  //   <div className="img-container">
  //     <img alt={props.name} src={props.image} />
  //   </div>
  //   <div className="content">
  //     <ul>
  //       <li>
  //         <strong>Name:</strong> {props.name}
  //       </li>
  //       <li>
  //         <strong>Description:</strong> {props.occupation}
  //       </li>
  //       {/* <li>
  //         <strong>Location:</strong> {props.location}
  //       </li> */}
  //     </ul>
  //   </div>
  //   <span onClick={() => props.removeFriend(props.id)} className="remove">
  //     𝘅
  //   </span>
  // </div>
);

export default DonationCard;
