import React, {Component} from "react";
import "./SearchHeader.css";
import {ButtonToolbar, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

// const CATEGORY = "category-button-selected";
// const CONDTION = "condition-button-selected";
// const AGE = "age-button-selected";
// const GENDER = "gender-button-selected";




class SearchHeader extends Component {
  state = {
    home: "",
    fashion: "",
    new: "",
    likeNew: "",
    male: "",
    femaile: "",
    child: ""
  }

  onClickHandler = (event) => {
    console.log("event.target", event.target);
    console.log("event.target.value", event.target.value);

      switch(event.target.value) {
        case "home": this.setState({home: this.state.home ? "" : "home"});
            break;
        case "fashion": this.setState({fashion: this.state.fashion ? "" : "fashion"});
            break;
        case "new": this.setState({new: this.state.new ? "" : "new"});
            break;
        case "likeNew": this.setState({likeNew: this.state.likeNew ? "" : "likeNew"});
            break;
        case "male": this.setState({male: this.state.male ? "" : "male"});
            break;
        case "female": this.setState({female: this.state.female ? "" : "female"});
            break;
        case "child": this.setState({child: this.state.child ? "" : "child"});
            break;
        default:
            
      }
      
    }


 
  render() {
    return (
      <div id="search-header" className="container">
        <div className="row p-0 m-0">
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="home" id={this.state.home} onClick={this.onClickHandler} >Home</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="fashion" id={this.state.fashion} onClick={this.onClickHandler}>Fashion</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="jewelry" id={this.state.jewelry}>Jewelry</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="books" id={this.state.books}>Books</button> </div>
            <div className="col-md-2 col-sm-4 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="entertainment" id={this.state.entertainment}>Entertainment</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="toys" id={this.state.toys}>Toys</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="exercise" id={this.state.exercise}>Exercise</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="tech" id={this.state.tech}>Tech</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="motors" id={this.state.motors}>Motors</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="cars" id={this.state.cars}>Cars</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-success btn-block p-1 m-0" value="other" id={this.state.other}>Other</button> </div>
          </div>
          <div className="row p-0 m-0">
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-primary btn-block p-1 m-0" value="new" id={this.state.new} onClick={this.onClickHandler}>New</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-primary btn-block p-1 m-0" value="likeNew" id={this.state.likeNew} onClick={this.onClickHandler}>Like New</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-primary btn-block p-1 m-0" value="veryGood" id={this.state.veryGood}>Very Good</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-primary btn-block p-1 m-0" value="good" id={this.state.good}>Good</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-gender btn-block p-1 m-0" value="male" id={this.state.male} onClick={this.onClickHandler} >Male</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-gender btn-block p-1 m-0" value="female" id={this.state.female} onClick={this.onClickHandler} >Female</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-gender btn-block p-1 m-0" value="neutral" id={this.state.neutral}>Neutral</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-info btn-block p-1 m-0" value="baby" id={this.state.baby}>Baby</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-info btn-block p-1 m-0" value="child" id={this.state.child} onClick={this.onClickHandler}>Child</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-info btn-block p-1 m-0" value="youth" id={this.state.youth}>Youth</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-info btn-block p-1 m-0" value="adult" id={this.state.adult}>Adult</button> </div>
            <div className="col-md-1 col-sm-2 search-button"><button type="button" className="btn btn-info btn-block p-1 m-0" value="senior" id={this.state.senior}>Senior</button> </div>
          </div>
      </div>
    );
  }


};

export default SearchHeader;