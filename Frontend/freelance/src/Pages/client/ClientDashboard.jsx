import React from "react";
import ClientSidebar from "./ClientSidebar";
import { Link } from "react-router-dom";

const ClientDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <ClientSidebar />

      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h2>Welcome, Client</h2>
        <p className="text-muted">Manage your job posts and review freelancer applications here.</p>

        <hr />

        <h4>Quick Links</h4>

        <div className="d-flex gap-3 mt-4">
          <div className="p-4 shadow rounded bg-white" style={{ width: "200px" }}>
            <h5>Post a Job</h5>
            <p>Create a new job post for freelancers</p>
            <Link to="/client/post-job" className="btn btn-sm btn-primary">Go</Link>
          </div>

          <div className="p-4 shadow rounded bg-white" style={{ width: "200px" }}>
            <h5>My Jobs</h5>
            <p>View and edit your job posts</p>
            <Link to="/client/jobs" className="btn btn-sm btn-outline-primary">Go</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
