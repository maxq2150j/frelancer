
import axios from 'axios';

const BASE_URL = "http://localhost:8080/jobs";
export const getAlljobs = () => {
    return axios.get(BASE_URL)
};

export const createJob = (jobData) => {
    return axios.post(BASE_URL, jobData);
};

export const getJobById = (id) => {
    return axios.get(BASE_URL + `/${id}`);
};

export const updateJob = (id, jobData) => {
    return axios.put(BASE_URL + `/${id}`, jobData);
};

export const deleteJobByID = (id) => {
    return axios.delete(BASE_URL + `/${id}`);
};