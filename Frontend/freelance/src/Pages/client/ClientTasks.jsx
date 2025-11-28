import React, { useEffect, useState } from "react";
import ClientSidebar from "./ClientSidebar";

const ClientTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(local);
  }, []);

  const markPaid = (id) => {
    const local = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updated = local.map((t) => (t.id === id ? { ...t, paid: true } : t));
    localStorage.setItem('tasks', JSON.stringify(updated));
    setTasks(updated);
    // record payment with payer name
    const payments = JSON.parse(localStorage.getItem('payments') || '[]');
    const task = updated.find((t) => t.id === id);
    const payerName = window.prompt('Enter your name (payer) to record payment:', 'Client');
    payments.unshift({ id: Date.now(), taskId: id, amount: task.amount || 0, freelancerName: task.freelancerName, payerName: payerName || 'Client' });
    localStorage.setItem('payments', JSON.stringify(payments));
    alert('Marked as paid');
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
