import React, { Component } from "react";
import "./Shop.css";
import API from "../../utils/API";
import DonationCard from '../../components/DonationCard';
import SearchHeader from '../../components/SearchHeader';



class Shop extends Component {
  constructor() {
		super()
		this.state = {
      donations:[],
      categoryTag:"",
      conditionTag:"",
      ageTag:"",
      genderTag:"",
      city:"",
      state:"",
      zip:"",
      typingTimeout:null
		}
		this.loadDonations = this.loadDonations.bind(this)
	
	}

  componentDidMount() {
    this.loadDonations({});
  }


  componentWillReceiveProps = nextProps => {
    const city = "";
    const zip = "";
    let searchobj = {name:nextProps.keyword, city, zip,
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
      categoryTag: event.target.value
    }, () => {
      const searchobj = {name:this.props.keyword, 
          categoryTag:this.state.categoryTag,
          conditionTag:this.state.conditionTag,
          ageTag:this.state.ageTag,
          genderTag:this.state.genderTag,
          city:this.state.city,
          zip:this.state.zip};
       this.loadDonations(searchobj);
    })
  };
  
  handleConditionTagClick = event => {
    event.preventDefault();

    this.setState({
      conditionTag: event.target.value
    }, () => {
      const searchobj = {name:this.props.keyword, 
          categoryTag:this.state.categoryTag,
          conditionTag:this.state.conditionTag,
          ageTag:this.state.ageTag,
          genderTag:this.state.genderTag,
          city:this.state.city,
          zip:this.state.zip};
       this.loadDonations(searchobj);
    })
  };
  
  handleAgeTagClick = event => {
    event.preventDefault();
    console.log("handleagetag", event.target);

    this.setState({
      ageTag: event.target.value
    }, () => {
      const searchobj = {name:this.props.keyword, 
          categoryTag:this.state.categoryTag,
          conditionTag:this.state.conditionTag,
          ageTag:this.state.ageTag,
          genderTag:this.state.genderTag,
          city:this.state.city,
          zip:this.state.zip};
       this.loadDonations(searchobj);
    })
  };

  handleGenderTagClick = event => {
    event.preventDefault();

    this.setState({
      genderTag: event.target.value
    }, () => {
      const searchobj = {name:this.props.keyword, 
          categoryTag:this.state.categoryTag,
          conditionTag:this.state.conditionTag,
          ageTag:this.state.ageTag,
          genderTag:this.state.genderTag,
          city:this.state.city,
          zip:this.state.zip};
       this.loadDonations(searchobj);
    })
  };

  handleInteresed = () => {
    alert("I'm Interested");
  }

  handleLike = () => {
    alert("I Like it");
  }


  render() {
    return (
      <div className="container-fluid">
      <SearchHeader handleCategoryTagClick= {this.handleCategoryTagClick} handleConditionTagClick={this.handleConditionTagClick} handleAgeTagClick={this.handleAgeTagClick} handleGenderTagClick={this.handleGenderTagClick}/>
      <div id="shop">
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
    );
  }
}

export default Shop;
