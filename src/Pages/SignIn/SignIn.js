import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import './SignIn.css'

const SignIn = () => {
 
  // <a href="https://ibb.co/NWDb9Rv"><img src="https://i.ibb.co/vLyR39F/Group-4.png" alt="Group-4" border="0"></a>
{/* <a href="https://ibb.co/B4JbTdp"><img src="https://i.ibb.co/xmbWzPk/Group-5.png" alt="Group-5" border="0"></a> 
<a href="https://ibb.co/LCS62m5"><img src="https://i.ibb.co/0fqZdTt/Logo.png" alt="Logo" border="0"></a>
*/}

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
      {/* <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">Sign In</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Sign In
            </Button>
          </Form>
        </Col>
      </Row> */}
      <section className="">
  <div className="container py-5 ">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src="https://i.ibb.co/xmbWzPk/Group-5.png"
                alt="SamplePhoto" className="img-fluid" 

                style={{"borderBottomLeftRadius": ".25rem", "borderBottomRightRadius": ".25rem"}}/>
            </div>
            <div className="col-xl-6">
              <div className="ms-3"><img src="https://i.ibb.co/0fqZdTt/Logo.png" style={{height:"36px",width:"115px"}} alt="" /></div>
              <div className="card-body  text-black">
                <h3 className="mb-4 text-uppercase">Sign Up</h3>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                     
                      <label className="form-label" htmlFor="form3Example1m">First name</label>
                      <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form3Example1n">Last name</label>
                      <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form3Example1m1">Email</label>
                      <input type="email" id="form3Example1m1" className="form-control form-control-lg" />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form3Example1n1">Phone Number</label>
                      <input type="text" id="form3Example1n1" className="form-control form-control-lg" />
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example8">Password</label>
                  <input type="password" id="form3Example8" className="form-control form-control-lg"/>
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example8">Confirm Password</label>
                  <input type="password" id="form3Example8" className="form-control form-control-lg"/>
                </div>

                {/* <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 className="mb-0 me-4">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline mb-0">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label className="form-check-label" htmlFor="otherGender">Other</label>
                  </div>

                </div> */}

                {/* <div className="row">
                  <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1">State</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                  <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1">City</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                </div> */}

                {/* <div className="form-outline mb-4">
                  <input type="text" id="form3Example9" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example9">DOB</label>
                </div> */}

                {/* <div className="form-outline mb-4">
                  <input type="text" id="form3Example90" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example90">Pincode</label>
                </div> */}

                {/* <div className="form-outline mb-4">
                  <input type="text" id="form3Example99" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example99">Course</label>
                </div> */}

                {/* <div className="form-outline mb-4">
                  <input type="text" id="form3Example97" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example97">Email ID</label>
                </div> */}
                     
                <div className="signUp-btn">
                <button type="button" className="btn btn-light w-100">create account</button>
                  {/* <button type="button" className="btn btn-warning btn-lg ms-2">Submit form</button> */}
                </div>
                <div className="text-center mt-3">
                  <span className="text-muted">already have an account?</span> <span className="login-text">Log in</span>
                </div>
                <div className="">
                <hr />   <span>  or sign in with</span>  <hr />
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
