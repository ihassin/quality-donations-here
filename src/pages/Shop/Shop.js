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


  // componentWillReceiveProps = nextProps => {
  //   const searchobj = {name:nextProps.keyword, 
  //     categoryTag:this.state.categoryTag,
  //     conditionTag:this.state.conditionTag,
  //     ageTag:this.state.ageTag,
  //     genderTag:this.state.genderTag,
  //     city:this.state.city,
  //     zip:this.state.zip};
  //   this.loadDonations(searchobj);
  // }

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

  editDonation = id => {

  };

  deleteDonation = id => {

  };

  saveDonation = () => {

    };

  handleFormSubmit = event => {
    event.preventDefault();

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

  render() {
    return (
      <div>
      <SearchHeader handleAgeTagClick={this.handleAgeTagClick}/>
      <div id="Shop">
              {this.state.donations.map(donation => (
          <DonationCard
            removeFriend={this.removeFriend}
            id={donation._id}
            key={donation._id}
            name={donation.name}
            image={donation.url}
            occupation={donation.desc}
            location={donation.city}
          />
        ))}
        </div>
     
      </div>
    );
  }
}

export default Shop;
