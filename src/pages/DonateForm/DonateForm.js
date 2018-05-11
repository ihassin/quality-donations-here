import React, { Component } from 'react'
import API from '../../utils/API'
import './DonateForm.css'
import ChooseFile from './components/ChooseFile'
import PictureInfo from './components/PictureInfo'
import PickupAddress from './components/PickupAddress'
import PickupLocation from './components/PickupLocation'
import PickupComments from './components/PickupComments'
import PictureTags from './components/PictureTags'
import ItemPicture from './components/ItemPicture'
import DonateButton from './components/DonateButton';
// import Noty from 'noty';

class DonateForm extends Component {
  state = {
    file: null,
    nameDisplay: '',
    name: '',
    desc: '',
    url: '',
    categoryTag: '',
    conditionTag: '',
    ageTag: '',
    genderTag: '',
    pickupAddress1: '',
    pickupAddress2: '',
    pickupCity: '',
    pickupState: '',
    pickupZip: '',
    pickupLocationType: '',
    pickupDay: 'sunday',
    pickupTimeStart: '',
    pickupTimeEnd: '',
    donorPickupAmPm: '',
    donorPickupComments: '',
    doneePickupComments: '',
    doneePickupTime: '',
    doneePickupAmPm: '',
    donorPickupConfirmed: false,
    doneePickupConfirmed: false,
    donationComplete: false,
    // donorUser: '',
    // donorFirstname: '',
    datePosted:
      new Date().getMonth() +
      1 +
      '/' +
      new Date().getDate() +
      '/' +
      new Date().getFullYear()
  }

  componentWillReceiveProps = nextProps => {}

  componentDidMount() {
    // console.log('componentDidMount this.props', this.props)
  }

  handleEdit = id => {}

  handleDelete = id => {}

  handleCreate = () => {
    const donateObj = {
      name: this.state.name,
      nameDisplay: this.state.nameDisplay,
      desc: this.state.desc,
      url: this.state.url,
      donorId: this.props.user._id,
      donorFirstname: this.props.user.firstname,
      categoryTag: this.state.categoryTag,
      conditionTag: this.state.conditionTag,
      ageTag: this.state.ageTag,
      genderTag: this.state.genderTag,
      pickupAddress1: this.state.pickupAddress1,
      pickupAddress2: this.state.pickupAddress2,
      pickupCity: this.state.pickupCity,
      pickupState: this.state.pickupState,
      pickupZip: this.state.pickupZip,
      pickupLocationType: this.state.pickupLocationType,
      pickupDay: this.state.pickupDay,
      pickupTimeStart: this.state.pickupTimeStart,
      pickupTimeEnd: this.state.pickupTimeEnd,
      donorPickupAmPm: this.state.donorPickupAmPm,
      donorPickupComments: this.state.donorPickupComments,
      doneePickupComments: this.state.doneePickupComments,
      doneePickupTime: this.state.doneePickupTime,
      doneePickupAmPm: this.state.doneePickupAmPm
    }
    // console.log('*** Donate Form ***')
    // console.log('handleCreate', donateObj)
    // console.log('------------------------');

    // window.location.href NOT WORKING. I also tried from server with GET, No Luck
    API.saveDonation(donateObj)
      .then(res => (window.location.href = '/shop'))
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleNameChange = event => {
    const name = event.target.value.toLowerCase()
    const nameDisplay = event.target.value
    this.setState({
      name,
      nameDisplay
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
  }

  handleFileChosen = event => {
    // console.log('handleFileChosen', event.target.files[0])
    this.setState({
      file: event.target.files[0]
    })
  }

  handleUploadPicture = event => {
    event.preventDefault()

    const formData = new FormData()
    // console.log('this.state.file', this.state.file)
    formData.append('file', this.state.file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    API.uploadPicture(formData, config).then(response => {
      // console.log('uploadPicture', response)
      this.setState({
        // url: response.data[0].url // local
        url: response.data     // production
      })
    })
  }

  render() {
    return (
      <div className="container-fluid" id="donate-form">
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-4">
            <ChooseFile
              handleFileChosen={this.handleFileChosen}
              handleUploadPicture={this.handleUploadPicture}
            />
            <ItemPicture url={this.state.url} />
          </div>
          <div className="col-md-4 col-sm-6 mb-4 mt-3">
          <PictureInfo
              datePosted={this.state.datePosted}
              handleNameChange={this.handleNameChange}
              handleInputChange={this.handleInputChange}
            />
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <PictureTags handleInputChange={this.handleInputChange} />
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <PickupLocation handleInputChange={this.handleInputChange} />
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <PickupAddress handleInputChange={this.handleInputChange} />
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <PickupComments handleInputChange={this.handleInputChange} />
            <DonateButton handleCreate={this.handleCreate}/>
          </div>
        </div>
      </div>
    )
  }
}

export default DonateForm
