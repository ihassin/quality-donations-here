const mongoose = require("mongoose");
const db = require("../db/models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mern-passport",
  {
    useMongoClient: true
  }
);

const donationSeed = [
  {
    donorId: "ObjectId(\"5a86180f03e8e336f479c1ef\")",
    name: "Wine Cabinet",
    desc: "Crate and Barrell wood cabinet",
    url: "api/uploads/lisa/cabinet.jpeg",
    categoryTag:"home",
    conditionTag: "new",
    pickupAddress1: "Starbucks",
    pickupAddress2: "100 Nassau St",
    pickupCity: "Princeton",
    pickupState: "NJ",
    pickupZip:"08542",
    pickupLocationType:"Business",
    donorPickupComments: "I will meet you outside",
    doneePickupComments: "I am tall and will be wearing a red shirt",
    donorPickupConfirmed: true,
    doneePickupConfirmed: true,
    donationComplete: false

  },
  {
    donorId: "ObjectId(\"5a86180f03e8e336f479c1ef\")",
    name: "Sneakers",
    desc: "Born in the USA Sneakers",
    url: "api/uploads/lisa/sneakers.jpg",
    categoryTag:"fashion",
    conditionTag: "very good",
    ageTag: "youth",
    pickupAddress1: "Starbucks",
    pickupAddress2: "100 Nassau St",
    pickupCity: "Princeton",
    pickupState: "NJ",
    pickupZip:"08542",
    pickupLocationType:"Business",
    donorPickupComments: "I will meet you outside",
    donorPickupConfirmed: true,
    doneePickupConfirmed: false,
    donationComplete: false

  }
];

db.Donation
  .remove({})
  .then(() => db.Donation.collection.insertMany(donationSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
