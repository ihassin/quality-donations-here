import React, { Component } from "react";
import { Row, Col, Button, Form, FormControl, ControlLabel, Radio, Checkbox } from 'react-bootstrap';
import API from "../../utils/API";
import "./DonateForm.css";
import Noty from 'noty';


class DonateForm extends Component {
  state = {
    file:null,
    nameDisplay:"",
    name:"",
    desc:"",
    url: "",
    categoryTag:"",
    conditionTag:"",
    ageTag:"",
    genderTag:"",
    pickupAddress1:"",
    pickupAddress2:"",
    pickupCity:"",
    pickupState:"",
    pickupZip:"",
    pickupLocationType:"",
    pickupDay:"sunday",
    pickupTimeStart:"",
    pickupTimeEnd:"", 
    donorPickupAmPm:"",
    donorPickupComments:"",
    doneePickupComments:"",
    doneePickupTime:"",
    doneePickupAmPm:"",
    donorPickupConfirmed: false,
    doneePickupConfirmed:false,
    donationComplete:false,
    donorUser:"",
    donorFirstname:"",
    datePosted: (new Date().getMonth() + 1)  + "/" + new Date().getDate() + "/" + new Date().getFullYear()
   
    

    // doneeId
    // doneeFirstName
    // Not working:
    // donorPickupConfirmed: false,
    // doneePickupConfirmed:false,
    // donationComplete:false
  };

  componentWillReceiveProps = nextProps => {
    console.log("nextPRops", nextProps);
    this.setState({
      donorUser:nextProps.user.local.username,
      donorFirstname:nextProps.firstname
    })


  }

  componentDidMount() {

  }

  handleEdit = id => {

  };

  handleDelete = id => {

  };

  handleCreate = () => {
    const donateObj = {
      name:this.state.name,
      nameDisplay:this.state.nameDisplay,
      desc:this.state.desc,
      url: this.state.url,
      donorUser: this.state.donorUser,
      // donorFirstname: this.state.donorFirstname,
      categoryTag:this.state.categoryTag,
      conditionTag:this.state.conditionTag,
      ageTag:this.state.ageTag,
      genderTag:this.state.genderTag,
      pickupAddress1:this.state.pickupAddress1,
      pickupAddress2:this.state.pickupAddress2,
      pickupCity:this.state.pickupCity,
      pickupState:this.state.pickupState,
      pickupZip:this.state.pickupZip,
      pickupLocationType:this.state.pickupLocationType,
      pickupDay:this.state.pickupDay,
      pickupTimeStart:this.state.pickupTimeStart,
      pickupTimeEnd:this.state.pickupTimeEnd, 
      donorPickupAmPm:this.state.donorPickupAmPm,
      donorPickupComments:this.state.donorPickupComments,
      doneePickupComments:this.state.doneePickupComments,
      doneePickupTime:this.state.doneePickupTime,
      doneePickupAmPm:this.state.doneePickupAmPm
    }
    console.log("handleCreate", donateObj);
    API.saveDonation(donateObj)
    .then(res =>
      window.location.href = "/"

      // this.setState({ donations: res.data })

        //   new Noty({
        //     // type: 'success',
        //     text: 'Donation Added Sucessfully!',
        //     animation: {
        //         open: 'animated bounceInRight', // Animate.css class names
        //         close: 'animated bounceOutRight' // Animate.css class names
        //     }
        // }).show()

    )
    .catch(err => console.log(err)); 
  }






  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleNameChange = event => {
    const name = event.target.value.toLowerCase();
    const nameDisplay = event.target.value
    this.setState({
      name,
      nameDisplay
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

  };

  handleFileChosen = event => {
    console.log("handleFileChosen", event.target.files[0]);
    this.setState({
      file:event.target.files[0]
    })
  }

  handleUploadPicture = event => {
    event.preventDefault();
   
    const formData = new FormData();
    console.log("this.state.file", this.state.file);
    formData.append('file',this.state.file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

    API.uploadPicture(formData, config).then(response => {
      console.log("uploadPicture", response);
      this.setState({
        url: response.data[0].url
      })
    })
  }

  

  render() {
    return (
  
<div className="page-content">
  <Form id="donate-form" horizontal>
    <Row className="show-grid">
      <Col componentClass={ControlLabel} md={4}>
        <FormControl type="file" id="file-chosen" onChange={this.handleFileChosen} />
      </Col>
      <Col componentClass={ControlLabel} md={1}>
        <ControlLabel className="size18-bolder pull-left">Type</ControlLabel>
      </Col>
      <Col componentClass={ControlLabel} md={2}>
        <FormControl className="pull-left" type="text" id="type-input" name="nameDisplay" onChange={this.handleNameChange} />
      </Col>
      <Col componentClass={ControlLabel} md={2}>
        <ControlLabel className="size18-bolder pull-left">Date Posted</ControlLabel>
      </Col>
      <Col componentClass={ControlLabel} md={2}>
      <FormControl className="pull-left" type="text" id="date-posted" value={this.state.datePosted} name="datePosted" readOnly />
      </Col>
    </Row>

    <Row className="show-grid">
      <Col componentClass={ControlLabel} md={4}>
        <Button className="pull-left" id="upload-picture" onClick={this.handleUploadPicture} bsStyle="success">Upload Picture</Button>
      </Col>
      <Col componentClass={ControlLabel} md={1}>
        <ControlLabel className="size18-bolder pull-left">Desc</ControlLabel>
      </Col>
      <Col componentClass={ControlLabel} md={6}>
        <FormControl className="pull-left" type="text" id="desc-input" name="desc" onChange={this.handleInputChange} />
      </Col>
    </Row>
    <Row className="show-grid">
      <Col componentClass={ControlLabel} md={4}>
        <div id="donate-img-container">
         <img id="donate-img" className="pull-left" alt="" src={this.state.url} />
        </div>
      </Col>
      <Col componentClass={ControlLabel} md={7}>
        <div id="tags">
          <Row className="show-grid">
            <Col componentClass={ControlLabel} md={2}>
              <ControlLabel className="size14-bolder pull-left">Category</ControlLabel>
            </Col>
            <Col componentClass={ControlLabel} md={8}>
              <Radio className="pull-left" name="categoryTag" value="home" inline onChange={this.handleInputChange}>
                Home
              </Radio>{' '}
              <Radio className="pull-left" name="categoryTag" value="fashion" inline onChange={this.handleInputChange}>
                Fashion
              </Radio>{' '}
              <Radio className="pull-left" name="categoryTag" value="leisure" inline onChange={this.handleInputChange}>
                Leisure
              </Radio>
              <Radio className="pull-left" name="categoryTag" value="tech" inline onChange={this.handleInputChange}>
                Tech
              </Radio>
              <Radio className="pull-left" name="categoryTag" value="hobbies" inline onChange={this.handleInputChange}>
                Hobbies
              </Radio>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col componentClass={ControlLabel} md={2}>
              <ControlLabel className="size14-bolder pull-left"></ControlLabel>
            </Col>
            <Col id="category-second-row" componentClass={ControlLabel} md={8}>
              <Radio className="pull-left" name="categoryTag" value="books" inline onChange={this.handleInputChange}>
                Books
              </Radio>{' '}
              <Radio className="pull-left" name="categoryTag" value="toys" inline onChange={this.handleInputChange}>
                Toys
              </Radio>
              <Radio className="pull-left" name="categoryTag" value="exercise" inline onChange={this.handleInputChange}>
                Exercise
              </Radio>{' '}
              <Radio className="pull-left" name="categoryTag" value="motors" inline onChange={this.handleInputChange}>
                Motors
              </Radio>
              <Radio className="pull-left" name="categoryTag" value="car" inline onChange={this.handleInputChange}>
                Car
              </Radio>{' '}
              <Radio className="pull-left" name="categoryTag" value="other" inline onChange={this.handleInputChange}>
                Other
              </Radio>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col componentClass={ControlLabel} md={2}>
              <ControlLabel className="size14-bolder pull-left">Condition</ControlLabel>
            </Col>
            <Col componentClass={ControlLabel} md={8}>
              < Radio className="pull-left" name="conditionTag" value="new" inline onChange={this.handleInputChange}>
                New
              </Radio>{' '}
              <Radio className="pull-left" name="conditionTag" value="like new" inline onChange={this.handleInputChange}>
                Like New
              </Radio>{' '}
              <Radio className="pull-left" name="conditionTag" value="very good" inline onChange={this.handleInputChange}>
                Very Good
              </Radio>
              <Radio className="pull-left" name="conditionTag" value="good" inline onChange={this.handleInputChange}>
                Good
              </Radio>{' '}
            </Col>
          </Row>

          <Row className="show-grid">
            <Col componentClass={ControlLabel} md={2}>
              <ControlLabel className="size14-bolder pull-left">Age</ControlLabel>
            </Col>
            <Col componentClass={ControlLabel} md={8}>
              < Radio className="pull-left" name="ageTag" value="child" inline onChange={this.handleInputChange}>
                Child
              </Radio>{' '}
              <Radio className="pull-left" name="ageTag" value="youth" inline onChange={this.handleInputChange}>
                Youth
              </Radio>{' '}
              <Radio className="pull-left" name="ageTag" value="adult" inline onChange={this.handleInputChange}>
                Adult
              </Radio>
              <Radio className="pull-left" name="ageTag" value="senior" inline onChange={this.handleInputChange}>
                Senior
              </Radio>{' '}
            </Col>
          </Row>

          <Row className="show-grid">
            <Col componentClass={ControlLabel} md={2}>
              <ControlLabel className="size14-bolder pull-left">Gender</ControlLabel>
            </Col>
            <Col componentClass={ControlLabel} md={8}>
              < Radio className="pull-left" name="genderTag" value="male" inline onChange={this.handleInputChange}>
                Male
              </Radio>{' '}
              <Radio className="pull-left" name="genderTag" value="female" inline onChange={this.handleInputChange}>
                Female
              </Radio>{' '}
            </Col>
          </Row>

        </div>

        <Row className="show-grid">
          <Col componentClass={ControlLabel} md={2}></Col>
          <Col componentClass={ControlLabel} md={8}>
            <ControlLabel id="pickup-location-title">Pickup Location &amp; Details</ControlLabel>
          </Col>
        </Row>
      </Col>
    </Row>

    <Row className="show-grid">
      <Col id="address" componentClass={ControlLabel} md={3}>
      {/* Pickup Adress */}
        <Row className="show-grid">
         <Col componentClass={ControlLabel} md={12}>
          <ControlLabel className="size14-bolder pull-left" id="address-title">Pickup Address</ControlLabel>
          </Col>
        </Row>
        <Row className="show-grid">
         <Col componentClass={ControlLabel} md={12}>
          <FormControl type="text" id="address1-input" name="type" placeholder="address" name="pickupAddress1" onChange={this.handleInputChange}/>
        </Col>
        </Row>
        <Row className="show-grid">
        <Col componentClass={ControlLabel} md={12}>
          <FormControl type="text" id="address2-input" name="type" placeholder="address" name="pickupAddress2" onChange={this.handleInputChange}/>
        </Col>
        </Row>
        <Row className="show-grid">
        <Col componentClass={ControlLabel} md={12}>
          <FormControl className="pull-left" type="text" id="city-input" name="type" placeholder="city" name="pickupCity" onChange={this.handleInputChange} />
          <FormControl className="pull-left" type="text" id="state-input" name="type" placeholder="st"  name="pickupState" onChange={this.handleInputChange}/>
          <FormControl className="pull-left" type="text" id="zip-input" name="type" placeholder="zip" name="pickupZip" onChange={this.handleInputChange} />
        </Col>
        </Row>
      </Col>
      <Col componentClass={ControlLabel} md={3}>
        <Row className="show-grid">
         <Col componentClass={ControlLabel} md={12}>
          <ControlLabel className="size14-bolder pull-left" id="pickup-day-title">Pickup Day &amp; Time Frame</ControlLabel>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col componentClass={ControlLabel} md={12}>
            <FormControl id="pickup-location-type" componentClass="select" name="pickupLocationType" onChange={this.handleInputChange}>
              <option value="">select location type</option>
              <option value="residence">Residence</option>
              <option value="business">Business</option>
              <option value="police">Police Deptartment</option>
            </FormControl>
          </Col>
        </Row>
        <Row className="show-grid">
        <Col componentClass={ControlLabel} md={12}>
          <FormControl id="pickup-location-type" componentClass="select" name="pickupDay" onChange={this.handleInputChange} >
              <option value="sunday">Sunday</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
           </FormControl>
        </Col>
        </Row>
        <Row className="show-grid">
        <Col componentClass={ControlLabel} md={12}>
         <ControlLabel className="size14-bolder pull-left">B/W</ControlLabel>
          <FormControl className="pull-left" type="text" id="start-time-input" placeholder="0:00" name="pickupTimeStart" onChange={this.handleInputChange} />
          <ControlLabel id="size18-bolder" className="pull-left">-</ControlLabel>
          <FormControl className="pull-left" type="text" id="end-time-input" placeholder="0:00" name="pickupTimeEnd" onChange={this.handleInputChange} />
          < Radio className="am-pm pull-left" name="meridiem" value="am" name="donorPickupAmPm" onChange={this.handleInputChange}>
                am
          </Radio>{' '}
          <Radio className="am-pm pull-left" name="meridiem" value="pm" name="donorPickupAmPm" onChange={this.handleInputChange}>
            pm
          </Radio>{' '}
        </Col>
        </Row>
      </Col>

      
      <Col componentClass={ControlLabel} md={5}>
        <Row className="info show-grid">
         <Col className="zero-right-pad zero-top-pad" componentClass={ControlLabel} md={4}>
              <Row className="show-grid">
                <Col className="zero-right-pad zero-left-pad zero-top-pad" componentClass={ControlLabel} md={12}>
                  <ControlLabel className="zero-left-pad pull-left">Donor: </ControlLabel>
                  <ControlLabel className="info-user pull-left">{this.state.donorUser}</ControlLabel>
                </Col>
                </Row>
                <Row className="zero-right-pad show-grid">
                <Col className="zero-right-pad zero-top-pad" componentClass={ControlLabel} md={12}>
                  <ControlLabel className="pull-left">Comments:</ControlLabel>
                </Col>
                </Row>       
          </Col>
          <Col componentClass={ControlLabel} md={8}>
          <FormControl className="zero-right-pad zero-left-pad pull-left" componentClass="textarea" id="donor-comments-input" name="donorPickupComments" onChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row className="show-grid">
          <Checkbox className="size14-bolder pull-left" id="donor-pickup-confirmed" name="donorPickupConfirmed" onChange={this.handleInputChange} inline>Donor Pickup Confirmed</Checkbox>
          <Checkbox className="size14-bolder pull-left" id="donor-donation-complete" name="donationComplete" onChange={this.handleInputChange} inline>Donation Complete</Checkbox>
        </Row>

        <Row className="info show-grid">
         <Col className="zero-right-pad zero-top-pad" componentClass={ControlLabel} md={4}>
          <Row className="show-grid">
            <Col className="zero-right-pad zero-left-pad zero-top-pad" componentClass={ControlLabel} md={12}>
              <ControlLabel className="zero-left-pad pull-left">Donee: </ControlLabel>
              <ControlLabel className="info-user pull-left">Jack</ControlLabel>
            </Col>
            </Row>
            <Row className="zero-right-pad show-grid">
            <Col className="zero-right-pad zero-top-pad" componentClass={ControlLabel} md={12}>
              <ControlLabel className="pull-left">Comments:</ControlLabel>
            </Col>
            </Row>       
          </Col>
          <Col componentClass={ControlLabel} md={8}>
          <FormControl className="zero-right-pad zero-left-pad pull-left" componentClass="textarea" id="donee-comments-input" name="doneePickupComments" onChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row className="show-grid">
          <Checkbox className="size14-bolder pull-left" id="donee-pickup-confirmed" name="doneePickupConfirmed" onChange={this.handleInputChange} inline>Donee Pickup Confirmed</Checkbox>
          <ControlLabel id="donee-pickup-time-label" className="pull-left">Time:</ControlLabel>
          <FormControl className="pull-left" type="text" id="donee-pickup-time" name="type" placeholder="0:00" name="doneePickupTime" onChange={this.handleInputChange} />
          < Radio className="am-pm pull-left" name="donee-meridiem" value="am" name="doneePickupAmPm" onChange={this.handleInputChange} >
                am
          </Radio>{' '}
          <Radio className="am-pm pull-left" name="donee-meridiem" value="pm" name="doneePickupAmPm" onChange={this.handleInputChange}>
            pm
          </Radio>{' '}
        </Row>

      </Col>
    </Row>
    <Row className="show-grid">
    <Col componentClass={ControlLabel} md={8}>
    <Button className="CRUD-buttons pull-left"  onClick={this.handleCreate} bsStyle="success">Donate</Button>
    <Button className="CRUD-buttons pull-left"  onClick={this.handleEdit} bsStyle="warning" disabled>Edit</Button>
    <Button className="CRUD-buttons pull-left"  onClick={this.handleDelete} bsStyle="danger" disabled>Remove</Button>
          </Col>
    </Row>
  </Form>
      </div>

    );
  }
}

export default DonateForm;
