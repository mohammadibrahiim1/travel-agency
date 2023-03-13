import React from "react";
import "./PackagesDetails.css";
import { FaStar, FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
const PackagesDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const {
    name,
    includes,
    excludes,
    tourCategory,
    stay,
    facilities,
    price,
    itinerary,
    img,
    ratings,
    journey,
    termsAndCondition,
    reservationInfo,
    cancellationPolicy,
    overview,
    pricingInfo,
  } = details;

  return (
    <div>
      <div>
        <section className="container">
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="d-flex justify-content-start align-items-center gap-2">
                  <h4 className="package-name">{name}</h4>
                  <div className="rating-star">
                    <span className="text-warning">
                      <FaStar />
                    </span>
                    <span className="text-warning">
                      <FaStar />
                    </span>
                    <span className="text-warning">
                      <FaStar />
                    </span>
                    <span className="text-warning">
                      <FaStar />
                    </span>
                    <span className="text-warning">
                      <FaStar />
                    </span>

                    <span className="mt-4 ms-2 text-warning">
                      {ratings} start package
                    </span>
                  </div>
                </div>
                <div className="package-location">
                  <p>{journey}</p>
                </div>
              </div>
              <div>
                <h4 className="package-price">{price}</h4>
                <div className="">
                  <button className="btn btn-light  ">
                    <FaHeart />
                  </button>
                  <button className="btn btn-info ms-2">Book Now</button>
                </div>
              </div>
            </div>
            {/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/nw29CM1/biman-bangladesh-img.jpg" alt="biman-bangladesh-img" border="0"></a> */}

            <div className="" >
              <img
                src={img}
                style={{ width: "800px", height: "500px" }}
                alt=""
              />
            </div>
            <hr />
            <div className="overview">
              <h6 className="mt-4 fw-bold">packages overview :</h6>
              <p>{overview}</p>
            </div>
            <hr />
            <h5>Itinerary</h5>
            <div className="itinerary-container">
              <div>
                {itinerary?.[0]}
                <br />
                {itinerary?.[1]}
                <br />
                {itinerary?.[2]}
                <br />
                {itinerary?.[3]}
                <br />
              </div>
              <div>
                {itinerary?.[4]}
                <br />
                {itinerary?.[5]}
                <br />
                {itinerary?.[6]}
                <br />
                {itinerary?.[7]}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PackagesDetails;
