import React from "react";
import CategoryTags from "./CategoryTags";
import ConditionTags from "./ConditionTags";
import GenderTags from "./GenderTags";
import AgeTags from "./AgeTags";

const pictureTags = props => (
  <div id="picture-tags">
    <CategoryTags handleInputChange={props.handleInputChange}/>
    <ConditionTags handleInputChange={props.handleInputChange} />
    <GenderTags handleInputChange={props.handleInputChange} />
    <AgeTags handleInputChange={props.handleInputChange} />
  </div>
);

export default pictureTags;
