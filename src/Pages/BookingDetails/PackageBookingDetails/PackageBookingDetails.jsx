import React, { useContext } from "react";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import "./PackageBookingDetails.css";

const PackageBookingDetails = () => {
  const { user } = useContext(AuthContext);
  const details = useLoaderData();
  // console.log(details);

  const { _id, img, offerPrice, offer, name, price, journey, ratings } =
    details;
  const handleBooking = () => {
    console.log("hello");
  };
  return (
    <div>
      <section className="w-75 m-auto">
        <div className="row">
          <div className="col-8">
            <div class="card book-detail-card">
              <div class="card-body">
                <div className="d-flex justify-content-between book-detail align-content-center">
                  <h5 class="card-title">{name}</h5>
                  {offerPrice ? (
                    <span class="card-subtitle mb-2">${price}</span>
                  ) : (
                    <span class="card-subtitle mb-2">${price}</span>
                  )}
                </div>
                <p class="card-text text-center">{journey}</p>
                {/* <Link href="#" class="card-link">Card link</Link> */}
                {/* <Link href="#" class="card-link">Another link</Link> */}
              </div>
            </div>

            {/* <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form> */}

            <form
              // onSubmit={handleSubmit}
              className=" col-xl-6 col-md-8  m-auto p-2"
            >
              <div className="mb-3 text-start ">
                <div className="row d-flex ">
                  <div className="input-container col-md-12 col-sm-12 col-xl-6 col-lg-6 password mb-4">
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
                  <div className="input-container col-md-12 col-sm-12 col-xl-6 col-lg-6 password mb-4">
                    <div className="input-container">
                      <input
                        type="text"
                        id="name"
                        className="input"
                        placeholder=" "
                        name="email"
                        required
                      />
                      <label className="label">Your Name</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="input-container col-md-12 col-sm-12 col-xl-6 col-lg-6 password mb-4">
                    <div className="input-container">
                      <input
                        type="text"
                        id="password"
                        className="input"
                        placeholder=" "
                        name="password"
                        required
                      />
                      <label className="label">number</label>
                    </div>
                
                  </div>
                </div>
                <div className="row">
                  <div className="input-container col-md-12 col-sm-12 col-xl-6 col-lg-6 password mb-4">
                    <div className="input-container">
                      <input
                        type="text"
                        id="number"
                        className="input"
                        placeholder=" "
                        name="number"
                        required
                      />
                      <label className="label">number</label>
                    </div>
                
                  </div>
                </div>

               

                {/* <div className="signUp">
                  <button
                    // type="button"
                    className="btn 
                        create-account-button btn-light w-100"
                  >
                    Login
                  </button>
                </div> */}
                {/* <div className="text-center mt-3">
                  <span className="text-muted fw-bold">
                    Don't Have an Account?
                  </span>{" "}
                  <Link
                    to="/signin"
                    className="login-text text-decoration-none"
                  >
                    Sign up
                  </Link>
                </div> */}
                {/* <div className="mb-5">
                  <hr className="mt-5" />
                  <p className="text-center "> Or Login with</p>
                </div> */}

                {/* <div className="social-login mt-5">
                  <button
                    // onClick={handleFacebookSignIn}
                    className="btn btn-light   text-primary p-2"
                  >
                    <FaFacebook style={{ width: "22px", height: "22px" }} />
                  </button>
                  <button
                    // onClick={handleGoogleSignIn}
                    className="btn btn-light     p-2"
                  >
                    <FcGoogle style={{ width: "22px", height: "22px" }} />
                  </button>
                  <button className="btn btn-light   w-100  p-2">
                    <FaApple style={{ width: "22px", height: "22px" }} />
                  </button>
                </div> */}
              </div>
          
            </form>
          </div>

          <div className="col-4">
            <div class="card shadow mb-3">
              <div class="row g-0">
                <div class="col-3 mt-3 text-center">
                  <img
                    src={img}
                    class="rounded ms-2"
                    alt="..."
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div class="col-9">
                  <div class="card-body">
                    <h6 class="card-title">{name}</h6>
                    <p class="card-text">{ratings}star</p>
                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                  </div>
                </div>
              </div>
              <hr />
              <div className="price-container container">
                <div className="d-flex align-content-center justify-content-between">
                  <p>Basic fare</p>
                  <p>${price}</p>
                </div>
                <div className="d-flex align-content-center justify-content-between">
                  {" "}
                  <p>Discount </p> <p> {offer ? <>{offer} </> : 0}</p>
                </div>
                <div className="d-flex align-content-center justify-content-between">
                  <p> Service Charge </p>
                  <p>
                    {" "}
                    $ <small>5</small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageBookingDetails;
