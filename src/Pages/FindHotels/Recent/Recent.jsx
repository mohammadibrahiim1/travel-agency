import React from "react";
import "./Recent.css";

const Recent = ({ location }) => {
  const { name, img, properties } = location;
  return (
    <div>
      <section className="place-section">
        <div class="location_card">
          <img src={img} class="location_card_img" alt="..." />
          <div class="card-body mt-2">
            <div class="card-title">{name}</div>
            <div class="card-text">{properties}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recent;
