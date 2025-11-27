import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

const JobDetails = () => {
  const { id } = useParams();

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h2>Job Details</h2>
        <hr />

        <p><strong>Job ID:</strong> {id}</p>
        <p><strong>Full job description will come from backend.</strong></p>

        <button className="btn btn-dark">Send Proposal</button>
      </div>
    </div>
  );
};

export default JobDetails;
