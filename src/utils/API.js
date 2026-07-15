import axios from "axios";
// const BASE_URL = "http://localhost:8080";
const BASE_URL = "https://dcl-portfolio-mail-handler.herokuapp.com";

const API = {
  submitEmail: function (messageData) {
    return axios.post(`${BASE_URL}/email`, messageData);
  },
};

export default API;
/* {
  // submitMessage: function (messageData) {
  //   return axios.post("/submit", messageData);
  // },
  submitEmail: function (messageData) {
    return axios.post(`${BASE_URL}/email`, messageData);
  },
};
*/
