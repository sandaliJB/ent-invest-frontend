import React from "react";

const About: React.FC = () => {
  return (
    <section className="about_section layout_padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="detail-box">
              <h2>About us</h2>
              <p className="text-justify">
              At InvestConnect, our mission is to empower entrepreneurs to showcase their ideas, 
              attract investments, and achieve success, while providing investors with unparalleled 
              opportunities to discover and support the next big ventures. We aim to create a seamless 
              ecosystem where connections thrive, and potential is unlocked.
              </p>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="img-box">
              <img src="/images/2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
