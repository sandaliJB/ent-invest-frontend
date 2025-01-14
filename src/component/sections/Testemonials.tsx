import React, { useEffect } from 'react';

// Extend JQuery interface to include owlCarousel method
interface JQuery {
  owlCarousel(options?: any): JQuery;
}

declare global {
  interface JQuery {
    owlCarousel(options?: any): JQuery;
  }
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
import 'owl.carousel';

const Testimonials: React.FC = () => {
  useEffect(() => {
    // Ensure Owl Carousel initializes once the DOM is loaded
    $('.owl-carousel').owlCarousel({
      loop: true, // Infinite looping
      margin: 10, // Margin between items
      nav: true, // Show navigation arrows
      dots: true, // Show dots for pagination
      responsive: {
        0: { items: 1 }, // 1 item on small screens
        600: { items: 2 }, // 2 items on medium screens
        1000: { items: 3 }, // 3 items on large screens
      },
    });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section className="client_section">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>What Our Clients Say</h2>
        </div>
        <div className="carousel-wrap layout_padding2-top">
          <div className="owl-carousel">
            <div className="item">
              <div className="box">
                <div className="client_id">
                  <div className="img-box">
                    <img src="images/client-1.jpg" alt="Client 1" />
                  </div>
                  <div className="client_detail">
                    <div className="client_info">
                      <h6>Jorch Morik</h6>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="client_text">
                  <p>
                    Chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
            {/* Add more items as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
