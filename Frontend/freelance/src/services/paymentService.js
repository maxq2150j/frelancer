import axios from 'axios';

const BASE_URL = "http://localhost:8080/payments";

export const getPaymentsByFreelancer = (freelancerId) => {
  return axios.get(`${BASE_URL}/freelancer/${freelancerId}`);
};

export const requestPayment = (paymentData) => {
  return axios.post(`${BASE_URL}/request`, paymentData);
};
