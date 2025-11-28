import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const FreelancerTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(local);
  }, []);

  const markCompleted = (id) => {
    const local = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updated = local.map((t) => (t.id === id ? { ...t, status: 'completed' } : t));
    localStorage.setItem('tasks', JSON.stringify(updated));
    setTasks(updated);
    alert('Task marked completed. You can now request payment.');
  };

  const requestPayment = (id) => {
    const payments = JSON.parse(localStorage.getItem('payments') || '[]');
    const task = tasks.find((t) => t.id === id);
    payments.unshift({ id: Date.now(), taskId: id, amount: task.amount || 0, freelancerName: task.freelancerName, received: false });
    localStorage.setItem('payments', JSON.stringify(payments));
    alert('Payment requested.');
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
                  {t.status !== 'completed' && <button className="btn btn-sm btn-success" onClick={() => markCompleted(t.id)}>Mark Completed</button>}
                  {t.status === 'completed' && !t.paid && <button className="btn btn-sm btn-primary" onClick={() => requestPayment(t.id)}>Request Payment</button>}
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
