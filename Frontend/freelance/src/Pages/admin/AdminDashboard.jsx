import React, { useEffect, useState } from "react";
import axios from "axios";

const CLIENT_KEY = "clients";
const FREELANCER_KEY = "freelancers";

const AdminDashboard = () => {
  const [clients, setClients] = useState([]);
  const [freelancers, setFreelancers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("/api/admin/stats");
        if (res?.data) {
          setClients(res.data.clients || []);
          setFreelancers(res.data.freelancers || []);
        }
      } catch (e) {
        // fallback to localStorage demo data
        try {
          const localClients = JSON.parse(localStorage.getItem(CLIENT_KEY) || "[]");
          const localFreelancers = JSON.parse(localStorage.getItem(FREELANCER_KEY) || "[]");
          setClients(localClients);
          setFreelancers(localFreelancers);
        } catch (err) {
          setClients([]);
          setFreelancers([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const loadDemo = () => {
    const demoClients = [
      { id: 1, name: "Client A", email: "clienta@example.com" },
      { id: 2, name: "Client B", email: "clientb@example.com" }
    ];
    const demoFreelancers = [
      { id: 11, name: "Freelancer X", email: "fx@example.com" },
      { id: 12, name: "Freelancer Y", email: "fy@example.com" }
    ];
    localStorage.setItem(CLIENT_KEY, JSON.stringify(demoClients));
    localStorage.setItem(FREELANCER_KEY, JSON.stringify(demoFreelancers));
    setClients(demoClients);
    setFreelancers(demoFreelancers);
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Dashboard</h2>
        <div>
          <button className="btn btn-sm btn-outline-secondary me-2" onClick={loadDemo}>Load Demo Data</button>
        </div>
      </div>

      {loading ? (
        <p className="text-muted">Loading…</p>
      ) : (
        <>
          <div className="d-flex gap-3 mb-4">
            <div className="p-3 shadow rounded bg-white" style={{ width: 220 }}>
              <h5>Clients</h5>
              <h3>{clients.length}</h3>
            </div>

            <div className="p-3 shadow rounded bg-white" style={{ width: 220 }}>
              <h5>Freelancers</h5>
              <h3>{freelancers.length}</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Client Details</h5>
                  {clients.length === 0 ? (
                    <p className="text-muted">No clients.</p>
                  ) : (
                    <ul className="list-group list-group-flush">
                      {clients.map((c) => (
                        <li key={c.id} className="list-group-item">
                          <strong>{c.name}</strong>
                          <div className="text-muted">{c.email}</div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Freelancer Details</h5>
                  {freelancers.length === 0 ? (
                    <p className="text-muted">No freelancers.</p>
                  ) : (
                    <ul className="list-group list-group-flush">
                      {freelancers.map((f) => (
                        <li key={f.id} className="list-group-item">
                          <strong>{f.name}</strong>
                          <div className="text-muted">{f.email}</div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
