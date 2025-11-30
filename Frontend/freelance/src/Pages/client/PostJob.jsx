import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ClientSidebar from "./ClientSidebar";
import ClientJobService from "../../services/clientjobService";


const LOCAL_KEY = "client_jobs";

const PostJob = () => {
  const [job, setJob] = useState({ title: "", description: "", budget: "" });
  const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await ClientJobService.createJob(job);
    alert("Job posted");
    navigate("/client/jobs");
  } catch (e) {
    console.log(e);
  }
};

  return (
    <div style={{ display: "flex" }}>
      <ClientSidebar />
      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h3 className="mb-3">Post a New Job</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input className="form-control" value={job.title} onChange={(e) => setJob({ ...job, title: e.target.value })} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" rows={4} value={job.description} onChange={(e) => setJob({ ...job, description: e.target.value })} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Budget</label>
            <input className="form-control" value={job.budget} onChange={(e) => setJob({ ...job, budget: e.target.value })} />
          </div>
          <button className="btn btn-primary" type="submit">Post Job</button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
