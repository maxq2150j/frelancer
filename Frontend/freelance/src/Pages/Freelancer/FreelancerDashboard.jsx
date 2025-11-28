import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const FreelancerDashboard = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    try {
      const local = JSON.parse(localStorage.getItem('payments') || '[]');
      setPayments(local);
    } catch (e) {
      setPayments([]);
    }
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h2>Welcome, Freelancer</h2>
        <p className="text-muted">Here are jobs available for you.</p>

        <hr />

        <h4>Quick Links</h4>

        <div className="d-flex gap-3 mt-4">
          <div className="p-4 shadow rounded bg-white" style={{ width: "200px" }}>
            <h5>Available Jobs</h5>
            <p>Check all active job posts</p>
            <Link to="/freelancer/jobs" className="btn btn-sm btn-outline-primary mt-2">Open</Link>
          </div>

          <div className="p-4 shadow rounded bg-white" style={{ width: "200px" }}>
            <h5>Your Proposals</h5>
            <p>View or update proposals</p>
            <Link to="/freelancer/proposals" className="btn btn-sm btn-outline-primary mt-2">Open</Link>
          </div>

          <div className="p-4 shadow rounded bg-white" style={{ width: "200px" }}>
            <h5>My Tasks</h5>
            <p>Tasks assigned by clients</p>
            <Link to="/freelancer/tasks" className="btn btn-sm btn-outline-primary mt-2">Open</Link>
          </div>

          <div className="p-4 shadow rounded bg-white" style={{ width: "200px" }}>
            <h5>Payments Received</h5>
            <p className="text-muted">Recent payments below</p>
            <Link to="/freelancer/payments" className="btn btn-sm btn-outline-primary mt-2">Open</Link>

            {payments && payments.length > 0 && (
              <div className="mt-3">
                <small className="text-muted">Last payment from:</small>
                <div><strong>{payments[0].payerName || 'Client'}</strong> — {payments[0].amount || 'N/A'}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
