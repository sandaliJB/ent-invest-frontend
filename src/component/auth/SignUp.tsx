import React, { useState } from 'react';
import TopNav from '../layout/TopNav';
import Footer from '../layout/Footer';

const SignUp: React.FC = () => {
  const [userType, setUserType] = useState<string>('');

  // Function to render specific fields based on user type
  const renderUserSpecificFields = () => {
    if (userType === 'investor') {
      return (
        <>
          <div className="mb-3">
            <label htmlFor="investmentInterest" className="form-label">
              Investment Interests
            </label>
            <input
              type="text"
              className="form-control"
              id="investmentInterest"
              placeholder="e.g., Technology, Healthcare"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="portfolioSize" className="form-label">
              Portfolio Size ($)
            </label>
            <input
              type="number"
              className="form-control"
              id="portfolioSize"
              placeholder="Enter your portfolio size"
              required
            />
          </div>
          {/* Common Fields */}
          <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email address"
                required
              />
            </div>
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
        </>
      );
    } else if (userType === 'entrepreneur') {
      return (
        <>
          <div className="mb-3">
            <label htmlFor="businessName" className="form-label">
              Business Name
            </label>
            <input
              type="text"
              className="form-control"
              id="businessName"
              placeholder="Enter your business name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="businessIndustry" className="form-label">
              Business Industry
            </label>
            <input
              type="text"
              className="form-control"
              id="businessIndustry"
              placeholder="e.g., Technology, Retail"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fundingAmount" className="form-label">
              Funding Amount Needed ($)
            </label>
            <input
              type="number"
              className="form-control"
              id="fundingAmount"
              placeholder="Enter funding amount needed"
              required
            />
          </div>
          {/* Common Fields */}
          <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email address"
                required
              />
            </div>
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
        </>
      );
    }
  };

  return (
    <div>
        <TopNav />
        <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: '500px', borderRadius: '10px' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Sign Up</h3>
          <form>
            {/* User Type Selection */}
            <div className="mb-3">
              <label htmlFor="userType" className="form-label">
                Select User Type
              </label>
              <select
                className="form-control"
                id="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                required
              >
                <option value="">-- Select Option --</option>
                <option value="investor">Investor</option>
                <option value="entrepreneur">Entrepreneur</option>
              </select>
            </div>

            {/* User-Specific Fields */}
            {renderUserSpecificFields()}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-100 mt-3"
              style={{ borderRadius: '25px' }}
            >
              Sign Up
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-3 text-center">
            <span>Already have an account? </span>
            <a href="/login" className="text-decoration-none">Login</a>
          </div>
        </div>
      </div>
    </div>
    <Footer />  
    </div>
  );
};

export default SignUp;
