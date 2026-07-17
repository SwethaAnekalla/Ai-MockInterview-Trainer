import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    alert("Login Successful!");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        {/* Left Side */}
        <div className="left-panel">
          <h1>AI Mock Interview Trainer</h1>

          <p>
            Ace Every Interview with AI.
            Practice coding, HR and technical interviews with
            personalized AI feedback and improve your confidence.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
            alt="AI Robot"
          />
        </div>

        {/* Right Side */}
        <div className="right-panel">

          <h2>Welcome Back 👋</h2>

          <p className="tagline">
            Sign in to continue your interview journey.
          </p>

          <form onSubmit={handleLogin}>

            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="show-password">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <span>Show Password</span>
            </div>

            <button className="auth-btn">
              Login
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <button
              type="button"
              className="google-btn"
            >
              Continue with Google
            </button>

          </form>

          <p className="auth-footer">
            Don't have an account?
            <Link to="/signup"> Sign Up</Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Login;