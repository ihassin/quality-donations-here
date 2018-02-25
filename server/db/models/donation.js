// Headline model
// ==============

// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var donationSchema = new Schema({
    donorUser: {
        type: String,
        required: true
    },

    donorFirstname: {
        type: String,
        required: false
    },

    doneeUser: {
        type: String,
        required: false
    },

    doneeFirstname: {
        type: String,
        required: false
    },

    // item name, a string, must be entered
    name: {
    type: String,
    required: true
    // unique: { index: { unique: true } }
    },

    // item name, a string, must be entered
    nameDisplay: {
        type: String,
        required: true
        // unique: { index: { unique: true } }
        },

    // item description, a string, must be entered
    desc: {
    type: String,
    required: false
    },

  // picture url, a string, must be entered
  url: {
    type: String,
    required: true
  },

    // date is just a string
    datePosted: {
        type: Date,
        default: Date.now
    },

    // category tag, a string, must be entered
    categoryTag: {
        type: String,
        required: false
    },

    // condition tag, a string, must be entered
    conditionTag: {
        type: String,
        required: false
    },

    // age tag, a string, must be entered
    ageTag: {
        type: String,
        required: false
    },

    // age tag, a string, must be entered
    genderTag: {
        type: String,
        required: false
    },

    // pickup address1, a string, must be entered
    pickupAddress1: {
        type: String,
        required: true
    },

    // pickup address2, a string, must be entered
    pickupAddress2: {
        type: String,
        required: false
    },

    // pickup city, a string, must be entered
    pickupCity: {
        type: String,
        required: true
    },

    // pickup state, a string, must be entered
    pickupState: {
        type: String,
        required: true
    },

    // pickup zip, a string, must be entered
    pickupZip: {
        type: String,
        required: true
    },

    // pickup type, a string, must be entered
    pickupLocationType: {
        type: String,
        required: true
    },

    // pickup day of the week
    pickupDay: {
        type: String,
        required: true
    },

    // pickup time between start
    pickupTimeStart: {
        type: String,
        required: true
    },

    // pickup time end
    pickupTimeEnd: {
        type: String,
        required: true
    },

    // am=true, pm=false
    donorPickupAmPm: {
        type: String,
        default: true
    },

    // donor pickup comments, a string, must be entered
    donorPickupComments: {
        type: String,
        required: false
    },

    // donee pickup comments, a string, must be entered
    doneePickupComments: {
        type: String,
        required: false
    },

    // donee pickup comments, a string, must be entered
    doneePickupTime: {
        type: String,
        required: false
    },

    // am=true, pm=false
    doneePickupAmPm: {
        type: String,
        default: false
    },

    // doner pickup confirmed
    donorPickupConfirmed: {
        type: Boolean,
        default: false
    },

    // doner pickup confirmed
    doneePickupConfirmed: {
        type: Boolean,
        default: false
    },

    // donation complete
    donationComplete: {
        type: Boolean,
        default: false
    }
});

// Create the Headline model using the headlineSchema
var Donation = mongoose.model("Donation", donationSchema);

// Export the Headline model
module.exports = Donation;
