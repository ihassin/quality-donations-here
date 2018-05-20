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
    donorFirstname: "Lisa",
    name: "chair",
    nameDisplay: "Chair",
    desc: "Safavieh En Vogue Dining Lester Rust Lounge Chair",
    url:"http://127.0.0.1:8080/api/uploads/orange-suede-chair.jpeg",
    categoryTag:"home",
    conditionTag: "veryGood",
    pickupAddress1: "Starbucks",
    pickupAddress2: "100 Nassau St",
    pickupCity: "Princeton",
    pickupState: "NJ",
    pickupZip:"08542",
    pickupLocationType:"Business"
  },
  {
    donorId: "ObjectId(\"5a86180f03e8e336f479c1ef\")",
    donorFirstname: "Lisa",
    name: "toy",
    nameDisplay: "Toy",
    desc: "Gund Teddy Bear",
    url: "http://127.0.0.1:8080/api/uploads/gund-teddy-bear.jpeg",
    categoryTag:"toys",
    conditionTag: "likeNew",
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
  },
  {
    donorId: "ObjectId(\"5a86180f03e8e336f479c1ef\")",
    donorFirstname: "Lisa",
    name: "pillows",
    nameDisplay: "Pillows",
    desc: "BOHO EMBROIDERED DECORATIVE PILLOWS",
    url: "http://127.0.0.1:8080/api/uploads/mexican-pillows.jpeg",
    categoryTag:"home",
    conditionTag: "new",
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
  },
  {
    donorId: "ObjectId(\"5a86180f03e8e336f479c1ef\")",
    donorFirstname: "Lisa",
    name: "pillows",
    nameDisplay: "Pillows",
    desc: "Pillow Perfect Flicker Jewel 16.5-inch Patterned Throw Pillow",
    url:"http://127.0.0.1:8080/api/uploads/flowered-pillows.jpeg",
    categoryTag:"home",
    conditionTag: "good",
    pickupAddress1: "Starbucks",
    pickupAddress2: "100 Nassau St",
    pickupCity: "Princeton",
    pickupState: "NJ",
    pickupZip:"08542",
    pickupLocationType:"Business"
  },
  {
    donorId: "ObjectId(\"5a86180f03e8e336f479c1ef\")",
    donorFirstname: "Lisa",
    name: "car",
    nameDisplay: "Car",
    desc: "2016 Honda Civic - Lime Green",
    url: "http://127.0.0.1:8080/api/uploads/green-honda-civic.jpeg",
    categoryTag:"cars",
    conditionTag: "veryGood",
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
  },
  {
    donorId: "ObjectId(\"5a86180f03e8e336f479c1ef\")",
    donorFirstname: "Lisa",
    name: "dishes",
    nameDisplay: "Dishes",
    desc: "White Cabbage Dishes",
    url:"http://127.0.0.1:8080/api/uploads/white-cabbage-dishes.jpeg",
    categoryTag:"home",
    conditionTag: "veryGood",
    pickupAddress1: "Starbucks",
    pickupAddress2: "100 Nassau St",
    pickupCity: "Princeton",
    pickupState: "NJ",
    pickupZip:"08542",
    pickupLocationType:"Business"
  },
  {
    donorId: "ObjectId(\"5a86180f03e8e336f479c1ef\")",
    donorFirstname: "Lisa",
    name: "jacket",
    nameDisplay: "Jacket",
    desc: "MEN'S MICROTHERM® 2.0 DOWN FIELD JACKET",
    url: "http://127.0.0.1:8080/api/uploads/mens-down-jacket.jpeg",
    categoryTag:"fashion",
    conditionTag: "new",
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
  },
  {
    donorId: "ObjectId(\"5a86180f03e8e336f479c1ef\")",
    donorFirstname: "Lisa",
    name: "bicycle",
    nameDisplay: "Bicycle",
    desc: "Men's Trek Checkpoint SL 5",
    url:"http://127.0.0.1:8080/api/uploads/mens-trek-bicycle.jpeg",
    categoryTag:"motors",
    conditionTag: "good",
    pickupAddress1: "Starbucks",
    pickupAddress2: "100 Nassau St",
    pickupCity: "Princeton",
    pickupState: "NJ",
    pickupZip:"08542",
    pickupLocationType:"Business"
  },
  {
    donorId: "ObjectId(\"5a86180f03e8e336f479c1ef\")",
    donorFirstname: "Lisa",
    name: "books",
    nameDisplay: "Books",
    desc: "American Classic Books",
    url:"http://127.0.0.1:8080/api/uploads/american-classic-books.jpeg",
    categoryTag:"books",
    conditionTag: "good",
    pickupAddress1: "Starbucks",
    pickupAddress2: "100 Nassau St",
    pickupCity: "Princeton",
    pickupState: "NJ",
    pickupZip:"08542",
    pickupLocationType:"Business"
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
