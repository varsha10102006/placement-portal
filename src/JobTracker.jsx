import { useState } from "react";

function JobTracker({ setSection }) {

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  const [jobs, setJobs] = useState([]);

  const addJob = () => {

    if (company === "" || role === "") {
      alert("Please enter company and role");
      return;
    }

    const newJob = {
      company: company,
      role: role,
      status: status
    };

    setJobs([...jobs, newJob]);

    setCompany("");
    setRole("");
    setStatus("Applied");
  };

  return (
    <div className="job-container">

      <div className="job-card">

        <h1>💼 Job Tracker</h1>

        <input
          type="text"
          placeholder="Company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          type="text"
          placeholder="Job role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Selected</option>
          <option>Rejected</option>
        </select>

        <button onClick={addJob}>
          Add Job
        </button>

      </div>

      <div className="jobs-list">

        <h2>My Applications</h2>

        {jobs.length === 0 ? (
          <p>No applications added yet.</p>
        ) : (

          jobs.map((job, index) => (

            <div
              className="job-item"
              key={index}
            >
              <h3>{job.company}</h3>

              <p>
                Role: {job.role}
              </p>

              <p>
                Status: {job.status}
              </p>

            </div>

          ))

        )}

      </div>

      <button
        className="back-home-btn"
        onClick={() => setSection("dashboard")}
      >
        Back to Dashboard
      </button>

    </div>
  );
}

export default JobTracker;