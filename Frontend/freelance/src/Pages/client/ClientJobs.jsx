import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ClientSidebar from "./ClientSidebar";
import ClientJobService from "../../services/clientjobService";

const LOCAL_KEY = "client_jobs";

const ClientJobs = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  const load = async () => {
    try {
      const res = await ClientJobService.getJobs();
      setJobs(res.data);
    } catch (err) {
      setJobs(JSON.parse(localStorage.getItem("client_jobs") || "[]"));
    }
  };
  load();
}, []);

const handleDelete = async (id) => {
  await ClientJobService.deleteJob(id);
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
