import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { getJobById } from "../../services/JobService";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    getJobById(id)
      .then(res => setJob(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h2>Job Details</h2>
        <hr />
        <p><strong>Job ID:</strong> {job.id}</p>
        <p><strong>Title:</strong> {job.title}</p>
        <p><strong>Description:</strong> {job.description}</p>
        <p><strong>Budget:</strong> {job.budget}</p>
        <button 
  className="btn btn-dark"
  onClick={() => window.location.href = `/freelancer/proposal/${job.id}`}
>
  Send Proposal
</button>

      </div>
    </div>
  );
};

export default JobDetails;
