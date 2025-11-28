import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ClientSidebar from "./ClientSidebar";

const LOCAL_KEY = "client_jobs";

const EditJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState({ title: "", description: "", budget: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`/api/client/jobs/${id}`);
        if (res?.data) setJob(res.data);
      } catch (e) {
        const local = JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");
        const found = local.find((j) => String(j.id) === String(id));
        if (found) setJob(found);
      }
    };
    fetchJob();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/client/jobs/${id}`, job);
      alert("Job updated");
      navigate('/client/jobs');
    } catch (e) {
      const local = JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");
      const updated = local.map((j) => (String(j.id) === String(id) ? { ...j, ...job } : j));
      localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
      alert("Job updated locally (no backend).");
      navigate('/client/jobs');
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <ClientSidebar />
      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h3 className="mb-3">Edit Job</h3>
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
          <button className="btn btn-primary" type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditJob;
