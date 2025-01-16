import Footer from "../layout/Footer";
import TopNav from "../layout/TopNav";
const Funds: React.FC = () => {
  return (
    <div className="my-app">
      <TopNav />

      <section id="focus" className="focus-sectionv px-5">
        <div className="container-lg py-5">
          <div className="container px-0">
            <div className="row">
              <div className="col">
                <h2 className="title-section text-center mb-5">Funds and Donations</h2>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card shadow-sm h-100 mt-2">
                <div className="card-image">
                  <div className="hover-text">
                    <img
                      src="./images/client-1.jpg"
                      className="card-img-top"
                    />
                    <div className="bottom-right-tag text-uppercase">
                      <a href="">#lorem</a>
                    </div>
                  </div>
                  <div className="image-overlay"></div>
                </div>
                <div className="card-body ">
                  <h3 className="card-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                  </h3>
                  <div className="text-left my-2">
                    <div className="sub-cat text-truncate">
                      <span className="badge rounded-pill bg-category text-uppercase">
                        topic
                      </span>{" "}
                      <a href="#">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                </div>

                <div className="card-footer py-3">
                  <div className="card-footer__info">
                    <span>
                      <i className="far fa-calendar-alt"></i> {new Date().toLocaleDateString()}
                    </span>
                    <span className="read-more">
                      <a className="text-uppercase read-more-1 mx-2" href="#">{" "}
                        Read more{" "}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm h-100 mt-2">
                <div className="card-image">
                  <img
                    src="./images/client-2.jpg"
                    className="card-img-top"
                  />
                  <div className="image-overlay"></div>
                </div>

                <div className="card-body">
                  <h3 className="card-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                  </h3>
                  <div className="text-left my-2">
                    <div className="sub-cat text-truncate">
                      <span className="badge rounded-pill bg-category text-uppercase">
                        topic
                      </span>{" "}
                      <a href="#">News</a>
                    </div>
                  </div>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                </div>
                <div className="card-footer py-3">
                  <div className="card-footer__info">
                  <span>
                      <i className="far fa-calendar-alt"></i> {new Date().toLocaleDateString()}
                    </span>
                    <span className="read-more">
                      <a className="text-uppercase read-more-2 mx-2" href="#">{" "}
                        Read more{" "}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm h-100 mt-2">
                <div className="text-img-over">
                  <img
                    src="./images/client-1.jpg"
                    className="card-img-top"
                  />
                  <div className="overlay">
                    <div className="social-hover">
                      <a href="#">
                        <i className="fas fa-share-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <h3 className="card-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                  </h3>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                </div>

                <div className="card-footer py-3">
                  <div className="card-footer__info">
                  <span>
                      <i className="far fa-calendar-alt"></i> {new Date().toLocaleDateString()}
                    </span>
                    <span className="read-more">
                      <a className="text-uppercase read-more-3 mx-2" href="#">{" "}
                        Read more
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Funds;
