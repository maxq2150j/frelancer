import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const JobApplications = () => {
  const { jobId } = useParams();  
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get(`/api/client/job/${jobId}/applications`);
        console.log(res.data); 
        const apps = Array.isArray(res.data) ? res.data : res.data.applications || [];
        setApplications(apps);
      } catch (err) {
        console.error(err);
        setApplications([]);
      }
    };
    if (jobId) fetchApplications();
  }, [jobId]);

  return (
    <div>
      <h3>Applications for Job {jobId}</h3>
      {Array.isArray(applications) && applications.length > 0 ? (
        applications.map(app => (
          <div key={app.id}>
            <strong>{app.freelancerName}</strong>: {app.coverLetter}
          </div>
        ))
      ) : (
        <p>No applications yet.</p>
      )}
    </div>
  );
};

export default JobApplications;
