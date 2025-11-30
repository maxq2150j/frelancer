import React, { useEffect, useState } from "react";
import ClientSidebar from "./ClientSidebar";
import ProposalService from "../../services/clientproposalService";

const ClientProposals = () => {
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProposals = async () => {
      try {
        const res = await ProposalService.getAllProposals();
        setProposals(res.data || []);
      } catch (err) {
        console.error("Failed to fetch proposals", err);
        setProposals([]);
      } finally {
        setLoading(false);
      }
    };

    loadProposals();
  }, []);

  
  const updateStatus = async (id, status) => {
    try {
      await ProposalService.updateStatus(id, status);
      
      setProposals(prev =>
        prev.map(p => (p.id === id ? { ...p, status } : p))
      );
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  
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

  const handleAssignSubmit = async (proposalId) => {
    const proposal = proposals.find((p) => p.id === proposalId);
    if (!proposal) return;

    
    console.log("Assigning task to backend:", {
      jobId: proposal.jobId,
      proposalId,
      freelancerId: proposal.freelancerId,
      details: taskDetails,
      duration: taskDuration,
      amount: taskAmount || proposal.amount,
    });

   
    setProposals(prev =>
      prev.map(p => (p.id === proposalId ? { ...p, status: 'accepted' } : p))
    );

    setAssigningId(null);
    setTaskDetails("");
    setTaskDuration("");
    setTaskAmount("");
    alert('Task assigned to ' + proposal.freelancerName);
  };

  return (
    <div style={{ display: "flex" }}>
      <ClientSidebar />
      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h2>Proposals</h2>
        <p className="text-muted">Proposals submitted by freelancers for your jobs.</p>

        {loading ? (
          <p className="text-muted">Loading…</p>
        ) : proposals.length === 0 ? (
          <p className="text-muted">No proposals yet.</p>
        ) : (
          <div className="list-group">
            {proposals.map((p) => (
              <React.Fragment key={p.id}>
                <div className="list-group-item d-flex justify-content-between align-items-start">
                  <div>
                    <h5>{p.freelancerName || 'Freelancer'}</h5>
                    <p className="mb-1">{p.coverLetter}</p>
                    <small className="text-muted">
                      Job ID: {p.jobId} • Amount: {p.amount || 'N/A'}
                    </small>
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      className={`btn btn-sm ${p.status === 'accepted' ? 'btn-success' : 'btn-outline-success'}`}
                      onClick={() => startAssign(p)}
                    >
                      Accept
                    </button>
                    <button
                      className={`btn btn-sm ${p.status === 'rejected' ? 'btn-danger' : 'btn-outline-danger'}`}
                      onClick={() => updateStatus(p.id, 'rejected')}
                    >
                      Reject
                    </button>
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
