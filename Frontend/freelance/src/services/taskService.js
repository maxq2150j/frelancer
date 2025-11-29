import axios from 'axios';

const BASE_URL = "http://localhost:8080/tasks";

export const getAllTasks = () => axios.get(BASE_URL);

export const getTaskById = (id) => axios.get(`${BASE_URL}/${id}`);

export const markTaskCompleted = (id) => axios.put(`${BASE_URL}/${id}/complete`);

export const createTask = (taskData) => axios.post(BASE_URL, taskData);

export const deleteTask = (id) => axios.delete(`${BASE_URL}/${id}`);
