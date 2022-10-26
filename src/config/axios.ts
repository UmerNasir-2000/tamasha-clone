import axios from "axios";
import { API_BASE_URL, API_KEY } from "../utils/constants";

const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default AxiosInstance;
