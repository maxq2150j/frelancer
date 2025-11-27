import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

const EditProposal = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const proposal = location.state;

  const [data, setData] = useState({
    price: proposal.price,
    message: proposal.message,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert("Proposal Updated!");
    navigate("/freelancer/proposals");
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h2>Edit Proposal for: {proposal.job}</h2>
        <hr />

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Expected Price</label>
            <input
              type="number"
              className="form-control"
              value={data.price}
              onChange={(e) => setData({ ...data, price: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Proposal Message</label>
            <textarea
              className="form-control"
              rows="5"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
            ></textarea>
          </div>

          <button className="btn btn-dark">Update Proposal</button>
        </form>
      </div>
    </div>
  );
};

export default EditProposal;
