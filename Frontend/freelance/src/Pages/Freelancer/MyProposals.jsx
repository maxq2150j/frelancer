import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const MyProposals = () => {
  const navigate = useNavigate();

  
  const [proposals, setProposals] = useState([
    { id: 1, job: "UI Design", status: "Sent", price: 5000, message: "I can do it" },
    { id: 2, job: "Logo Design", status: "Pending", price: 2000, message: "Creative design" },
  ]);

  
  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this proposal?")) {
      setProposals(proposals.filter((p) => p.id !== id));
    }
  };

 
  const handleEdit = (proposal) => {
    navigate(`/freelancer/proposal/edit/${proposal.id}`, { state: proposal });
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h2>My Proposals</h2>
        <hr />

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Job</th>
              <th>Status</th>
              <th>Price</th>
              <th>Message</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {proposals.map((p) => (
              <tr key={p.id}>
                <td>{p.job}</td>
                <td>{p.status}</td>
                <td>₹{p.price}</td>
                <td>{p.message}</td>
                <td>
                  <button className="btn btn-sm btn-dark" onClick={() => handleEdit(p)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(p.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProposals;
