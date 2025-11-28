import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ClientSidebar from "./ClientSidebar";

const APP_KEY = "applications";

const JobApplications = () => {
  const { id } = useParams();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get(`/api/client/jobs/${id}/applications`);
        if (res?.data) setApplications(res.data);
      } catch (e) {
        const local = JSON.parse(localStorage.getItem(APP_KEY) || "[]");
        setApplications(local.filter((a) => String(a.jobId) === String(id)));
      }
    };
    fetchApplications();
  }, [id]);

  const updateStatus = async (appId, status) => {
    try {
      await axios.post(`/api/client/applications/${appId}/${status}`);
      setApplications((a) => a.map((x) => (x.id === appId ? { ...x, status } : x)));
    } catch (e) {
      const local = JSON.parse(localStorage.getItem(APP_KEY) || "[]");
      const updated = local.map((x) => (x.id === appId ? { ...x, status } : x));
      localStorage.setItem(APP_KEY, JSON.stringify(updated));
      setApplications(updated.filter((a) => String(a.jobId) === String(id)));
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <ClientSidebar />
      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h3 className="mb-3">Applications for Job #{id}</h3>

        {applications.length === 0 ? (
          <p className="text-muted">No applications yet.</p>
        ) : (
          <div className="list-group">
            {applications.map((app) => (
              <div key={app.id} className="list-group-item d-flex justify-content-between align-items-start">
                <div>
                  <h5>{app.freelancerName || 'Freelancer'}</h5>
                  <p className="mb-1">{app.coverLetter}</p>
                  <small className="text-muted">Status: {app.status || 'pending'}</small>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-success btn-sm" onClick={() => updateStatus(app.id, 'accepted')}>Accept</button>
                  <button className="btn btn-danger btn-sm" onClick={() => updateStatus(app.id, 'rejected')}>Reject</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobApplications;
