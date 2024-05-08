import axios from "axios";

axios.defaults.baseURL = "https://cc17-assessment-api.onrender.com/";

export const getUserById = async (email, password) => {
  return await axios.post(`/auth/login`, { email: email, password: password });
};
