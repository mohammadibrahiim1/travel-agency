import React, { useContext, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";

// import { AuthContext } from "../../Context/UserContext";
// import UseContext, { AuthContext } from "../../Context/UseContext";

const SignIn = () => {
  // const { signUp } = UseContext(AuthContext);
  const { createUser, signInWithGoogle, signInWithFacebook } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  // const [user, setUser] = useState();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        // navigate('/courses')
        // console.log(user);
        // setUser(user);
        setError("");
        if (user) {
          fetch(
            "https://travel-zone-server-mohammadibrahiim1.vercel.app/users",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                name: user.displayName,
                email: user.email,
              }),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              // console.log(data);
              if (data.acknowledged) {
                alert("Successfully added!");
                navigate(`/`);
              } else {
                toast.error(data.message);
              }
            });
        }
      })
      .catch((error) => console.error(error));
    setError(error.message);
  };

  // const handleFacebookSignIn = () => {
  //   signInWithFacebook()
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //     })
  //     .catch((error) => console.error(error));
  //   setError(error.message);
  // };

  const handleFacebookSignIn = () => {
    signInWithFacebook()
      .then((result) => {
        const user = result.user;
        // console.log(user);
      })
      .catch((error) => console.error(error));
    setError(error.message);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // console.log(firstName, lastName, email, phone, password, confirmPassword);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
      })
      .catch((err) => {
        // console.log(err);
        setError(err.message);
      });

    const userInfo = {
      email: email,
      name: firstName,
    };

    fetch("https://travel-zone-server-mohammadibrahiim1.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          alert("Successfully added!");
          navigate(`/`);
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <section className="signIn-container">
      <div className="">
        <form onSubmit={handleSubmit} className="">
          <h2 className="mb-5 fw-bold">Sign Up Here!</h2>
          <div className="mb-3 text-start ">
            <div className="row ">
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
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
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
              <div className="col-md-6 mb-4">
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
              </div>
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
            <div className="input-container password mb-4">
              <input
                type="password"
                id="confirmPassword"
                className="input"
                placeholder=" "
                name="confirmPassword"
              />
              <label className="label">Confirm Password</label>
            </div>
            <div className="text-start">
              <input type="checkbox" required />
              <label className="ms-1  agree ">
                I agree to all the Terms and Privacy Policies
              </label>
            </div>

            <button className=" btn btn-primary signIn_button">
              create account
            </button>

            <div className="text-center mt-3">
              <span className="text-muted fw-bold">
                Already Have an Account?
              </span>{" "}
              <Link to="/login" className=" text-primary fw-semibold">
                Log in
              </Link>
            </div>
            <div className="mb-5 d-flex justify-content-between align-items-center gap-1">
              <div className="line"></div>
              <p className="mt-3"> Or Sign up with</p>
              <div className="line"></div>
            </div>

            <div className="social-signUP mt-5">
              <button onClick={handleFacebookSignIn} className="w-100 p-2">
                <FaFacebook
                  style={{ width: "22px", height: "22px", color: "#2F80ED" }}
                />
                <span className="ms-3">Continue with Facebook</span>
              </button>
              <button onClick={handleGoogleSignIn} className="w-100  p-2">
                <FcGoogle style={{ width: "22px", height: "22px" }} />
                <span className="ms-4">Continue with Google</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
