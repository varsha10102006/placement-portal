import { useState } from "react";

function Register({ setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    if (name === "" || email === "" || password === "") {
      alert("Please fill all the fields");
      return;
    }

    alert(`Registration successful! Welcome ${name}`);
    setPage("login");
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>📝 Register</h1>

        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button
          className="login-btn"
          onClick={handleRegister}
        >
          Register
        </button>

        <p className="switch-text">
          Already have an account?

          <button
            type="button"
            onClick={() => setPage("login")}
          >
            Login
          </button>
        </p>

      </div>
    </div>
  );
}

export default Register;