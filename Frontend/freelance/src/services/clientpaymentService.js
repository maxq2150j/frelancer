import API from "./api";


export const requestPayment = (data) =>
  API.post("/api/payments/request", data);


export const getPaymentsByFreelancer = (freelancerId) =>
  API.get(`/api/payments/freelancer/${freelancerId}`);
