import React from "react";
import "./SearchHeader.css";
import { ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const SearchHeader = props => (

    <div id="search-header">
  <ButtonToolbar>
    <ToggleButtonGroup type="radio" name="options"  >
      <ToggleButton className="category-buttons" value={1}>Home</ToggleButton>
      <ToggleButton className="category-buttons" value={2}>Fashion</ToggleButton>
      <ToggleButton className="category-buttons" value={3}>Leisure</ToggleButton>
      <ToggleButton className="category-buttons" value={4}>Tech</ToggleButton>
      <ToggleButton className="category-buttons" value={5}>Hobbies</ToggleButton>
      <ToggleButton className="category-buttons" value={6}>Books</ToggleButton>
      <ToggleButton className="category-buttons" value={7}>Toys</ToggleButton>
      <ToggleButton className="category-buttons" value={8}>Exercise</ToggleButton>
      <ToggleButton className="category-buttons" value={9}>Motors</ToggleButton>
      <ToggleButton className="category-buttons" value={10}>Car</ToggleButton>
      <ToggleButton className="category-buttons" value={11}>Other</ToggleButton>
    </ToggleButtonGroup>
  </ButtonToolbar>

   <ButtonToolbar>
      <ToggleButtonGroup type="radio" name="options"  >
      <ToggleButton className="condition-buttons" value={1}>New</ToggleButton>
      <ToggleButton className="condition-buttons" value={2}>Like New</ToggleButton>
      <ToggleButton className="condition-buttons" value={3}>Very Good</ToggleButton>
      <ToggleButton className="condition-buttons" value={4}>Good</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup type="radio" name="options"  >
      <ToggleButton  className="age-buttons" onClick={props.handleAgeTagClick} value={1}>Child</ToggleButton>
      <ToggleButton  className="age-buttons" value={2}>Youth</ToggleButton>
      <ToggleButton  className="age-buttons" value={3}>Adult</ToggleButton>
      <ToggleButton  className="age-buttons" value={4}>Senior</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup type="radio" name="options"  >
        <ToggleButton className="gender-buttons" value={1}>Male</ToggleButton>
        <ToggleButton className="gender-buttons" value={2}>Female</ToggleButton>
    </ToggleButtonGroup>
    <ToggleButtonGroup type="radio" name="options"  >
      <ToggleButton className="like-buttons" value={1}>Like</ToggleButton>
    </ToggleButtonGroup>
  </ButtonToolbar>
  </div>

);

export default SearchHeader;