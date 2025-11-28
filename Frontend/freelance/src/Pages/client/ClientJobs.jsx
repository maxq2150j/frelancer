import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ClientSidebar from "./ClientSidebar";

const LOCAL_KEY = "client_jobs";

const ClientJobs = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/api/client/jobs");
        if (res?.data) setJobs(res.data);
      } catch (e) {
        const local = JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");
        setJobs(local);
      }
    };
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this job?")) return;
    try {
      await axios.delete(`/api/client/jobs/${id}`);
      setJobs((j) => j.filter((x) => x.id !== id));
    } catch (e) {
      const local = JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");
      const updated = local.filter((x) => x.id !== id);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
      setJobs(updated);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <ClientSidebar />
      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>My Jobs</h3>
          <button className="btn btn-primary" onClick={() => navigate('/client/post-job')}>Post New Job</button>
        </div>

        {jobs.length === 0 ? (
          <p className="text-muted">No jobs yet.</p>
        ) : (
          <div className="list-group">
            {jobs.map((job) => (
              <div key={job.id} className="list-group-item d-flex justify-content-between align-items-start">
                <div>
                  <h5>{job.title}</h5>
                  <p className="mb-1 text-muted">{job.description}</p>
                  <small className="text-muted">Budget: {job.budget || 'N/A'}</small>
                </div>
                <div className="d-flex gap-2">
                  <Link to={`/client/job/${job.id}/applications`} className="btn btn-outline-success btn-sm">Applications</Link>
                  <Link to={`/client/edit-job/${job.id}`} className="btn btn-outline-primary btn-sm">Edit</Link>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(job.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientJobs;
