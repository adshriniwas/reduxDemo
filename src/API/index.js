import axios from "axios";

// instantiate axios

const UseAxios = axios.create({
  // baseURL: "https://api.publicapis.org/",
  baseURL: "https://4wmrr.wiremockapi.cloud/",
  headers: {
    "Content-Type": "application/json",
  },
});
export default UseAxios;
