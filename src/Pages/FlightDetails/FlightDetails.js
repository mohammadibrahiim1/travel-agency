import React from "react";
import { AiFillStar } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import AddReviews from "../../Components/AddReviews/AddReviews";
import UserReviews from "../Home/UserReviews/UserReviews";
// import FlightDetailsInfo from "./FlightDetailsInfo/FlightDetailsInfo";
import { IoAirplaneSharp } from "react-icons/io5";
// import { IoAirplaneSharp } from "react-icons/io";
import "./FlightDetails.css";

const FlightDetails = () => {
  const FDetails = useLoaderData();
  console.log(FDetails);
  const {
    _id,
    airlines_name,
    flight_name,
    location,
    photo,
    trip,
    destination,
    ratings,
    return_time,
    city,
    time,
    economy_URL,
    airlines_logo_URL,
    Hero_URL,
    price,
  } = FDetails.data;
  return (
    <div>
      <div>
        <section className="container">
          <div>
            <span className="d-flex align-items-center fs-6 text-danger ">
              <h6>{location}</h6>
              <MdKeyboardArrowRight className="arrow" />
              <h6>{airlines_name}</h6>
            </span>
          </div>

          <div className="flight-detail-header pb-4 d-flex justify-content-between align-items-center ">
            <div>
              <h1 className="main__title">{flight_name}</h1>
              <h6>
                {" "}
                <ImLocation2 />
                {destination}
              </h6>
              <div className="star">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />{" "}
                <span className="hotel__rating text-dark">{ratings} Star </span>
              </div>
            </div>
            <div>
              <div className="fs-5 text-danger fw-semibold">
                <p>${price}</p>

                <Link
                  to={`/hotelBookingDetails/${_id}`}
                  class=" btn btn-info"
                  style={{ width: "120px", height: "38px" }}
                >
                  Book now
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img
                src={Hero_URL}
                alt=""
                // style={{ Width: "1232px", Height: "395px" }}
              />
            </div>
            <div className="mt-3 gap-5">
              <img src={economy_URL[0]} alt="" />
              <img src={economy_URL[1]} alt="" />
              <img src={economy_URL[3]} alt="" />
              <img src={economy_URL[4]} alt="" />
              <img src={economy_URL[5]} alt="" />
              <img src={economy_URL[6]} alt="" />
            </div>
          </div>

          <h3 className="overview">Overview</h3>
          {/* <p className="description">{desc}</p> */}

          <hr />

          <div className="d-flex justify-content-between mb-4">
            <div className="">
              <img
                src={airlines_logo_URL}
                alt=""
                style={{ width: "262px", height: "86px" }}
              />
            </div>
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
                    height: "29px",
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

          <div className="d-flex justify-content-between mb-4">
            <div className="">
              <img
                src={airlines_logo_URL}
                alt=""
                style={{ width: "262px", height: "86px" }}
              />
            </div>
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
                    height: "29px",
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
