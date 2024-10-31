import axios from "axios";

const API_URL = "http://localhost:5000/api";

const api = {
  login: (data) => axios.post(`${API_URL}/auth/login`, data),
  signup: (data) => axios.post(`${API_URL}/auth/signup`, data),
  submitEvaluation: (data) => axios.post(`${API_URL}/evaluations`, data),
};

export default api;
