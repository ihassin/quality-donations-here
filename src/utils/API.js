import axios from "axios";

export default {


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
   
  },


  uploadPicture: (pic, config) => {
    return axios.post("/api/upload/image", pic, config);
  }

};
