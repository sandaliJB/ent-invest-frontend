import React from "react";
import TopNav from "../layout/TopNav";
import Footer from "../layout/Footer";

const Login: React.FC = () => {
  return (
    <div>
      <TopNav />
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div
          className="card shadow p-4"
          style={{ width: "400px", borderRadius: "10px" }}
        >
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Login</h3>
            <form>
              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
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
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
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
