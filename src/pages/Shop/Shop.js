import React, { Component } from "react";
import "./Shop.css";
import API from "../../utils/API";
import DonationCard from '../../components/DonationCard';
import SearchHeader from '../../components/SearchHeader';


class Shop extends Component {
  constructor() {
    super()
    this.categoryClick = "";
    this.conditionClick = "";
    this.ageClick = "";
    this.genderClick = "";
		this.state = {
      donations:[],
      categoryTag:"",
      conditionTag:"",
      ageTag:"",
      genderTag:"",
      home:"", 
      fashion:"", 
      jewelry:"", 
      books:"", 
      entertainment:"", 
      toys:"", 
      exercise:"", 
      tech:"", 
      motors:"", 
      cars:"", 
      other:"",
      new:"",
      likeNew: "",
      veryGood: "",
      good:"",
      baby:"",
      child:"",
      youth:"",
      adult:"",
      senior:"",
      male:"",
      female:"",
      neutral:"",   
      typingTimeout:null
		}
		this.loadDonations = this.loadDonations.bind(this)
	
	}

  componentDidMount() {
    console.log("Shop.js componentDidMount")
    this.loadDonations({});
  }


  componentWillReceiveProps = nextProps => {
    console.log("Shop.js componentWillReceiveProps")
    let searchobj = {name:nextProps.keyword, 
      pickupCity:nextProps.city, 
      pickupZip:nextProps.zip,
      categoryTag:this.state.categoryTag,
      conditionTag:this.state.conditionTag,
      ageTag:this.state.ageTag,
      genderTag:this.state.genderTag};

    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
   }
   this.setState({
      typingTimeout: setTimeout( () => {   
        this.loadDonations(searchobj);
        }, 1000)
   });
  }

 loadDonations = search => {
    API.getDonations(search)
      .then(res =>
        this.setState({ donations: res.data })
      )
      .catch(err => console.log(err));
  }

  handleCategoryTagClick = event => {
    event.preventDefault();
    this.setState({
      categoryTag: this.selectDeselectTag("category", event.target.value)
    }, () => {
      const searchobj = {name:this.props.keyword, 
          categoryTag:this.state.categoryTag,
          conditionTag:this.state.conditionTag,
          ageTag:this.state.ageTag,
          genderTag:this.state.genderTag,
          pickupCity:this.state.city,
          pickupZip:this.state.zip};
       this.loadDonations(searchobj);
    })
  };
  
  handleConditionTagClick = event => {
    event.preventDefault();

    this.setState({
      conditionTag: this.selectDeselectTag("condition", event.target.value)
    }, () => {
      const searchobj = {name:this.props.keyword, 
          categoryTag:this.state.categoryTag,
          conditionTag:this.state.conditionTag,
          ageTag:this.state.ageTag,
          genderTag:this.state.genderTag,
          pickupCity:this.state.city,
          pickupZip:this.state.zip};
       this.loadDonations(searchobj);
    })
  };
  
  handleAgeTagClick = event => {
    event.preventDefault();
    this.setState({
      ageTag: this.selectDeselectTag("age", event.target.value)
    }, () => {
      const searchobj = {name:this.props.keyword, 
          categoryTag:this.state.categoryTag,
          conditionTag:this.state.conditionTag,
          ageTag:this.state.ageTag,
          genderTag:this.state.genderTag,
          pickupCity:this.state.city,
          pickupZip:this.state.zip};
       this.loadDonations(searchobj);
    })
  };

  handleGenderTagClick = event => {
    event.preventDefault();
    this.setState({
      genderTag: this.selectDeselectTag("gender", event.target.value)
    }, () => {
      const searchobj = {name:this.props.keyword, 
          categoryTag:this.state.categoryTag,
          conditionTag:this.state.conditionTag,
          ageTag:this.state.ageTag,
          genderTag:this.state.genderTag,
          pickupCity:this.state.city,
          pickupZip:this.state.zip};
       this.loadDonations(searchobj);
    })
  };

  selectDeselectTag = (type, value) => {
    switch(type) {
      case "category":
        if (this.categoryClick === value) {
          // deselect
          this.setState({[value]:""}, () =>  this.categoryClick = "");
          return "";
        } else {
          if (this.categoryClick) {
            // select & deselect
            this.setState({[this.categoryClick]:"", [value]:value}, () => this.categoryClick = value);
            return value;
          } else {
            // select
            this.setState({[value]:value}, () => this.categoryClick = value);
            return value;
          }
        }
      case "condition": 
        if (this.conditionClick === value) {
          // deselect
          this.setState({[value]:""}, () =>  this.conditionClick = "");
          return "";
        } else {
          if (this.conditionClick) {
            // select & deselect
            this.setState({[this.conditionClick]:"", [value]:value}, () => this.conditionClick = value);
            return value;
          } else {
            // select
            this.setState({[value]:value}, () => this.conditionClick = value);
            return value;
          }
        }
      case "age": 
        if (this.ageClick === value) {
          // deselect
          this.setState({[value]:""}, () =>  this.ageClick = "");
          return "";
        } else {
          if (this.ageClick) {
            // select & deselect
            this.setState({[this.ageClick]:"", [value]:value}, () => this.ageClick = value);
            return value;
          } else {
            // select
            this.setState({[value]:value}, () => this.ageClick = value);
            return value;
          }
        }
      case "gender": 
        if (this.genderClick === value) {
          // deselect
          this.setState({[value]:""}, () =>  this.genderClick = "");
          return "";
        } else {
          if (this.genderClick) {
            // select & deselect
            this.setState({[this.genderClick]:"", [value]:value}, () => this.genderClick = value);
            return value;
          } else {
            // select
            this.setState({[value]:value}, () => this.genderClick = value);
            return value;
          }
        }
      default: return "";
    }


  }

  handleInteresed = () => {
    alert("I'm Interested");
  }

  handleLike = () => {
    alert("I Like it");
  }


  render() {
    return (
      <div className="container-fluid">
      <SearchHeader 
        home={this.state.home} 
        fashion={this.state.fashion}
        jewelry={this.state.jewelry}
        books={this.state.books}
        entertainment={this.state.entertainment}
        toys={this.state.toys}
        exercise={this.state.exercise}
        tech={this.state.tech}
        motors={this.state.motors}
        cars={this.state.cars}
        other={this.state.other}
        new={this.state.new}
        likeNew={this.state.likeNew}
        veryGood={this.state.veryGood}
        good={this.state.good}
        male={this.state.male}
        female={this.state.female}
        neutral={this.state.neutral}
        baby={this.state.baby}
        child={this.state.child}
        youth={this.state.youth}
        adult={this.state.adult}
        senior={this.state.senior}
        handleCategoryTagClick={this.handleCategoryTagClick} 
        handleConditionTagClick={this.handleConditionTagClick} 
        handleAgeTagClick={this.handleAgeTagClick} 
        handleGenderTagClick={this.handleGenderTagClick}/>
      <div id="shop">
      <div className="row">
        {this.state.donations.map(donation => (
          <DonationCard
            removeFriend={this.removeFriend}
            id={donation._id}
            key={donation._id}
            nameDisplay={donation.nameDisplay}
            image={donation.url}
            desc={donation.desc}
            city={donation.pickupCity}
            state={donation.pickupState}
            zip={donation.pickupZip}
            handleInteresed={this.handleInteresed}
            handleLike={this.handleLike}
          />
        ))}
        </div>
        </div>
     
      </div>
    );
  }
}

export default Shop;
