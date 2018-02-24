import axios from "axios";

export default {
  // // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },


  saveDonation: donateObj => {
    return axios.post("/api/donate", donateObj);
  },


  getDonations: function({name, categoryTag, conditionTag, ageTag, genderTag, city, state, zip }) {
    console.log("name", name);
    const nameQuery = name ? `&name=${name}` :"";
    const conditionTagQuery = conditionTag ? `&conditionTag=${conditionTag}` :"";
    const categoryTagQuery = categoryTag ? `&categoryTag=${categoryTag}` :"";
    const ageTagQuery = ageTag ? `&ageTag=${ageTag}` :"";
    const genderTagQuery = genderTag ? `&genderTag=${genderTag}` :"";
    
    return axios.get(`/api/shop?${nameQuery}${categoryTagQuery}${conditionTagQuery}${ageTagQuery}${genderTagQuery}`);

 // return axios.get("/api/shop?ageTag=youth&name=Sneakers");
   
  },


  uploadPicture: (pic, config) => {
    return axios.post("/api/upload/image", pic, config);
  }

};
