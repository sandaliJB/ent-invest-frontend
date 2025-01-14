import React from "react";
import Footer from "../layout/Footer";
import TopNav from "../layout/TopNav";

const InvestProfile: React.FC = () => {
  return (
    <div className="my-app">
      <TopNav />

      <main>
        <section className="my-app__header">
          <div className="container">
            <div className="my-app__header-inner">
              <div className="my-app__header-text media">
                <div className="media-body">
                  <h1 className="my-app__header-title">Hi there, Frederick!</h1>
                  <div className="my-input input-group mb-3"></div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="my-action-buttons my-app__header__buttons my-3">
                    <img
                      className="my-action-button__icon rounded-circle"
                      src="./images/client-1.jpg"
                      style={{ height: "220px", width: "auto" }}
                    />
                  </div>
                  <div className="my-action-buttons my-app__header__buttons my-3 mx-3">
                    <div className="mt-5 mx-5">
                      <h3>Fedrerick North</h3>
                      <h4>fedrick@gmail.com</h4>
                      <small className="text-primary">
                        <b>Enterprenuer</b>
                      </small>
                      <div className="text-primary my-2">
                        <i className="fa-solid fa-pen-to-square"></i>
                        <span className="mx-2">Edit My Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-5">
                  <button className="btn btn-primary mt-4">Investon me</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-app__body">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="my-card card">
                  <div className="my-card__header card-header">
                    <div className="my-card__header-title">
                      <div className="my-text-overline">Payment Balance</div>
                      <h3 className="my-text-headline">$52,100.00</h3>
                    </div>
                    <a className="my-card__header-link" href="#">
                      Details →
                    </a>
                  </div>
                  <div className="my-card__body card-body">
                    <div className="my-text-overline">Available Currencies</div>
                    <dl className="my-list my-list--definitions my-dl">
                      <dt>US Dollars</dt>
                      <dd>32,220.00 USD</dd>
                      <dt>British Pounds</dt>
                      <dd>8,560.00 GBP</dd>
                      <dt>Czech Koruna</dt>
                      <dd>98,444.00 CZK</dd>
                    </dl>
                    <hr className="my-divider" />
                    <ul className="my-list my-list--simple list-inline mb-0">
                      <li>
                        <a href="#">Add Money →</a>
                      </li>
                      <li>
                        <a href="#">Top Up →</a>
                      </li>
                      <li>
                        <a href="#">Add funds using PayBuddy →</a>
                      </li>
                      <li>
                        <a href="#">Withdraw funds →</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="my-card card">
                  <div className="my-card__body card-body">
                    <div className="my-text-overline">
                      Bank accounts and cards
                    </div>
                    <ul className="my-list my-list--simple list-inline mb-0">
                      <li className="my-list-item">
                        <span className="list__icon">
                          <img src="./images/icon-bank-of-america.svg" />
                        </span>
                        <span>Bank of America x-9966</span>
                      </li>
                      <li className="my-list-item">
                        <span className="my-list-item__graphic list__icon">
                          <img src="./images/icon-mastercard.svg" />
                        </span>
                        <span className="my-list-item__text">
                          MasterCard x-1144
                        </span>
                      </li>
                    </ul>
                    <hr className="my-divider" />
                    <ul className="my-list-inline list-inline mb-0">
                      <li>
                        <a href="#">Add a Bank Account or Card →</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-8">
                <div className="my-alert alert alert-info">
                  <img
                    className="my-alert__icon"
                    src="./images/icon-alert.svg"
                  />
                  <span className="my-alert__text">
                    Your latest transaction may take a few minutes to show up in
                    your activity.
                  </span>
                </div>

                <div className="my-card card">
                  <div className="my-card__header card-header">
                    <h3 className="my-card__header-title card-title">
                      Pending
                    </h3>
                    <a className="my-card__header-link" href="#">
                      See all →
                    </a>
                  </div>
                  <ul className="my-list list-group list-group-flush">
                    <li className="my-list-item list-group-item">
                      <div className="my-list-item__date">
                        <span className="my-list-item__date-day">28</span>
                        <span className="my-list-item__date-month">jul</span>
                      </div>
                      <div className="my-list-item__text">
                        <h4 className="my-list-item__text-title">
                          Bank of America
                        </h4>
                        <p className="my-list-item__text-description">
                          Withdraw to bank account
                        </p>
                      </div>
                      <div className="my-list-item__fee">
                        <span className="my-list-item__fee-delta">+250.00</span>
                        <span className="my-list-item__fee-currency">USD</span>
                      </div>
                    </li>
                    <li className="my-list-item list-group-item">
                      <div className="my-list-item__date">
                        <span className="my-list-item__date-day">28</span>
                        <span className="my-list-item__date-month">jul</span>
                      </div>
                      <div className="my-list-item__text">
                        <h4 className="my-list-item__text-title">
                          Bank of America
                        </h4>
                        <p className="my-list-item__text-description">
                          Withdraw to bank account
                        </p>
                      </div>
                      <div className="my-list-item__fee">
                        <span className="my-list-item__fee-delta">+250.00</span>
                        <span className="my-list-item__fee-currency">USD</span>
                      </div>
                    </li>
                    <li className="my-list-item list-group-item">
                      <div className="my-list-item__date">
                        <span className="my-list-item__date-day">28</span>
                        <span className="my-list-item__date-month">jul</span>
                      </div>
                      <div className="my-list-item__text">
                        <h4 className="my-list-item__text-title">
                          Bank of America
                        </h4>
                        <p className="my-list-item__text-description">
                          Withdraw to bank account
                        </p>
                      </div>
                      <div className="my-list-item__fee">
                        <span className="my-list-item__fee-delta">+250.00</span>
                        <span className="my-list-item__fee-currency">USD</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default InvestProfile;
