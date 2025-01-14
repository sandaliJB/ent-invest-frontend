import React from "react";

const Place: React.FC = () => {
  return (
    <div>
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Contact Us</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form action="">
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input
                    type="text"
                    className="message-box"
                    placeholder="Message"
                  />
                </div>
                <div className="d-flex ">
                  <button>SEND</button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <div className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6959373907916!2d79.92372117571445!3d6.926902018342607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25766a02febfd%3A0x5b68a0c35531ff9e!2sNational%20Institute%20of%20Mental%20Health!5e0!3m2!1sen!2slk!4v1736828990460!5m2!1sen!2slk"
                    width="600"
                    height="400px"
                    style={{ border: "0" }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Place;
