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

        {/* <a href="https://ibb.co/mR10TbF"><img src="https://i.ibb.co/7S8QCjN/flight.png" alt="flight" border="0"></a>
        <a href="https://ibb.co/NsFQtJ3"><img src="https://i.ibb.co/BtfdcQP/boxes.png" alt="boxes" border="0"></a>
<a href="https://ibb.co/L63XHXn"><img src="https://i.ibb.co/TRsxdxm/hotel-bed.png" alt="hotel-bed" border="0"></a> */}

        <div className="container home-icon-container">
          <div>
            <img
              src="https://i.ibb.co/7S8QCjN/flight.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p className="icon-text">See Flights</p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/TRsxdxm/hotel-bed.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p className="icon-text">See Hotels</p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/BtfdcQP/boxes.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p className="icon-text">See Packages</p>
          </div>
          {/* <div>
            <img
              src="https://i.ibb.co/c6XBXZT/Vector.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p className="icon-text">TRAVEL</p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Header;
