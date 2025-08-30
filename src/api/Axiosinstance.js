// AxiosInstance.js
import axios from "axios";

const Axiosinstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL ,
});
Axiosinstance.defaults.withCredentials = true;

export default Axiosinstance;
