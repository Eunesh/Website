import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

export const httpforAdmin = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default http;
