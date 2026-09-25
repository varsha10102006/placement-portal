import { useState } from "react";
import Aptitude from "./Aptitude";
import JobTracker from "./JobTracker";
import ResumeAnalyzer from "./ResumeAnalyzer";

function Dashboard({ setPage, user }) {

  const [section, setSection] = useState("dashboard");

  if (section === "aptitude") {
    return (
      <Aptitude
        setSection={setSection}
      />
    );
  }

  if (section === "jobs") {
    return (
      <JobTracker
        setSection={setSection}
      />
    );
  }

  if (section === "resume") {
    return (
      <ResumeAnalyzer
        setSection={setSection}
      />
    );
  }

  return (
    <div className="dashboard">

      <div className="dashboard-header">

        <div>
          <h1>Welcome to Dashboard 👋</h1>

          <p>
            Logged in as: {user.email}
          </p>
        </div>

      </div>

      <div className="dashboard-cards">

        <div
          className="dashboard-card"
          onClick={() => setSection("aptitude")}
        >
          <h2>📚</h2>
          <h3>Aptitude Practice</h3>
          <p>
            Practice placement aptitude questions.
          </p>

          <button>
            Start Practice
          </button>
        </div>

        <div
          className="dashboard-card"
          onClick={() => setSection("jobs")}
        >
          <h2>💼</h2>
          <h3>Job Tracker</h3>
          <p>
            Track your job applications.
          </p>

          <button>
            Track Jobs
          </button>
        </div>

        <div
          className="dashboard-card"
          onClick={() => setSection("resume")}
        >
          <h2>📄</h2>
          <h3>Resume Analyzer</h3>
          <p>
            Check your resume skills.
          </p>

          <button>
            Analyze Resume
          </button>
        </div>

      </div>

      <button
        className="back-home-btn"
        onClick={() => setPage("home")}
      >
        Back to Home
      </button>

    </div>
  );
}

export default Dashboard;