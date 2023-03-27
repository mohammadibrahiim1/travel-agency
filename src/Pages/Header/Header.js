import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../../Shared/Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <section className="header-section">
        <div className="header-text">
          <p>Helping Others</p>
          <h2>Live & Travel</h2>
          <p>Special offers to suit your plan</p>
        </div>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://i.ibb.co/6tNDGTH/travel-zone-header-img.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.ibb.co/F34KBjS/saief-al-emon-r-Mqloh-IVO8-unsplash.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.ibb.co/Ycrdhxd/srilanka-img-1.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
