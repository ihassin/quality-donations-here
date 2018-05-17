# Quality Donations Here  

[![Build Status](https://travis-ci.org/ihassin/quality-donations-here.svg?branch=master)](https://travis-ci.org/ihassin/quality-donations-here)

### View the live version of this app here: https://glacial-mountain-71826.herokuapp.com/

## Technologies
* MERN (MongoDB, Express, React, Node.js) Stack
* Bootstrap
* User Authentication
* MVC Paradigm
* RESTful API


## What is Quality Donations Here?

#### A place where…

* People can upload pictures, details and select tags for the items they want to donate.
* People can shop, by searching on keyword, location and tags, for items they want to own.
* People can make arrangements to meet and pickup items.



## Demo

![play Gif](https://github.com/lzapson/quality-donations-here/blob/master/readme%20pics/quality-donations-here.gif)

# Building

## Install dependencies

* Database
```
brew install mongo
```

* Other dependencies
```bash
yarn install
```

* Misc

  - Copy .env.example to .env and fill in the needed keys.

# Running tests

```bash
yarn test-ci src/tests/unit
```
or
```bash
npm run test-ci src/tests/unit
```
