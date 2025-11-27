import React from "react";
import Sidebar from "./Sidebar";

const jobs = [
  { title: "Web Development", budget: "₹8000", desc: "Need a responsive website" },
  { title: "UI/UX Design", budget: "₹5000", desc: "Create mobile UI screens" },
  { title: "Logo Design", budget: "₹2000", desc: "Need a modern logo" },
  { title: "App Design", budget: "₹6000", desc: "Mobile app redesign" },
  { title: "Digital Marketing", budget: "₹7000", desc: "Need social media marketing" },
  { title: "Content Writing", budget: "₹1500", desc: "Write SEO friendly content" },
];

const AvailableJobs = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "260px", padding: "30px", width: "100%" }}>
        <h2>Available Jobs</h2>
        <hr />

        <div className="row">
          {jobs.map((job, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="p-3 shadow rounded bg-white">
                <h5>{job.title}</h5>
                <p className="text-muted small">{job.desc}</p>
                <strong>Budget: {job.budget}</strong>

                <div className="mt-3 d-flex gap-2">
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => window.location.href = `/freelancer/job/${index}`}
                  >
                    View Details
                  </button>

                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => window.location.href = `/freelancer/proposal/${index}`}
                  >
                    Send Proposal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AvailableJobs;
