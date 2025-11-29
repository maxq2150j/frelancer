import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { getAllTasks, markTaskCompleted } from "../../services/taskService";

const FreelancerTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await getAllTasks();
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  const handleMarkCompleted = async (id) => {
    try {
      await markTaskCompleted(id);
      fetchTasks(); 
      alert('Task marked completed. You can now request payment.');
    } catch (err) {
      console.error("Error marking task completed:", err);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h3>My Tasks</h3>
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
                  {t.status !== 'completed' && 
                    <button className="btn btn-sm btn-success" onClick={() => handleMarkCompleted(t.id)}>
                      Mark Completed
                    </button>
                  }
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-4">
          <Link to="/freelancer-dashboard" className="btn btn-outline-secondary">Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default FreelancerTasks;
