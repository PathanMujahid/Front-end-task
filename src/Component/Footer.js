import React from "react";
import "../Styling/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-sm-6 mt-2">
              <div className="footer-title">
                <h1 className="headings">
                  Wanna work with us? <br /> Get in touch
                </h1>
                <div className="footer-learn-more">
                  <a>Learn More</a>
                </div>
                <div className="footer-icons mb-3">
                  <a>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src="https://i.postimg.cc/L8WYrbVK/Circle-Button-2x.png"
                      alt="icon"
                    />
                  </a>
                  <a>
                    <img
                      className="iconstyle"
                      src="https://i.postimg.cc/dQjtcx9k/Circle-Button.png"
                      alt="icon"
                    />
                  </a>
                  <a>
                    <img
                      className="iconstyle"
                      src="https://i.postimg.cc/mDyr2X7r/Circle-Button-2x.png"
                      alt="icon"
                    />
                  </a>
                  <a>
                    <img
                      className="iconstyle"
                      src="https://i.postimg.cc/W18SgTjm/Circle-Button.png"
                      alt="icon"
                    />
                  </a>
                  <a>
                    <img
                      className="iconstyle"
                      src="https://i.postimg.cc/jSM14scQ/Circle-Button.png"
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="footerlinks"> */}
            <div className="col-md-6 col-lg-2 col-sm-6 mb-2">
              <div className="footerList">
                <h5>Company</h5>
                <Link className="footerlink" to="/">
                  Home
                </Link>
                <Link className="footerlink" to="/about">
                  About
                </Link>
                <Link className="footerlink" to="/contact-us">
                  Contact
                </Link>
              </div>
            </div>

            <div className="col-md-6 col-lg-2 col-sm-6 mb-2">
              <div className="footerList">
                <h5>Jobs</h5>
                <a>Apply</a>
                <a>Help</a>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-sm-6 mb-2">
              <div className="footerList">
                <h5>FAQ</h5>
                <a>Privacy Policy</a>
                <a>Terms & Conditions</a>
                <a>help@objdet.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="footercopyright">2020 All rights reserved</div>
    </>
  );
};

export default Footer;
