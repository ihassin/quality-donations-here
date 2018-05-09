import React from "react";
import "./DonationCard.css";
import { Button, Col } from 'react-bootstrap';

const DonationCard = props => (



    <Col md={4} >
      <div className="shop-img-container">
          <img className="shop-img" src={props.image} alt={props.nameDisplay}  />
      </div>
      <div id="shop-details">
        <p className="card-title text-left">{props.nameDisplay} - <span id="desc">{props.desc}</span></p>
        <Button className="text-center" id="interested-button" onClick={props.handleInterested}>Yes... I'm Interested!</Button> 
        {/* <Button  onClick={props.handleLike} inline>Like it</Button> */}
        <p className="text-center">{props.city}, {props.state} {props.zip}</p>
      </div>
    </Col>

);

export default DonationCard;
