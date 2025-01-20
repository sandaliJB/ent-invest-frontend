import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TopNav from "../layout/TopNav";
import Footer from "../layout/Footer";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userEmail: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:8080/api/user/signing", formData);
      if (response.data) {
        sessionStorage.setItem("authToken", response.data.token);
        sessionStorage.setItem("userEmail", response.data.userEmail);
        sessionStorage.setItem("userRole", response.data.userRole);
        sessionStorage.setItem("userId", response.data.userId);
        navigate("/");
      } else {
        setError("Invalid response from server. Please try again.");
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data || "Invalid email or password. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };
    

  return (
    <div className="hero_area">
      <div style={{ backgroundColor: "#4747472c" }}>
        <TopNav />
      </div>

      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div className="card shadow p-4" style={{ width: "400px", borderRadius: "10px" }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Login</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  name="userEmail"
                  value={formData.userEmail}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember Me
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{ borderRadius: "25px" }}
              >
                Login
              </button>
            </form>

            {/* Additional Links */}
            <div className="mt-3 text-center">
              <a href="#" className="text-decoration-none">
                Forgot Password?
              </a>
            </div>
            <div className="mt-2 text-center">
              <span>Don't have an account? </span>
              <a href="/register" className="text-decoration-none">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;