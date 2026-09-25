import "./App.css";
import { useState } from "react";

import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);

  const handleLogin = (email) => {
    setUser({ email });
    setPage("dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    setPage("home");
  };

  return (
    <div className="app">

      <nav className="navbar">

        <h2
          className="logo"
          onClick={() => setPage("home")}
        >
          Placement Portal
        </h2>

        <div className="nav-buttons">

          {!user && (
            <>
              <button onClick={() => setPage("home")}>
                Home
              </button>

              <button onClick={() => setPage("login")}>
                Login
              </button>

              <button onClick={() => setPage("register")}>
                Register
              </button>
            </>
          )}

          {user && (
            <>
              <button onClick={() => setPage("dashboard")}>
                Dashboard
              </button>

              <button onClick={handleLogout}>
                Logout
              </button>
            </>
          )}

        </div>

      </nav>

      {page === "home" && (
        <>

          <section className="hero">

            <h1>Prepare for Your Dream Career</h1>

            <p>
              Practice aptitude, track your job applications
              and improve your resume for better placement opportunities.
            </p>

            <button
              className="start-btn"
              onClick={() => setPage("register")}
            >
              Get Started
            </button>

          </section>

          <section className="features">

            <div className="card">
              <h3>📚 Aptitude Practice</h3>
              <p>
                Practice aptitude questions for placement exams.
              </p>
            </div>

            <div className="card">
              <h3>💼 Job Tracker</h3>
              <p>
                Track your job applications and their status.
              </p>
            </div>

            <div className="card">
              <h3>📄 Resume Analyzer</h3>
              <p>
                Analyze your resume skills and improve your profile.
              </p>
            </div>

          </section>

        </>
      )}

      {page === "login" && (
        <Login
          setPage={setPage}
          onLogin={handleLogin}
        />
      )}

      {page === "register" && (
        <Register
          setPage={setPage}
        />
      )}

      {page === "dashboard" && user && (
        <Dashboard
          setPage={setPage}
          user={user}
        />
      )}

    </div>
  );
}

export default App;