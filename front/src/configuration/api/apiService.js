import axios from "axios";
import { PRODUCTS_API } from "../constants";

const apiService = axios.create({
  baseURL: PRODUCTS_API,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiService;
