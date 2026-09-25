import { useState } from "react";

function Login({ setPage, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    onLogin(email);
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>🔐 Login</h1>

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
            placeholder="Enter your password"
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
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="switch-text">
          Don't have an account?

          <button
            type="button"
            onClick={() => setPage("register")}
          >
            Register
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;