import React, { useState } from "react";
import Sidebar from "./Sidebar";

const SendProposal = () => {
  const [data, setData] = useState({
    price: "",
    message: "",
  });

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h2>Send Proposal</h2>
        <hr />

        <div className="mb-3">
          <label>Expected Price</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Proposal Message</label>
          <textarea
            className="form-control"
            rows="5"
            onChange={(e) => setData({ ...data, message: e.target.value })}
          ></textarea>
        </div>

        <button className="btn btn-dark">Submit Proposal</button>
      </div>
    </div>
  );
};

export default SendProposal;
