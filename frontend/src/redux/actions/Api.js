import axios from "axios";

const api = axios.create({
  baseURL: 'https://saddamhotel-backend.vercel.app',
});

export default api;
