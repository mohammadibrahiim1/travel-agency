import React from "react";
import { toast } from "react-hot-toast";
import { BsFillCupFill } from "react-icons/bs";
import { FaHeart, FaStar, FaStarHalf } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./AllHotelListing.css";

const AllHotelListing = ({ hotelName }) => {
  const navigate = useNavigate();
  const { HotelName, price, avgRating, cafe, cover, createdAt } = hotelName;
  const handleAddToFavorite = (hotelName) => {
    fetch("http://localhost:5000/favouritesHotel", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(hotelName),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully added!");
          navigate(`/favourite`);
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="hotel_listing_card">
      <div class="card mb-4" style={{ "max-width": "915px" }}>
        <div class="card_container">
          <div class="">
            <img
              src={cover}
              class="img-fluid"
              alt="..."
              style={{ height: "200px", width: "285px" }}
            />
          </div>
          <div class="">
            <div class="">
              <div className="">
                <h5 class="title">{HotelName}</h5>
              </div>
              <div className="ratings">
                <div className="star">
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStarHalf />
                  </span>
                </div>
                <p class="avg-rating mt-4">{avgRating} start reviews</p>
              </div>
              <div className="price_container">
                <div className="aminites">
                  <div className="text">
                    Live a little and celbrate with champagne
                  </div>
                  <BsFillCupFill className="me-2 fw-semibold" />
                  {cafe}+ Aminities
                  <span className="me-3 text-warning fw-semibold">
                    {" "}
                    {createdAt}
                  </span>
                </div>

                <div>
                  <div class="price-dollar">${price}</div>
                  <div className="room_quantity">1 room 2 days</div>
                  <div className="includes_text">Includes taxes and fees</div>
                </div>
              </div>

              <p class="mt-2 d-flex justify-content-start align-items-center gap-3">
                <div
                  className="border rounded-2 ps-5 pe-5 btn btn-light"
                  onClick={() => handleAddToFavorite(hotelName)}
                >
                  <FaHeart />
                </div>{" "}
                <Link
                  to={`/category/${hotelName._id}`}
                  class="hotel-details-button
                    "
                >
                  See availability
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllHotelListing;
