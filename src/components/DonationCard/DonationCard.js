import React from "react";
import "./DonationCard.css";

const DonationCard = props => (

  <div className="col-md-4 col-sm-6">
       <div className="card" >
       <div className="shop-img-container">
        <img className="card-img-top shop-img" src={props.image} alt={props.nameDisplay}/>
        </div>
        <div className="card-body shop-details p-1">
            <p className="card-text card-title text-left">{props.nameDisplay} - <span id="desc">{props.desc}</span></p>
            <button className="text-center" id="interested-button" onClick={props.handleInterested}>Yes... I'm Interested!</button> 
            <p className="text-center">{props.city}, {props.state} {props.zip}</p>
        </div>
    </div>
  </div>
);

export default DonationCard;
