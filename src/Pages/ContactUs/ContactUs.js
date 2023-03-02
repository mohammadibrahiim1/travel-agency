import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import "./ContactUs.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <section>
        <div className="contact-us-header container ">
          <img src="https://i.ibb.co/xh81RnT/header-img.png" alt="" />
        </div>

        <div>
          <div className="container  py-5 ">
            <div className="row ">
              <div className="col">
                <div className="">
                  <div className="row g-0">
                    
                    <div className="col-xl-6">
                      <div className="contact-form-body">
                        <h3 className="mb-4 fw-bold">Sign Up</h3>

                        <div className="row ">
                          <div className="col-md-6 mb-4">
                            <div className="input-container">
                              <input
                                type="text"
                                id="form3Example1m"
                                className="input"
                                placeholder=" "
                              />
                              <label className="label">First Name</label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="input-container">
                              <input
                                type="text"
                                id="form3Example1m"
                                className="input"
                                placeholder=" "
                              />
                              <label className="label">Last Name</label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12 mb-4">
                            <div className="input-container">
                              <input
                                type="email"
                                id="form3Example1m"
                                className="input"
                                placeholder=" "
                              />
                              <label className="label">Email</label>
                            </div>
                          </div>
                        
                        </div>

                        <div className="input-container  mb-4">
                          <textarea
                            id="w3review"
                            name="w3review"
                            rows="4"
                            cols="50"
                            className="input"
                            placeholder=" "
                          >
                          
                          </textarea>
                          <label className="label">message</label>
                        </div>
                        

                        <div className="send-message">
                          <button
                            type="button"
                            className="btn send-message-button btn-light w-100"
                          >
                           Send Message
                          </button>
                        </div>
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
