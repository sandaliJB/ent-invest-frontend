import React from "react";

const TopNav: React.FC = () => {
  return (
    <div>
      <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="contact_nav">
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +01 123455678990
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Email : demo@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>
                Inance
              </span>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/entrepreneur"> Entrepreneurs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">Investors</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Oppurtunities</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Funds</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-warning btn-sm rounded text-dark font-weight-bold" href="/login">Login</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    </div>
  );
}
export default TopNav;