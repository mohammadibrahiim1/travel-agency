import React from "react";
import "./RentACard.css";
import { Link } from "react-router-dom";

const RentACar = () => {
  return (
    <div>
      <section className="profile-header-section">
        <div>
          <h2>Rent A Car</h2>
          <p>
            Discover the latest offers and news and start planning your next
            trip with us.
          </p>
        </div>
      </section>
      <section className=" container rent-a-car d-flex justify-content-evenly align-content-center gap-0">
        <div className="card">
          <div>
            {/* <a href="https://ibb.co/hm23BCg"><img src="https://i.ibb.co/YLfHcbN/rent-a-car-img-2.jpg" alt="rent-a-car-img-2" border="0"></a>
<a href="https://ibb.co/55TRvdh"><img src="https://i.ibb.co/D74RkNf/car-rental-img.jpg" alt="car-rental-img" border="0"></a> */}
            <img
              src="https://i.ibb.co/YLfHcbN/rent-a-car-img-2.jpg"
              alt=""
              className="img"
            />
          </div>
          <Link className="text-center text-primary fw-semibold">
            inside-city
          </Link>
        </div>
        <div className="card">
          <div>
            {/* <a href="https://ibb.co/hm23BCg"><img src="https://i.ibb.co/YLfHcbN/rent-a-car-img-2.jpg" alt="rent-a-car-img-2" border="0"></a>
<a href="https://ibb.co/55TRvdh"><img src="https://i.ibb.co/D74RkNf/car-rental-img.jpg" alt="car-rental-img" border="0"></a> */}
            <img
              src="https://i.ibb.co/D74RkNf/car-rental-img.jpg"
              alt=""
              className="img"
            />
          </div>
          <Link className="text-center text-primary fw-semibold">
            outside-city
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RentACar;
