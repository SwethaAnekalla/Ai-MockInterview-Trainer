import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
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

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Signup Successful!");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        {/* Left Section */}
        <div className="left-panel">

          <h1>AI Mock Interview Trainer</h1>

          <p>
            Start your interview journey with AI.
            Practice unlimited mock interviews,
            receive instant feedback,
            and build confidence before your real interview.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
            alt="AI Robot"
          />

        </div>

        {/* Right Section */}

        <div className="right-panel">

          <h2>Create Account 🚀</h2>

          <p className="tagline">
            Join thousands preparing smarter with AI.
          </p>

          <form onSubmit={handleSignup}>

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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

            <button
              type="submit"
              className="auth-btn"
            >
              Create Account
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
            Already have an account?
            <Link to="/"> Login</Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Signup;