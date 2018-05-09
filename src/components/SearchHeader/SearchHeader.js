import React from "react";
import "./SearchHeader.css";
import {ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const SearchHeader = props => (

  <div id="search-header" className="container">
  <div className="row p-0 m-0">
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="home" id={props.home} onClick={props.handleCategoryTagClick} >Home</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="fashion" id={props.fashion} onClick={props.handleCategoryTagClick}>Fashion</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="jewelry" id={props.jewelry} onClick={props.handleCategoryTagClick}>Jewelry</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="books" id={props.books} onClick={props.handleCategoryTagClick}>Books</button> </div>
      <div className="col-md-2 col-sm-4 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="entertainment" id={props.entertainment} onClick={props.handleCategoryTagClick}>Entertainment</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="toys" id={props.toys} onClick={props.handleCategoryTagClick}>Toys</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="exercise" id={props.exercise} onClick={props.handleCategoryTagClick}>Exercise</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="tech" id={props.tech} onClick={props.handleCategoryTagClick}>Tech</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="motors" id={props.motors} onClick={props.handleCategoryTagClick}>Motors</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="cars" id={props.cars} onClick={props.handleCategoryTagClick}>Cars</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="other" id={props.other} onClick={props.handleCategoryTagClick}>Other</button> </div>
    </div>
    <div className="row p-0 m-0">
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-primary btn-block p-1 m-0" value="new" id={props.new} onClick={props.handleConditionTagClick}>New</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-primary btn-block p-1 m-0" value="likeNew" id={props.likeNew} onClick={props.handleConditionTagClick}>Like New</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-primary btn-block p-1 m-0" value="veryGood" id={props.veryGood} onClick={props.handleConditionTagClick}>Very Good</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-primary btn-block p-1 m-0" value="good" id={props.good} onClick={props.handleConditionTagClick}>Good</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-gender btn-block p-1 m-0" value="male" id={props.male} onClick={props.handleGenderTagClick} >Male</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-gender btn-block p-1 m-0" value="female" id={props.female} onClick={props.handleGenderTagClick} >Female</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-gender btn-block p-1 m-0" value="neutral" id={props.neutral} onClick={props.handleGenderTagClick}>Neutral</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-info btn-block p-1 m-0" value="baby" id={props.baby} onClick={props.handleAgeTagClick}>Baby</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-info btn-block p-1 m-0" value="child" id={props.child} onClick={props.handleAgeTagClick}>Child</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-info btn-block p-1 m-0" value="youth" id={props.youth} onClick={props.handleAgeTagClick}>Youth</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-info btn-block p-1 m-0" value="adult" id={props.adult} onClick={props.handleAgeTagClick}>Adult</button> </div>
      <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-info btn-block p-1 m-0" value="senior" id={props.senior} onClick={props.handleAgeTagClick}>Senior</button> </div>
    </div>
</div>

);

export default SearchHeader;