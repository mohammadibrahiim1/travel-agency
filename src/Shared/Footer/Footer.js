import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGoogle, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      {/* <a href="https://ibb.co/Y3LQnGT"><img src="https://i.ibb.co/hym9Qv1/emojione-v1-open-mailbox-with-lowered-flag.png" alt="emojione-v1-open-mailbox-with-lowered-flag" border="0"></a> */}
      <section>
        <footer class="footer-areLink footer-one mt-5 ">
          <div className="review-section d-flex justify-content-between align-items-center p-3">
            <div>
              <h2 className="review-title">Add a reviews</h2>
              <h6 className="review-subtitle">The Travel</h6>
              <p className="review-text">
                Get inspired! Receive travel discounts, tips and behind the
                scenes stories.
              </p>

              <form
                action=""
                className="d-flex justify-content-start align-content-center"
              >
                <div className="input-container">
                  <input
                    type="text"
                    id="firstName"
                    className="input"
                    placeholder=" "
                    name="firstName"
                    required
                  />
                  <label className="label">First Name</label>
                </div>
                {/* <textarea
                  name="message"
                  id=""
                  cols="50"
                  // rows="2"
                  className="w-30 border rounded"
                  placeholder="write a review about my service"
                ></textarea> */}

                <div>
                  <input
                    className="btn btn-danger m-2"
                    type="submit"
                    value="add a review"
                  />
                </div>
              </form>
            </div>
            <div>
              <img
                src="https://i.ibb.co/hym9Qv1/emojione-v1-open-mailbox-with-lowered-flag.png"
                alt=""
              />
            </div>
          </div>
          <div class="footer-widget">
            <div class="">
              <div class="row ">
                <div class="col-xl-2 col-lg-4 col-sm-12 col-md-4  text-center text-lg-start  text-md-center text-sm-center">
                  <div class="f-about">
                    <div class="footer-logo">
                      <Link to="/">
                        <img
                          src="https://i.ibb.co/0fqZdTt/Logo.png"
                          alt="Logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div class="">
                    <h5 class="text-lg-center text-md-center text-sm-center col-lg-8">
                      find us!
                    </h5>
                    <div className="col-lg-8 ">
                      <Link to="/">
                        <FaFacebook
                          className="text-secondary-emphasis me-3"
                          style={{ height: "22px", width: "22px" }}
                        />
                      </Link>

                      <Link to="/">
                        <FaInstagram
                          className="text-secondary-emphasis me-3"
                          style={{ height: "22px", width: "22px" }}
                        />
                      </Link>
                      <Link to="/">
                        <FaGoogle
                          className="text-secondary-emphasis me-3"
                          style={{ height: "22px", width: "22px" }}
                        />
                      </Link>
                      <Link to="/">
                        <FaYoutube
                          className="text-secondary-emphasis me-3"
                          style={{ height: "22px", width: "22px" }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-sm-12 col-md-4 text-center text-lg-start text-md-center text-sm-center ">
                  <div class="footer-destination">
                    <h6 class="footer-title">Our Destinations</h6>
                    <ul className="list-unstyled destination-list text-decoration-none">
                      <li>
                        <Link className="link-styled" to="/">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link className="link-styled" to="/">
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link className="link-styled" to="/">
                          Marketing
                        </Link>
                      </li>
                      <li>
                        <Link className="link-styled" to="/">
                          Awards
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- footer link --> */}
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-12 col-md-4 text-center text-lg-start text-md-center text-sm-center ">
                  <div class="footer-destination">
                    <h6 class="footer-title">Our Activities</h6>
                    <ul className="list-unstyled activity text-decoration-none">
                      <li>
                        <Link className="link-styled" to="/">
                          Northern Lights
                        </Link>
                      </li>
                      <li>
                        <Link className="link-styled" to="/">
                          Cruising & sailing
                        </Link>
                      </li>
                      <li>
                        <Link className="link-styled" to="/">
                          Multi-activities
                        </Link>
                      </li>
                      <li>
                        <Link className="link-styled" to="/">
                          kayaing
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- footer link --> */}
                </div>
                <div class="col-xl-2 col-lg-4 col-sm-12 col-md-12 text-center text-sm-center text-md-center text-lg-start">
                  {/* <!-- Start Footer Contact --> */}
                  <div class="footer-destination">
                    <h6 class="footer-title">Travel Blogs</h6>
                    <ul className="list-unstyled travel-blog text-decoration-none">
                      <li>
                        <Link className="link-styled" to="/">
                          Rangamati
                        </Link>
                      </li>
                      <li>
                        <Link className="link-styled" to="/">
                          Cox's Bazar
                        </Link>
                      </li>
                      <li>
                        <Link className="link-styled" to="/">
                          Bandarban
                        </Link>
                      </li>
                      <li>
                        <Link className="link-styled" to="/">
                          Sundorbar
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End Footer Contact --> */}
                </div>
                <div class="col-xl-2 col-lg-4 col-sm-12 col-md-12 text-center text-sm-center text-md-center text-lg-start">
                  {/* <!-- Start Footer Contact --> */}
                  <div class="footer-destination">
                    <h6 class="footer-title">Travel Blogs</h6>
                    <ul className="list-unstyled travel-blog text-decoration-none">
                      <li>
                        <Link className="link-styled" to="/">
                          Rangamati
                        </Link>
                      </li>
                      <li>
                        <Link className="link-styled" to="/">
                          Cox's Bazar
                        </Link>
                      </li>
                      <li>
                        <Link className="link-styled" to="/">
                          Bandarban
                        </Link>
                      </li>
                      <li>
                        <Link className="link-styled" to="/">
                          Sundorbar
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End Footer Contact --> */}
                </div>
                {/* <div class="col-xl-2 col-lg-4 col-sm-12 col-md-12 text-center text-sm-center text-md-center text-lg-start">
            
                  <div class="footer-destination">
                    <h6 class="footer-title">Travel Blogs</h6>
                    <ul className="list-unstyled travel-blog text-decoration-none">
                    <li>
                        <Link className="link-styled" to="/">
                          Rangamati
                        </Link>
                      </li>
                      <li>
                        <Link className="link-styled" to="/">
                          Cox's Bazar
                        </Link>
                      </li>
                      <li>
                        <Link className="link-styled" to="/">
                          Bandarban 
                        </Link>
                      </li>
                      <li>
                        <Link className="link-styled" to="/">
                         Sundorbar 
                        </Link>
                      </li>
                    </ul>
                  </div>
             
                </div> */}
              </div>
              {/* <!-- row --> */}
            </div>
            {/* <!-- container --> */}
          </div>
          {/* <!-- footer widget --> */}
          <div class="footer-copyright">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 text-center text-md-center text-lg-center text-sm-center">
                  <div
                    class="
                
                  "
                  >
                    <p class="text-center copyright-text">
                      Copyright © 2024 AyroUI. All Rights Reserved
                    </p>
                    <ul class="social">
                      <li>
                        <Link to="/">
                          <i class="lni lni-facebook-filled"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i class="lni lni-twitter-original"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i class="lni lni-instagram-filled"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i class="lni lni-linkedin-original"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- copyright --> */}
                </div>
              </div>
              {/* <!-- row --> */}
            </div>
            {/* <!-- container --> */}
          </div>
          {/* <!-- footer copyright --> */}
        </footer>
      </section>
    </div>
  );
};

export default Footer;
