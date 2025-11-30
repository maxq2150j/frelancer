import API from "./api";

const ClientJobService = {
  getJobs: () => API.get("/api/client/jobs"),
  getJobById: (id) => API.get(`/api/client/jobs/${id}`),
  createJob: (data) => API.post("/api/client/jobs", data),
  deleteJob: (id) => API.delete(`/api/client/jobs/${id}`),
  updateJob: (id, data) => API.put(`/api/client/jobs/${id}`, data),
};

export default ClientJobService;
