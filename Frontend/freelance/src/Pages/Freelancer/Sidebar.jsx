import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        background: "#111",
        color: "#fff",
        padding: "20px",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <h3 className="text-light mb-4">Freelancer</h3>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li className="mb-3">
          <Link to="/freelancer-dashboard" className="text-light text-decoration-none">
            Dashboard
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/freelancer/jobs" className="text-light text-decoration-none">
            Available Jobs
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/freelancer/proposals" className="text-light text-decoration-none">
            My Proposals
          </Link>
        </li>
        <li className="mt-1">
          <Link to="/login" className="text-danger fw-bold text-decoration-none">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
