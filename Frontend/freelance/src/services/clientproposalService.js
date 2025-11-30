import API from "./api";

const ClientProposalService = {
  getAllProposals: () => API.get("/api/client/proposals"),

  updateStatus: (appId, status) =>
    API.post(`/api/client/applications/${appId}/${status}`),

  getProposalsByJob: (jobId) =>
    API.get(`/api/client/proposals/job/${jobId}`),
};

export default ClientProposalService;
