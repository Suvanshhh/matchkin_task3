import axios from "axios";

const API_URL = "http://localhost:4000/api";

export const requestOTP = (email, role) =>
  axios.post(`${API_URL}/auth/request-otp`, { email, role });

export const verifyOTP = (email, otp) =>
  axios.post(`${API_URL}/auth/verify-otp`, { email, otp });

export const matchProject = (project, token) =>
  axios.post(`${API_URL}/match`, project, {
    headers: { Authorization: `Bearer ${token}` }
  });
