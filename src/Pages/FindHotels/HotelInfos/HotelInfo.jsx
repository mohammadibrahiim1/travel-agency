import React from "react";
import "./HotelInfo.css";

const HotelInfo = ({ hotel }) => {
  const { img, place, name } = hotel;
  return (
    <div>
      <section className="popular-hotel-card-section">
        <div class="popular-hotel-card">
          <img src={img} class="location_card_img" alt="..." />
          <div class="card-body mt-2">
            <div class="card-title">{name}</div>
            <div class="card-text">{place}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelInfo;
