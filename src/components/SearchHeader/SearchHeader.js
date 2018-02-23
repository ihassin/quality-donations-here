import React from "react";
import "./SearchHeader.css";
import { ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const SearchHeader = props => (

    <div id="search-header">
  <ButtonToolbar>
    <ToggleButtonGroup type="radio" name="options"  >
      <ToggleButton bsStyle="success" className="category-buttons" onChange={props.handleCategoryTagClick} value={"home"}>Home</ToggleButton>
      <ToggleButton bsStyle="success" className="category-buttons" onChange={props.handleCategoryTagClick} value={"fashion"}>Fashion</ToggleButton>
      <ToggleButton bsStyle="success" className="category-buttons" onChange={props.handleCategoryTagClick} value={"leisure"}>Leisure</ToggleButton>
      <ToggleButton bsStyle="success" className="category-buttons" onChange={props.handleCategoryTagClick} value={"tech"}>Tech</ToggleButton>
      <ToggleButton bsStyle="success" className="category-buttons" onChange={props.handleCategoryTagClick} value={"hobbies"}>Hobbies</ToggleButton>
      <ToggleButton bsStyle="success" className="category-buttons" onChange={props.handleCategoryTagClick} value={"books"}>Books</ToggleButton>
      <ToggleButton bsStyle="success" className="category-buttons" onChange={props.handleCategoryTagClick} value={"toys"}>Toys</ToggleButton>
      <ToggleButton bsStyle="success" className="category-buttons" onChange={props.handleCategoryTagClick} value={"exercise"}>Exercise</ToggleButton>
      <ToggleButton bsStyle="success" className="category-buttons" onChange={props.handleCategoryTagClick} value={"motors"}>Motors</ToggleButton>
      <ToggleButton bsStyle="success" className="category-buttons" onChange={props.handleCategoryTagClick} value={"car"}>Car</ToggleButton>
      <ToggleButton bsStyle="success" className="category-buttons" onChange={props.handleCategoryTagClick} value={"other"}>Other</ToggleButton>
    </ToggleButtonGroup>
  </ButtonToolbar>

   <ButtonToolbar>
      <ToggleButtonGroup type="radio" name="options"  >
      <ToggleButton bsStyle="primary" className="condition-buttons" onChange={props.handleConditionTagClick} value={"new"}>New</ToggleButton>
      <ToggleButton bsStyle="primary" className="condition-buttons" onChange={props.handleConditionTagClick} value={"like new"}>Like New</ToggleButton>
      <ToggleButton bsStyle="primary" className="condition-buttons" onChange={props.handleConditionTagClick} value={"very good"}>Very Good</ToggleButton>
      <ToggleButton bsStyle="primary" className="condition-buttons" onChange={props.handleConditionTagClick}value={"good"}>Good</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup type="radio" name="options"  >
      <ToggleButton bsStyle="info" className="age-buttons" onChange={props.handleAgeTagClick} value={"child"}>Child</ToggleButton>
      <ToggleButton bsStyle="info" className="age-buttons" onChange={props.handleAgeTagClick} value={"youth"}>Youth</ToggleButton>
      <ToggleButton bsStyle="info" className="age-buttons" onChange={props.handleAgeTagClick} value={"adult"}>Adult</ToggleButton>
      <ToggleButton bsStyle="info" className="age-buttons" onChange={props.handleAgeTagClick} value={"senior"}>Senior</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup type="radio" name="options"  >
        <ToggleButton bsStyle="warning" className="gender-buttons" onChange={props.handleGenderTagClick} value={"male"}>Male</ToggleButton>
        <ToggleButton bsStyle="warning" className="gender-buttons" onChange={props.handleGenderTagClick} value={"female"}>Female</ToggleButton>
    </ToggleButtonGroup>
    <ToggleButtonGroup type="radio" name="options"  >
      <ToggleButton bsStyle="danger" className="like-buttons" onChange={props.handleLikeTagClick} value={"Like"}>Like</ToggleButton>
    </ToggleButtonGroup>
  </ButtonToolbar>
  </div>

);

export default SearchHeader;