import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const FreelancerPayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('payments') || '[]');
    setPayments(local);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h3>Payments Received</h3>
        {payments.length === 0 ? (
          <p className="text-muted">No payments yet.</p>
        ) : (
          <div className="list-group">
            {payments.map((p) => (
              <div key={p.id} className="list-group-item d-flex justify-content-between align-items-start">
                <div>
                  <h5>From: {p.payerName || 'Client'}</h5>
                  <p className="mb-1">Task ID: {p.taskId} • Amount: {p.amount || 'N/A'}</p>
                  <small className="text-muted">Freelancer: {p.freelancerName || 'You'}</small>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FreelancerPayments;
