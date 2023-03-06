import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import "./SignIn.css";
import { Link } from "react-router-dom";
import UseContext, { AuthContext } from "../../Context/UseContext";

const SignIn = () => {
  const { createUser } = UseContext(AuthContext);

  // <a href="https://ibb.co/NWDb9Rv"><img src="https://i.ibb.co/vLyR39F/Group-4.png" alt="Group-4" border="0"></a>
  {
    /* <a href="https://ibb.co/B4JbTdp"><img src="https://i.ibb.co/xmbWzPk/Group-5.png" alt="Group-5" border="0"></a> 
<a href="https://ibb.co/LCS62m5"><img src="https://i.ibb.co/0fqZdTt/Logo.png" alt="Logo" border="0"></a>
*/
  }

  const handleEmailChange = (e) => {
    // setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    // setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <Container className="mt-5">
      <section className="">
        <div className="container  py-5 ">
          <div className="row ">
            <div className="col">
              <div className="">
                <div className="row g-0">
                  <div className="  col-xl-6 d-none d-xl-block">
                    <img
                      src="https://i.ibb.co/xmbWzPk/Group-5.png"
                      alt="SamplePhoto"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-xl-6 ">
                    <div className="signup-body">
                      <h3 className="mb-4 fw-bold">Sign Up</h3>

                    <form onSubmit={handleSubmit
                    }>

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
                              type="text"
                              id="form3Example1m"
                              className="input"
                              placeholder=" "
                            />
                            <label className="label">Phone</label>
                          </div>
                        </div>
                      </div>

                      <div className="input-container password mb-4">
                        <input
                          type="password"
                          id="form3Example1m"
                          className="input"
                          placeholder=" "
                        />
                        <label className="label">Password</label>
                      </div>
                      <div className="input-container password mb-4">
                        <input
                          type="password"
                          id="form3Example1m"
                          className="input"
                          placeholder=" "
                        />
                        <label className="label">Confirm Password</label>
                      </div>
                    </form>

                      <div className="text-start">
                        <input type="checkbox" />
                        <label className="ms-1  agree ">
                          I agree to all the Terms and Privacy Policies
                        </label>
                      </div>

                      <div className="signUp">
                        <button
                   
                          type="button"
                          className="btn 
                        create-account-button btn-light w-100"
                        >
                          create account
                        </button>
                      </div>
                      <div className="text-center mt-3">
                        <span className="text-muted fw-bold">
                          Already Have an Account?
                        </span>{" "}
                        <Link
                          to="/login"
                          className="login-text text-decoration-none"
                        >
                          Log in
                        </Link>
                      </div>
                      <div className="mb-5">
                        <hr className="mt-5" />
                        <p className="text-center "> Or Sign up with</p>
                      </div>

                      <div className="social-signUP mt-5">
                        <button className="btn btn-light  w-100 text-primary p-2">
                          <FaFacebook
                            style={{ width: "22px", height: "22px" }}
                          />
                        </button>
                        <button className="btn btn-light   w-100  p-2">
                          <FcGoogle style={{ width: "22px", height: "22px" }} />
                        </button>
                        <button className="btn btn-light   w-100  p-2">
                          <FaApple style={{ width: "22px", height: "22px" }} />
                        </button>
                        {/* <button className="btn btn-light ps-5 pe-5 w-100">< FaFacebook/></button> */}
                        {/* <button className="btn btn-light ps-5 pe-5 w-100">< FaFacebook/></button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default SignIn;
