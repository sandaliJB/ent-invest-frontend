import React from "react";
import { NavLink } from "react-router-dom";

const TopNav: React.FC = () => {
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
                  <li className="nav-item">
                    <a
                      className="nav-link btn btn-warning btn-sm rounded text-dark font-weight-bold"
                      href="/login"
                    >
                      Login
                    </a>
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
