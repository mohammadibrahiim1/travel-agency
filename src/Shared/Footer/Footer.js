import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGoogle, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section>
        <footer class="footer-areLink footer-one mt-5 ">
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
