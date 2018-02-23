import React, { Component } from "react";
import { Row, Col, Button, Form, FormControl, ControlLabel, FormGroup, Radio, Checkbox } from 'react-bootstrap';
import API from "../../utils/API";
import "./DonateForm.css";


class DonateForm extends Component {
  state = {
    file:null,
    imageUrl: ""

  };

  componentDidMount() {

  }

  editDonation = id => {

  };

  deleteDonation = id => {

  };

  saveDonation = () => {

    };



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

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
    for (var key of formData.keys()) {
      console.log("formdata keys", key); 
   }

   // Display the values
  for (var value of formData.values()) {
    console.log("formdata values", value); 
  }

    API.uploadPicture(formData, config).then(response => {
      console.log("uploadPicture", response);
      this.setState({
        imageUrl: response.data[0].url
      })
    })
  }

  

  render() {
    return (
  
<div className="page-content">
  <Form id="donate-form" horizontal>
    <Row className="show-grid">
      <Col componentClass={ControlLabel} md={4}>
        <FormControl type="file" id="file-chosen" name="keyword" onChange={this.handleFileChosen} />
      </Col>
      <Col componentClass={ControlLabel} md={1}>
        <ControlLabel className="donate-Form-text pull-left">Type</ControlLabel>
      </Col>
      <Col componentClass={ControlLabel} md={2}>
        <FormControl className="pull-left" type="text" id="type-input" name="type" onChange={this.handleInputChange} />
      </Col>
      <Col componentClass={ControlLabel} md={2}>
        <ControlLabel className="donate-Form-text pull-left">Date Posted</ControlLabel>
      </Col>
      <Col componentClass={ControlLabel} md={2}>
      <FormControl className="pull-left" type="text" id="date-posted" name="type" />
      </Col>
    </Row>

    <Row className="show-grid">
      <Col componentClass={ControlLabel} md={4}>
        <Button className="pull-left" id="upload-picture" onClick={this.handleUploadPicture} bsStyle="success">Upload Picture</Button>
      </Col>
      <Col componentClass={ControlLabel} md={1}>
        <ControlLabel className="donate-Form-text pull-left">Desc</ControlLabel>
      </Col>
      <Col componentClass={ControlLabel} md={6}>
        <FormControl className="pull-left" type="text" id="desc-input" name="type" onChange={this.handleInputChange} />
      </Col>
    </Row>
    <Row className="show-grid">
      <Col componentClass={ControlLabel} md={4}>
        <div id="donate-img-container">
         <img id="donate-img" className="pull-left" alt="" src={this.state.imageUrl} />
        </div>
      </Col>
      <Col componentClass={ControlLabel} md={7}>
        <div id="tags">
          <Row className="show-grid">
            <Col componentClass={ControlLabel} md={2}>
              <ControlLabel className="donate-Form-tag-text pull-left">Category</ControlLabel>
            </Col>
            <Col componentClass={ControlLabel} md={8}>
              <Radio className="pull-left" name="category" inline>
                Home
              </Radio>{' '}
              <Radio className="pull-left" name="category" inline>
                Fashion
              </Radio>{' '}
              <Radio className="pull-left" name="category" inline>
                Leisure
              </Radio>
              <Radio className="pull-left" name="category" inline>
                Tech
              </Radio>
              <Radio className="pull-left" name="category" inline>
                Hobbies
              </Radio>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col componentClass={ControlLabel} md={2}>
              <ControlLabel className="donate-Form-tag-text pull-left"></ControlLabel>
            </Col>
            <Col id="category-second-row" componentClass={ControlLabel} md={8}>
              <Radio className="pull-left" name="category" inline>
                Books
              </Radio>{' '}
              <Radio className="pull-left" name="category" inline>
                Toys
              </Radio>
              <Radio className="pull-left" name="category" inline>
                Exercise
              </Radio>{' '}
              <Radio className="pull-left" name="category" inline>
                Motors
              </Radio>
              <Radio className="pull-left" name="category" inline>
                Cars
              </Radio>{' '}
              <Radio className="pull-left" name="category" inline>
                Other
              </Radio>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col componentClass={ControlLabel} md={2}>
              <ControlLabel className="donate-Form-tag-text pull-left">Condition</ControlLabel>
            </Col>
            <Col componentClass={ControlLabel} md={8}>
              < Radio className="pull-left" name="condition" inline>
                New
              </Radio>{' '}
              <Radio className="pull-left" name="condition" inline>
                Like New
              </Radio>{' '}
              <Radio className="pull-left" name="condition" inline>
                Very Good
              </Radio>
              <Radio className="pull-left" name="condition" inline>
                Good
              </Radio>{' '}
            </Col>
          </Row>

          <Row className="show-grid">
            <Col componentClass={ControlLabel} md={2}>
              <ControlLabel className="donate-Form-tag-text pull-left">Age</ControlLabel>
            </Col>
            <Col componentClass={ControlLabel} md={8}>
              < Radio className="pull-left" name="age" inline>
                Child
              </Radio>{' '}
              <Radio className="pull-left" name="age" inline>
                Youth
              </Radio>{' '}
              <Radio className="pull-left" name="age" inline>
                Adult
              </Radio>
              <Radio className="pull-left" name="age" inline>
                Senior
              </Radio>{' '}
            </Col>
          </Row>

          <Row className="show-grid">
            <Col componentClass={ControlLabel} md={2}>
              <ControlLabel className="donate-Form-tag-text pull-left">Gender</ControlLabel>
            </Col>
            <Col componentClass={ControlLabel} md={8}>
              < Radio className="pull-left" name="gender" inline>
                Male
              </Radio>{' '}
              <Radio className="pull-left" name="gender" inline>
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
          <ControlLabel className="pull-left" id="address-title">Pickup Address</ControlLabel>
          </Col>
        </Row>
        <Row className="show-grid">
         <Col componentClass={ControlLabel} md={12}>
          <FormControl type="text" id="address1-input" name="type" placeholder="address" />
        </Col>
        </Row>
        <Row className="show-grid">
        <Col componentClass={ControlLabel} md={12}>
          <FormControl type="text" id="address2-input" name="type" placeholder="address" />
        </Col>
        </Row>
        <Row className="show-grid">
        <Col componentClass={ControlLabel} md={12}>
          <FormControl className="pull-left" type="text" id="city-input" name="type" placeholder="city"  />
          <FormControl className="pull-left" type="text" id="state-input" name="type" placeholder="st"  />
          <FormControl className="pull-left" type="text" id="zip-input" name="type" placeholder="zip"  />
        </Col>
        </Row>
      </Col>
      <Col componentClass={ControlLabel} md={3}>
        <Row className="show-grid">
         <Col componentClass={ControlLabel} md={12}>
          <ControlLabel className="pull-left" id="pickup-day-title">Pickup Day &amp; Time Frame</ControlLabel>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col componentClass={ControlLabel} md={12}>
            <FormControl id="pickup-location-type" componentClass="select">
              <option value="">select location type</option>
              <option value="residence">Residence</option>
              <option value="business">Business</option>
              <option value="police">Police Deptartment</option>
            </FormControl>
          </Col>
        </Row>
        <Row className="show-grid">
        <Col componentClass={ControlLabel} md={12}>
          <FormControl id="pickup-location-type" componentClass="select" >
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
          <FormControl className="pull-left" type="text" id="start-time-input" name="type" placeholder="0:00"  />
          <ControlLabel id="donate-Form-text" className="pull-left">-</ControlLabel>
          <FormControl className="pull-left" type="text" id="end-time-input" name="type" placeholder="0:00"  />
          < Radio className="am-pm pull-left" name="meridiem" >
                am
          </Radio>{' '}
          <Radio className="am-pm pull-left" name="meridiem" >
            pm
          </Radio>{' '}
        </Col>
        </Row>
      </Col>

      

      <Col componentClass={ControlLabel} md={4}>
      <h5 className="pull-left">Confirmation</h5>
      </Col>
    </Row>






    {/* <Checkbox checked readOnly>
      Checkbox
    </Checkbox>
    <Radio checked readOnly>
      Radio
    </Radio>

    <FormGroup>
      <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
      <Checkbox inline>3</Checkbox>
    </FormGroup>


    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>
    <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>Multiple select</ControlLabel>
      <FormControl componentClass="select" multiple>
        <option value="select">select (multiple)</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Static text</ControlLabel>
      <FormControl.Static>email@example.com</FormControl.Static>
    </FormGroup>

    <Button type="submit">Submit</Button> */}
  </Form>

      </div>

    );
  }
}

export default DonateForm;
