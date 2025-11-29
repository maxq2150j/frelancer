import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { getAlljobs } from "../../services/JobService";

const AvailableJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getAlljobs()
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h2>Available Jobs</h2>
        <hr />
        <div className="row">
          {jobs.map((job) => (
            <div className="col-md-4 mb-4" key={job.id}>
              <div className="p-3 shadow rounded bg-white">
                <h5>{job.title}</h5>
                <p className="text-muted small">{job.description}</p>
                <strong>Budget: {job.budget}</strong>
                <div className="mt-3 d-flex gap-2">
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => window.location.href = `/freelancer/job/${job.id}`}
                  >
                    View Details
                  </button>
                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => window.location.href = `/freelancer/proposal/${job.id}`}
                  >
                    Send Proposal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableJobs;
