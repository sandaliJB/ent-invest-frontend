import React from "react";

const Contact: React.FC = () => {
  return (
    <div>
      <section className="info_section ">
        <div className="container">
          <h4>Get In Touch</h4>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="info_items">
                <div className="row">
                  <div className="col-md-4">
                    <a href="">
                      <div className="item ">
                        <div className="img-box ">
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <p>Lorem Ipsum is simply dummy text</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="">
                      <div className="item ">
                        <div className="img-box ">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <p>+02 1234567890</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="">
                      <div className="item ">
                        <div className="img-box">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <p>demo@gmail.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-box">
          <h4>Follow Us</h4>
          <div className="box">
            <a href="">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa fa-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands fa fa-youtube"></i>
            </a>
            <a href="">
              <i className="fa-brands fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
