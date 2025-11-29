import React, { useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const SendProposal = () => {
  const { id } = useParams(); // job id
  const navigate = useNavigate();

  const [data, setData] = useState({
    price: "",
    message: "",
  });

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/proposals", {
        jobId: id,
        freelancerId: 1, 
        price: data.price,
        message: data.message,
      });

      alert("Proposal Sent Successfully!");
      navigate("/freelancer/proposals");

    } catch (err) {
      console.error(err);
      alert("Failed to send proposal");
    }
  };

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

        <button className="btn btn-dark" onClick={handleSubmit}>
          Submit Proposal
        </button>
      </div>
    </div>
  );
};

export default SendProposal;
