import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "INSERT URL HERE",
    headers: {
      Authorization: localStorage.getITem("token")
    }
  });
};