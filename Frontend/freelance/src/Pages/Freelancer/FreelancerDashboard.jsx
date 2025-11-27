import React from "react";
import Sidebar from "./Sidebar";

const FreelancerDashboard = () => {
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
          </div>

          <div className="p-4 shadow rounded bg-white" style={{ width: "200px" }}>
            <h5>Your Proposals</h5>
            <p>View or update proposals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
