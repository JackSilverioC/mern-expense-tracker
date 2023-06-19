import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-expense-tracker.up.railway.app/api",
  withCredentials: true
});

export default instance;
