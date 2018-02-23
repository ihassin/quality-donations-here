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
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }

  // Gets all books

  getDonations: function({name, categoryTag, conditionTag, ageTag, genderTag, city, state, zip }) {
    console.log("name", name);
    const nameQuery = name ? `&name=${name}` :"";
    console.log("nameQuery", nameQuery);
    const categoryTagQuery = categoryTag ? `&categoryTag=${categoryTag}` :"";
    const ageTagQuery = ageTag ? `&ageTag=${ageTag}` :"";

    console.log("getDonations", `/api/shop?${nameQuery}${categoryTagQuery}${ageTagQuery}`);
    return axios.get(`/api/shop?${nameQuery}${categoryTagQuery}${ageTagQuery}`);

 // return axios.get("/api/shop?ageTag=youth&name=Sneakers");
   
  },


  uploadPicture: (pic, config) => {
    return axios.post("/api/upload/image", pic, config);
  }

  // uploadPicture: (pic, config) => {
  //   return axios.post('/upload/image', pic, config);
  // }

};
