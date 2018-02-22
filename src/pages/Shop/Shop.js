import React, { Component } from "react";
import "./Shop.css";
import API from "../../utils/API";
import DonationCard from '../../components/DonationCard';
import SearchHeader from '../../components/SearchHeader';



class Shop extends Component {
  state = {
    donations:[],
    categoryTag:"",
    conditionTag:"",
    ageTag:"",
    genderTag:"",
    city:"",
    state:"",
    zip:""
  };

  componentDidMount() {
    this.loadDonations({});
  }

  componentWillReceiveProps(nextProps) {
    const searchobj = {name:nextProps.keyword, ageTag:this.state.ageTag, 
      conditionTag:this.state.conditionTag};
    this.loadDonations(searchobj);
  }

  // componentWillReceiveProps(nextProps) {
  //   const searchObj = {name:nextProps.keyword, 
  //     categoryTag:this.state.categoryTag, 
  //     conditionTag:this.state.conditionTag, 
  //     ageTag:this.state.ageTag, 
  //     genderTag:this.state.genderTag, 
  //     city:this.state.city, 
  //     state:this.state.state, zip:this.state.zip };
  //     console.log("searchobj", searchObj);
  //   this.loadDonations({searchObj});
  // }

  loadDonations(search) {
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
    this.setState({
      ageTag: event.text
    }, () => {
      const searchobj = {name:this.props.keyword, ageTag:this.state.ageTag, 
        conditionTag:this.state.conditionTag};
        this.loadDonations(searchobj);

      // const searchObj = {name: this.props.keyword, 
      //               categoryTag:this.state.categoryTag, 
      //               conditionTag:this.state.conditionTag, 
      //               ageTag:this.state.ageTag, 
      //               genderTag:this.state.genderTag, 
      //               city:this.state.city, 
      //               state:this.state.state, zip:this.state.zip }
        // this.loadDonations(searchObj);
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
