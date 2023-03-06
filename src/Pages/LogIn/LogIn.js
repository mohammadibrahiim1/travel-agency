import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import "./LogIn.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UseContext";
import { Container } from "react-bootstrap";

const LogIn = () => {
  const [error, setError] = useState();
  const { login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    //  const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <section className="">
        <Container className="mt-5">
          <div className="row row-reverse g-0">
            <div className="  col-xl-6 d-none d-xl-block">
              <img
                src="https://i.ibb.co/xmbWzPk/Group-5.png"
                alt="SamplePhoto"
                className="img-fluid"
              />
            </div>

            <form onSubmit={handleSubmit} className="w-50 col-xl-6 m-auto p-2">
              <div className="mb-3 text-start ">
                {/* <div className="row ">
              <div className="col-md-6 mb-4">
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
              </div>
              <div className="col-md-6 mb-4">
                <div className="input-container">
                  <input
                    type="text"
                    id="lastName"
                    className="input"
                    placeholder=" "
                    name="lastName"
                    required
                  />
                  <label className="label">Last Name</label>
                </div>
              </div>
            </div> */}

                <div className="row">
                  <div className="col-md-6 col-lg-12 mb-4">
                    <div className="input-container">
                      <input
                        type="email"
                        id="email"
                        className="input"
                        placeholder=" "
                        name="email"
                        required
                      />
                      <label className="label">Email</label>
                    </div>
                  </div>
                  {/* <div className="col-md-6 mb-4">
                <div className="input-container">
                  <input
                    type="text"
                    id="phone"
                    className="input"
                    placeholder=" "
                    name="phone"
                    required
                  />
                  <label className="label">Phone</label>
                </div>
              </div> */}
                </div>

                {/* password input field */}
                <div className="input-container password mb-4">
                  <input
                    type="password"
                    id="password"
                    className="input"
                    placeholder=" "
                    name="password"
                    required
                  />
                  <label className="label">Password</label>
                </div>
                {/* <div className="input-container password mb-4">
              <input
                type="password"
                id="confirmPassword"
                className="input"
                placeholder=" "
                name="confirmPassword"
              />
              <label className="label">Confirm Password</label>
            </div> */}
                {/* <div className="text-start">
              <input type="checkbox" required />
              <label className="ms-1  agree ">
                I agree to all the Terms and Privacy Policies
              </label>
            </div> */}
                <div className="signUp">
                  <button
                    // type="button"
                    className="btn 
                        create-account-button btn-light w-100"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center mt-3">
                  <span className="text-muted fw-bold">
                    Don't Have an Account?
                  </span>{" "}
                  <Link to="/signin" className="login-text text-decoration-none">
                    Sign up
                  </Link>
                </div>
                <div className="mb-5">
                  <hr className="mt-5" />
                  <p className="text-center "> Or Login with</p>
                </div>

                <div className="social-signUP mt-5">
                  <button className="btn btn-light  w-100 text-primary p-2">
                    <FaFacebook style={{ width: "22px", height: "22px" }} />
                  </button>
                  <button className="btn btn-light   w-100  p-2">
                    <FcGoogle style={{ width: "22px", height: "22px" }} />
                  </button>
                  <button className="btn btn-light   w-100  p-2">
                    <FaApple style={{ width: "22px", height: "22px" }} />
                  </button>
                </div>
              </div>
              {/* <div className="mb-3 text-start ">
          <label className="form-label " for="photoURL">
            photoURL
          </label>
          <input
            type="photoURL"
            className="form-control"
            id="photoURL"
            name="photoURL"
            placeholder=""
            required
          />
        </div> */}
              {/* <div className="mb-3 text-start ">
          <label className="form-label " for="email">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Your email address"
            required
          />
        </div> */}
              {/* <div className="mb-3 text-start">
          <label className="form-label" for="password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            autocomplete="current-password"
            required
          />
        </div> */}
              {/* <p className="text-danger">{passwordError}</p> */}
              {/* <div className="mb-3 text-center">
          <div>
            {" "}
            Already have an account? please,click here to{" "}
            <span>
              {" "}
              <Link to="/login" className="text-decoration-none fw-bold ">
                Log in
              </Link>
            </span>
          </div>
        </div> */}
              {/* <div className="text-danger">{}</div> */}
              {/* <div>
          
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-primary w-full  ps-2 me-2 "
            >
              sign in with google
            </button>
           
            <button
              onClick={handleGithubSignIN}
              className="btn btn-primary w-full ps-2 ms-2"
            >
              sign in with github
            </button>
          </div>
        </div> */}
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default LogIn;
