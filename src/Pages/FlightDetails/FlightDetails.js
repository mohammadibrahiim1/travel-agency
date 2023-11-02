import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import AddReviews from "../../Components/AddReviews/AddReviews";
import UserReviews from "../Home/UserReviews/UserReviews";
import { IoAirplaneSharp } from "react-icons/io5";
import "./FlightDetails.css";

const FlightDetails = () => {
  const FDetails = useLoaderData();
  // console.log(FDetails);
  const {
    _id,
    airlines_name,
    flight_name,
    location,
    trip,
    destination,
    ratings,
    return_time,
    time,
    economy_URL,
    airlines_logo_URL,
    Hero_URL,
    price,
  } = FDetails.data;
  return (
    <div>
      <div>
        <section className="mt-5 mx-auto" style={{ width: "1232px" }}>
          <div>
            <span className="text-danger d-flex align-content-center ">
              <span>{location}</span>
              <MdKeyboardArrowRight className="arrow" />
              <span>{airlines_name}</span>
              <MdKeyboardArrowRight className="arrow" />
              <span>{flight_name}</span>
            </span>
          </div>

          <div
            className="flight-detail-header  d-flex justify-content-between align-items-center mx-auto my-3"
            style={{ width: "1232px" }}
          >
            <div>
              <h1 className="flight-details-title pt-3">{flight_name}</h1>
              <div className="lh-1 d-flex align-content-center">
                <ImLocation2 />
                <span className="px-1">{destination}</span>
              </div>

              <div className="my-3 px-1 d-flex align-items-center">
                <span className="">{ratings}</span>{" "}
                <strong className="px-2">Very Good 54 reviews</strong>
              </div>
            </div>
            <div>
              <h6 className="d-flex justify-content-end fw-bold text-danger fs-2">
                ${price}
              </h6>

              <div>
                <button type="button" className="btn btn-outline-danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M13.7863 3.125C11.2504 3.125 10.0004 5.625 10.0004 5.625C10.0004 5.625 8.7504 3.125 6.21446 3.125C4.15352 3.125 2.52149 4.84922 2.5004 6.90664C2.45743 11.1773 5.88829 14.2145 9.64884 16.7668C9.75251 16.8373 9.87501 16.8751 10.0004 16.8751C10.1258 16.8751 10.2483 16.8373 10.352 16.7668C14.1121 14.2145 17.543 11.1773 17.5004 6.90664C17.4793 4.84922 15.8473 3.125 13.7863 3.125V3.125Z"
                      stroke="#112211"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="btn btn-outline-danger mx-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M13.1866 13.915L13.2024 13.9239L13.215 13.9107C13.4455 13.6697 13.7225 13.4778 14.0292 13.3468C14.336 13.2158 14.6661 13.1483 14.9996 13.1484C15.5168 13.1484 16.0211 13.3103 16.4417 13.6114C16.8622 13.9126 17.1779 14.3378 17.3445 14.8275C17.511 15.3172 17.5201 15.8468 17.3704 16.3419C17.2206 16.837 16.9197 17.2728 16.5097 17.5881C16.0997 17.9034 15.6012 18.0825 15.0843 18.1001C14.5673 18.1178 14.0578 17.9731 13.6273 17.6865C13.1968 17.3998 12.8668 16.9855 12.6837 16.5018C12.5005 16.0181 12.4735 15.4891 12.6062 14.9892L12.6109 14.9717L12.5951 14.9628L6.81383 11.71L6.798 11.7011L6.78543 11.7142C6.44333 12.0709 6.00234 12.3171 5.51918 12.4211C5.03602 12.5251 4.5328 12.4822 4.07425 12.2978C3.6157 12.1135 3.22279 11.7961 2.94607 11.3866C2.66935 10.9771 2.52148 10.4942 2.52148 10C2.52148 9.50578 2.66935 9.02286 2.94607 8.61336C3.22279 8.20387 3.6157 7.88654 4.07425 7.70218C4.5328 7.51783 5.03602 7.47489 5.51918 7.57889C6.00234 7.68289 6.44333 7.92907 6.78543 8.28575L6.798 8.29887L6.81383 8.28996L12.5951 5.03722L12.6109 5.02832L12.6062 5.01076C12.4516 4.4303 12.5139 3.81338 12.7815 3.27558C13.0491 2.73777 13.5036 2.31598 14.0599 2.08922C14.6161 1.86246 15.236 1.8463 15.8033 2.04376C16.3706 2.24122 16.8465 2.63875 17.1418 3.16188C17.437 3.68501 17.5314 4.29784 17.4073 4.88557C17.2831 5.4733 16.9489 5.9956 16.4673 6.35462C15.9857 6.71364 15.3897 6.88475 14.791 6.83589C14.1923 6.78703 13.6319 6.52155 13.2149 6.0892L13.2023 6.07616L13.1866 6.08504L7.4053 9.33778L7.38947 9.34668L7.39415 9.36423C7.50508 9.78082 7.50508 10.2192 7.39415 10.6358L7.38947 10.6533L7.4053 10.6622L13.1866 13.915Z"
                      fill="black"
                      stroke="#112211"
                      stroke-width="0.046875"
                    />
                  </svg>
                </button>
                <Link
                  to={`/flightBookingDetails/${_id}`}
                  class=" btn btn-danger"
                  style={{ width: "120px", height: "38px" }}
                >
                  Book now
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="hero-img">
              <img
                src={Hero_URL}
                alt=""
                // style={{ Width: "1232px", Height: "395px" }}
              />
            </div>
            <div className="mt-3 other-img">
              <img src={economy_URL[0]} alt="" />
              <img src={economy_URL[1]} alt="" />
              <img src={economy_URL[3]} alt="" />
              <img src={economy_URL[4]} alt="" />
              <img src={economy_URL[5]} alt="" />
              <img src={economy_URL[6]} alt="" />
              <p className="text-secondary">see our airlines </p>
            </div>
          </div>

          <h3 className="overview mt-5">Overview</h3>
          <hr />
          {/* <p className="description">{desc}</p> */}
          <div className="airlines-policy">
            <h4 className="fw-semibold text-dark-50 mt-4 mb-4">
              {" "}
              {airlines_name} Airlines Policies{" "}
            </h4>
            <div className="">
              <p className="text-dark fw-semibold  ">
                <BsArrowRight
                  className="me-2"
                  style={{ height: "22px", width: "22px" }}
                />
                Pre-flight cleaning, installation of cabin HEPA filters.
              </p>
              <p className="text-dark fw-semibold  ">
                <BsArrowRight
                  style={{ height: "22px", width: "22px" }}
                  className="me-2"
                />
                Pre-flight health screening questions.
              </p>
            </div>
          </div>

          <hr />

          <div className="d-flex justify-content-between mb-4 airlines-logo-time-trip">
            <div className="">
              <img
                src={airlines_logo_URL}
                alt=""
                style={{ width: "162px", height: "86px" }}
              />
            </div>
            <p className="text-dark-50 fw-semibold mt-4 text-transform-uppercase">
              {trip}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <p
                className="mt-4 fs-5 fw-semibold"
                style={{
                  width: "110px",
                  height: "29px",
                }}
              >
                {time.departure}
              </p>
              <p>
                <IoAirplaneSharp
                  className="mt-4 fs-5 fs-semibold"
                  style={{
                    width: "110px",
                    height: "24px",
                  }}
                />
              </p>
              <p
                className="mt-4 fs-5 fw-semibold"
                style={{
                  width: "110px",
                  height: "29px",
                }}
              >
                {time.arrival}
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-between mb-4 airlines-logo-time-trip">
            <div className="">
              <img
                src={airlines_logo_URL}
                alt=""
                style={{ width: "162px", height: "86px" }}
              />
            </div>
            <p className="text-dark-50 fw-semibold mt-4 uppercase">{trip}</p>
            <div className="d-flex justify-content-between align-items-center">
              <p
                className="mt-4 fs-5 fw-semibold"
                style={{
                  width: "110px",
                  height: "29px",
                }}
              >
                {return_time.departure}
              </p>
              <p>
                <IoAirplaneSharp
                  className="mt-4 fs-5 fs-semibold"
                  style={{
                    width: "110px",
                    height: "24px",
                  }}
                />
              </p>
              <p
                className="mt-4 fs-5 fw-semibold"
                style={{
                  width: "110px",
                  height: "29px",
                }}
              >
                {return_time.arrival}
              </p>
            </div>
          </div>

          {/* <img src={photo} alt="" />
          <p>{city}</p> */}

          <section>
            <UserReviews></UserReviews>
            <AddReviews></AddReviews>
          </section>
        </section>
      </div>
    </div>
  );
};

export default FlightDetails;
