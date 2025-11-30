import React, { useEffect, useState } from "react";
import ClientSidebar from "./ClientSidebar";
import TaskService from "../../services/clienttaskService";

const ClientTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
  const load = async () => {
    try {
      const res = await TaskService.getClientTasks();
      setTasks(res.data);
    } catch {
      setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
    }
  };
  load();
}, []);

const markPaid = async (id) => {
  await TaskService.markPaid(id);
};

  return (
    <div style={{ display: "flex" }}>
      <ClientSidebar />
      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h3>Assigned Tasks</h3>
        {tasks.length === 0 ? (
          <p className="text-muted">No tasks assigned yet.</p>
        ) : (
          <div className="list-group">
            {tasks.map((t) => (
              <div key={t.id} className="list-group-item d-flex justify-content-between align-items-start">
                <div>
                  <h5>{t.freelancerName}</h5>
                  <p className="mb-1">Job ID: {t.jobId}</p>
                  <small className="text-muted">Status: {t.status} • Paid: {t.paid ? 'Yes' : 'No'}</small>
                </div>
                <div className="d-flex gap-2">
                  {!t.paid && <button className="btn btn-sm btn-primary" onClick={() => markPaid(t.id)}>Mark Paid</button>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientTasks;
