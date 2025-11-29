import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyProposals = () => {
  const navigate = useNavigate();
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/proposals/freelancer/1")
      .then(res => setProposals(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`http://localhost:8080/proposals/${id}`);
      setProposals(proposals.filter(p => p.id !== id));
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
              
             
              <th>Price</th>
              <th>Message</th>
               <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {proposals.map((p) => (
              <tr key={p.id}>
                
               
                <td>₹{p.price}</td>
                <td>{p.message}</td>
                 <td>{p.status}</td>
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
