import API from "./api";

const ClientTaskService = {
  getTasks: (clientId) =>
    API.get(`/api/client/tasks${clientId ? `?clientId=${clientId}` : ""}`),

  payTask: (taskId, payerId, amount) =>
    API.post(`/api/client/tasks/${taskId}/pay?payerId=${payerId}&amount=${amount}`),
};

export default ClientTaskService;
