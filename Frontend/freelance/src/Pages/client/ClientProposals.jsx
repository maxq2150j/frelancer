import React, { useEffect, useState } from "react";
import axios from "axios";
import ClientSidebar from "./ClientSidebar";

const PROP_KEY = "proposals";

const normalize = (v) => {
  if (Array.isArray(v)) return v;
  if (!v) return [];
  if (v.proposals && Array.isArray(v.proposals)) return v.proposals;
  return [];
};

const ClientProposals = () => {
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDemo = () => {
    const demo = [
      { id: 201, jobId: 1650000000000, freelancerName: 'Alice', coverLetter: 'I can deliver this in 3 days', amount: 500, status: 'pending' },
      { id: 202, jobId: 1650000000000, freelancerName: 'Bob', coverLetter: 'I have done similar work', amount: 450, status: 'pending' }
    ];
    localStorage.setItem('proposals', JSON.stringify(demo));
    setProposals(normalize(demo));
  };

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const res = await axios.get("/api/client/proposals");
        setProposals(normalize(res?.data));
      } catch (e) {
        let local = [];
        try {
          local = JSON.parse(localStorage.getItem(PROP_KEY) || "[]");
        } catch (err) {
          local = [];
        }
        if (!Array.isArray(local) || local.length === 0) {
          // auto-load demo so UI isn't blank on first visit
          const demo = [
            { id: 201, jobId: 1650000000000, freelancerName: 'Alice', coverLetter: 'I can deliver this in 3 days', amount: 500, status: 'pending' },
            { id: 202, jobId: 1650000000000, freelancerName: 'Bob', coverLetter: 'I have done similar work', amount: 450, status: 'pending' }
          ];
          localStorage.setItem(PROP_KEY, JSON.stringify(demo));
          setProposals(normalize(demo));
        } else {
          setProposals(normalize(local));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProposals();
  }, []);

  const updateStatus = (id, status) => {
    // UI-only update: persist to localStorage and state
    const updated = proposals.map((p) => (p.id === id ? { ...p, status } : p));
    setProposals(updated);
    try {
      const local = JSON.parse(localStorage.getItem(PROP_KEY) || "[]");
      const merged = local.map((p) => (p.id === id ? { ...p, status } : p));
      localStorage.setItem(PROP_KEY, JSON.stringify(merged));
    } catch (e) {
      // ignore
    }
  };

  // assign form handling
  const [assigningId, setAssigningId] = useState(null);
  const [taskDetails, setTaskDetails] = useState("");
  const [taskDuration, setTaskDuration] = useState("");
  const [taskAmount, setTaskAmount] = useState("");

  const startAssign = (proposal) => {
    setAssigningId(proposal.id);
    setTaskDetails("");
    setTaskDuration("");
    setTaskAmount(proposal.amount || "");
  };

  const handleAssignSubmit = (proposalId) => {
    const proposal = proposals.find((p) => p.id === proposalId);
    if (!proposal) return;
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const task = {
      id: Date.now(),
      jobId: proposal.jobId || null,
      proposalId: proposalId,
      freelancerId: proposal.freelancerId || null,
      freelancerName: proposal.freelancerName || 'Freelancer',
      details: taskDetails,
      duration: taskDuration,
      amount: taskAmount || proposal.amount || 0,
      status: 'assigned',
      paid: false,
    };
    const updatedTasks = [task, ...tasks];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // update proposals store: ensure status accepted
    const updatedProposals = proposals.map((p) => (p.id === proposalId ? { ...p, status: 'accepted' } : p));
    setProposals(updatedProposals);
    try {
      const local = JSON.parse(localStorage.getItem(PROP_KEY) || "[]");
      const merged = local.map((p) => (p.id === proposalId ? { ...p, status: 'accepted' } : p));
      localStorage.setItem(PROP_KEY, JSON.stringify(merged));
    } catch (e) {
      // ignore
    }

    setAssigningId(null);
    setTaskDetails("");
    setTaskDuration("");
    setTaskAmount("");
    alert('Task created and assigned to ' + task.freelancerName);
  };
 
  return (
    <div style={{ display: "flex" }}>
      <ClientSidebar />
      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h2>Proposals</h2>
        <div className="mb-3">
          <button className="btn btn-sm btn-outline-secondary" onClick={loadDemo}>Load Demo Proposals</button>
        </div>
        <p className="text-muted">Proposals submitted by freelancers for your jobs.</p>

        {loading ? (
          <p className="text-muted">Loading…</p>
        ) : proposals.length === 0 ? (
          <div>
            <p className="text-muted">No proposals yet.</p>
            <button className="btn btn-sm btn-outline-secondary" onClick={loadDemo}>Load Demo Proposals</button>
          </div>
        ) : (
          <div className="list-group">
            {proposals.map((p) => (
              <React.Fragment key={p.id}>
                <div className="list-group-item d-flex justify-content-between align-items-start">
                  <div>
                    <h5>{p.freelancerName || 'Freelancer'}</h5>
                    <p className="mb-1">{p.coverLetter}</p>
                    <small className="text-muted">Job ID: {p.jobId} • Amount: {p.amount || 'N/A'}</small>
                  </div>
                  <div className="d-flex gap-2">
                    <button className={`btn btn-sm ${p.status === 'accepted' ? 'btn-success' : 'btn-outline-success'}`} onClick={() => startAssign(p)}>Accept</button>
                    <button className={`btn btn-sm ${p.status === 'rejected' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => updateStatus(p.id, 'rejected')}>Reject</button>
                  </div>
                </div>

                {assigningId === p.id && (
                  <div className="list-group-item mt-2">
                    <h6>Assign Task to {p.freelancerName}</h6>
                    <div className="mb-2">
                      <label className="form-label">Task Details</label>
                      <textarea className="form-control" value={taskDetails} onChange={(e) => setTaskDetails(e.target.value)} />
                    </div>
                    <div className="mb-2">
                      <label className="form-label">Duration</label>
                      <input className="form-control" value={taskDuration} onChange={(e) => setTaskDuration(e.target.value)} />
                    </div>
                    <div className="mb-2">
                      <label className="form-label">Amount</label>
                      <input className="form-control" value={taskAmount} onChange={(e) => setTaskAmount(e.target.value)} />
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-primary" onClick={() => handleAssignSubmit(p.id)}>Create Task</button>
                      <button className="btn btn-sm btn-outline-secondary" onClick={() => setAssigningId(null)}>Cancel</button>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientProposals;
