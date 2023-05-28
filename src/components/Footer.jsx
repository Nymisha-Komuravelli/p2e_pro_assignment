import React from "react";

function Footer() {
  return (
    <div className="footer-section mt-5 py-5 text-center text-md-left">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <p><img
              src="https://i.tracxn.com/logo/company/prepro_9497cdd7-b677-423d-bee2-10ac8963e213.PNG?height=120&width=120"
              className="navbar-logo"
            /></p>
            <p className="footer-text-desc pr-md-5">
              P2E Pro NFT is a shared liquidity NFT market smart contract
            </p>
            <p className="bold-text">Language</p>
            <div className="dropdown mb-4 mb-md-0">
              <button
                className="btn bg-white btn-outline-secondary select-language"
                type="button"
              >
                <img
                  src="https://img.icons8.com/?size=512&id=aRiu1GGi6Aoe&format=png"
                  alt=""
                  width={30}
                  height={30}
                />
                <span className="ml-1">English</span>
                <i className="fa fa-angle-down ml-5"></i>
              </button>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <p className="bold-text">Market Place</p>
            <ul className="footer-links-list">
              <li className="">
                <a href="#" className="footer-link">
                  Profile
                </a>
              </li>
              <li className="">
                <a href="#" className="footer-link">
                  Market Place
                </a>
              </li>
              <li className="">
                <a href="#" className="footer-link">
                  Creators
                </a>
              </li>
              <li className="">
                <a href="#" className="footer-link">
                  Activity
                </a>
              </li>
              <li className="">
                <a href="#" className="footer-link">
                  Collections
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <p className="bold-text">Company</p>
            <ul className="footer-links-list">
              <li className="">
                <a href="#" className="footer-link">
                  Upload
                </a>
              </li>
              <li className="">
                <a href="#" className="footer-link">
                  Connect Wallet
                </a>
              </li>
              <li className="">
                <a href="#" className="footer-link">
                  Our blog
                </a>
              </li>
              <li className="">
                <a href="#" className="footer-link">
                  Item details
                </a>
              </li>
              <li className="">
                <a href="#" className="footer-link">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <p className="bold-text">Join Newsletter</p>
            <div className="input-group-prepend mb-3 footer-subscribe-section">
              <input
                type="text"
                className="form-control footer-subscribe-input"
                placeholder="Your Email"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
            <div className="d-flex flex-row justify-content-center justify-content-md-start mt-3 mb-3">
              <div className="footer-section-icon-container">
                <a href="#">
                  <i className="fa fa-twitter icon"></i>
                </a>
              </div>
              <div className="footer-section-icon-container">
                <a href="#">
                  <i className="fa fa-instagram icon"></i>
                </a>
              </div>
              <div className="footer-section-icon-container">
                <a href="#">
                  <i className="fa fa-youtube-play icon"></i>
                </a>
              </div>
              <div className="footer-section-icon-container">
                <a href="#">
                  <i className="fa fa-github icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright-section text-center">
          <span className="copyright-text">
            Copyright <i className="fa fa-copyright"></i> 2022. Created with
            love by{" "}
            <a href="#" className="btn-link">
              P2E Pro NFT
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
