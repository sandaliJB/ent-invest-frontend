import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../services/AuthService";

const TopNav: React.FC = () => {
  const [className, setClassName] = useState('');
  const [signed, setSigned] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem('userEmail');
    if (user) {
        setClassName('d-block nav-item mx-2');
        setSigned('d-none nav-item mx-2');
        //console.log(user);
    } else {
        setSigned('d-blcok nav-item mx-2');
        setClassName('d-none nav-item mx-2');
    }
}, [navigate]);

const handleLogout = async () => {
  try {
    const response = await logout();
    if (response) {
      sessionStorage.removeItem("authToken");
      sessionStorage.removeItem("userEmail");
      sessionStorage.removeItem("userRole");
      navigate('/login');
    }
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div style={{backgroundColor: "#4747472c"}}>
      <header className="header_section">
        <div className="header_top">
          <div className="container-fluid">
            <div className="contact_nav">
              <a href="" className="d-flex align-items-center contact-link">
                <i
                  className="fa fa-phone text-success mx-2"
                  aria-hidden="true"
                ></i>
                <span>Call : +094 778502369</span>
              </a>
              <a href="" className="d-flex align-items-center contact-link">
                <i
                  className="fa fa-envelope text-success mx-2"
                  aria-hidden="true"
                ></i>
                <span>Email : seedlink@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <span>
                  <img
                    src="./images/image.png"
                    alt="Logo"
                    style={{ width: "90px", height: "90px" }}
                  />
                </span>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-link"
                      style={({ isActive }) =>
                        isActive
                          ? { color: "white", fontWeight: "bold" }
                          : { color: "white" }
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/entrepreneur"
                      className="nav-link"
                      style={({ isActive }) =>
                        isActive
                          ? { color: "white", fontWeight: "bold" }
                          : { color: "white" }
                      }
                    >
                      Entrepreneurs
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/invester"
                      className="nav-link"
                      style={({ isActive }) =>
                        isActive
                          ? { color: "white", fontWeight: "bold" }
                          : { color: "white" }
                      }
                    >
                      Investors
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/funds"
                      className="nav-link"
                      style={({ isActive }) =>
                        isActive
                          ? { color: "white", fontWeight: "bold" }
                          : { color: "white" }
                      }
                    >
                      Funds
                    </NavLink>
                  </li>
                  <li className={signed}>
                    <a className="nav-link btn btn-success btn-sm rounded text-white font-weight-bold border-0" href="/login" > Login </a>
                    
                  </li>
                  <li className={className}>
                    <a className="nav-link btn btn-success btn-sm rounded text-white font-weight-bold border-0" onClick={handleLogout} > Logout </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
export default TopNav;
