import axios from "axios";
import { BASE_URL } from "../utils/constants";

const axiosInstance = axios.create({
  baseUrl: BASE_URL,
});

export const https = {
  get: axiosInstance.get,
};
