import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://weight-lifting-journal-web25.herokuapp.com/",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};