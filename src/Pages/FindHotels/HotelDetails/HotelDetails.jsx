import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import "./HotelDetails.css";
import UserReviews from "../../Home/UserReviews/UserReviews";
import AddReviews from "../../../Components/AddReviews/AddReviews";

const HotelDetails = () => {
  const hotelName = useLoaderData();
  const {
    _id,
    title,
    photo,
    detailPhoto1,
    detailPhoto2,
    detailPhoto3,
    detailPhoto4,
    avgRating,
    city,
    price,
    desc,
    normalRoom,
    deluxeRoom,
    normalPrice,
    deluxePrice,
    amenities,
  } = hotelName;
  return (
    <div>
      <section className="container">
        <div className="gap-1">
          <span className="d-flex ">
            <h5>{city}</h5>
            <MdKeyboardArrowRight className="arrow" />
            <h6>{title}</h6>
          </span>
        </div>

        <div className="d-flex align-items-center">
          <h1 className="main__title">{title}</h1>
          <div className="star">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h6 className="hotel__rating">{avgRating} Star Hotel</h6>
        </div>

        <div className="d-flex justify-content-between">
          <div className="d-flex location">
            <ImLocation2 />
            <h6>{city}</h6>
          </div>

          <div className="book__details">
            <p className="book__price">${price}</p>

            <Link
              to={`/hotelBookingDetails/${_id}`}
              class=" btn btn-info book-button"
              style={{ width: "120px", height: "38px" }}
            >
              Book now
            </Link>
          </div>
        </div>

        <div className="d-flex">
          <div className="col-6">
            <img className="detailPhoto" src={photo} alt="" />
          </div>
          <div className="col-6">
            <div className="d-flex">
              <div className="col-6">
                <img className="details" src={detailPhoto1} alt="" />
              </div>
              <div className="col-6">
                <img className="details" src={detailPhoto2} alt="" />
              </div>
            </div>

            <div className="d-flex mt-2">
              <div className="col-6">
                <img className="details" src={detailPhoto3} alt="" />
              </div>
              <div className="col-6">
                <img className="details" src={detailPhoto4} alt="" />
              </div>
            </div>
          </div>
        </div>

        <hr />

        <h3 className="overview">Overview</h3>
        <p className="description">{desc}</p>

        <hr />

        <h3 className="available__room">Available Rooms</h3>

        <div className="d-flex justify-content-between mb-4">
          <div className="d-flex">
            <img src={photo} alt="" style={{ width: "48px", height: "48px" }} />
            <p className="mt-2 ms-2">Superior room - {normalRoom}</p>
          </div>
          <div className="d-flex">
            <h4 className="me-4">${normalPrice}</h4>
            <Link
              to={`/hotelBookingDetails/${_id}`}
              class=" btn btn-info book-button"
              style={{ width: "120px", height: "38px" }}
            >
              Book now
            </Link>
          </div>
        </div>

        <div className="d-flex justify-content-between mb-4">
          <div className="d-flex">
            <img src={photo} alt="" style={{ width: "48px", height: "48px" }} />
            <p className="mt-2 ms-2">Delux room - {deluxeRoom}</p>
          </div>
          <div className="d-flex">
            <h4 className="me-4">${deluxePrice}</h4>
            {/* <Link
              to=""
              class=" btn btn-info book-button"
              style={{ width: "120px", height: "38px" }}
            >
              Book now
            </Link> */}
          </div>
        </div>

        <hr />

        <div>
          <h5>Amenities</h5>
          {amenities.map((amenity) => (
            <>
              <p className="amenity">
                {" "}
                {amenity} <br />{" "}
              </p>
            </>
          ))}
        </div>

        <section>
          <UserReviews></UserReviews>
          <AddReviews></AddReviews>
        </section>
      </section>
    </div>
  );
};

export default HotelDetails;
