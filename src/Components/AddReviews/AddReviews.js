import React from 'react';
import { Link } from 'react-router-dom';
import './AddReviews.css'
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook,FaApple } from "react-icons/fa";

const AddReviews = () => {
    return (
        <div>
            <section className='add-reviews-section'>
            <div className="col-xl-6 ">
                
                <div className="add-review-body">
                  <h3 className="mb-4 fw-bold">Add your review</h3>

                  <div className="row ">
                    <div className="col-md-6 mb-4">
                      <div className="input-container">
                        <input
                          type="text"
                          id="form3Example1m"
                          className="input"
                          placeholder=" "
                        />
                        <label className="label">Your Name</label>
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
                        <label className="label">Comment</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
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
                    <div className="col-md-6 mb-4">
                      <div className="input-container">
                        <input
                          type="photURL"
                          id="form3Example1m"
                          className="input"
                          placeholder=" "
                        />
                        <label className="label">Photo URL</label>
                      </div>
                    </div>
                  </div>

                  <div className="input-container password mb-4">
                    <textarea
                      type="text"
                      id="form3Example1m"
                      className="input"
                      placeholder=" "
                    />
                    <label className="label">write about your journey</label>
                  </div>
                  {/* <div className="input-container password mb-4">
                    <input
                      type="password"
                      id="form3Example1m"
                      className="input"
                      placeholder=" "
                    />
                    <label className="label">Confirm Password</label>
                  </div> */}

                  {/* <div className="text-start">
                   <input type="checkbox"  />
                    <label className="ms-1  agree ">I agree to all the Terms and Privacy Policies</label>
                   </div> */}

                  <div className="signUp">
                    <button type="button" className="btn review-submit-button btn-light w-100">
                     submit
                    </button>
                  </div>
                  <div className="text-center mt-3">
                    <span className="text-muted fw-bold">
                      please, login or signup to add a review!
                    </span>{" "}
                    <Link to='/login' className="login-text text-decoration-none">Log in</Link>
                  </div>
                  <div className="mb-5">
                    <hr className="mt-5" />
                    <p className="text-center "> Or Sign up with</p>
                  </div>

                  <div className="social-signUP mt-5">
                    <button className="btn btn-light  w-100 text-primary p-2">< FaFacebook  style={{width:"22px",height: "22px"}} /></button>
                    <button className="btn btn-light   w-100  p-2">< FcGoogle  style={{width:"22px",height: "22px"}} /></button>
                    <button className="btn btn-light   w-100  p-2">< FaApple  style={{width:"22px",height: "22px"}} /></button>
                    {/* <button className="btn btn-light ps-5 pe-5 w-100">< FaFacebook/></button> */}
                    {/* <button className="btn btn-light ps-5 pe-5 w-100">< FaFacebook/></button> */}
                  </div>
                </div>
              </div>
            </section>
        </div>
    );
};

export default AddReviews;