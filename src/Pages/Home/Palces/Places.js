import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UseContext";
import Place from "../Place/Place";
import { MdFlight, MdHotel } from "react-icons/md";

import "./Places.css";

const Places = () => {
  const { places } = useContext(AuthContext);
  console.log(places);
  return (
    <div>
      <section className="places-section">
        <div className="container trip-container ">
          <div className="ms-3 mb-4">
            <h3 className="fw-bold text-dark ">Plan your perfect trip</h3>
            <p className="text-dark-emphasis ">
              Search Flights & Places Hire to our most popular destinations
            </p>
          </div>
          <div className="me-3 mb-4">
            <button className="see-more-button">See more places</button>
          </div>
        </div>
        <div className="card-container">
          {places.slice(0, 9).map((place) => (
            <Place key={place._id} place={place}>
              {" "}
            </Place>
          ))}
        </div>
      </section>

      <section>
        {/* <a href="https://ibb.co/7JPmJmQ"><img src="https://i.ibb.co/xSWTSTY/hotels-img.png" alt="hotels-img" border="0"></a>
<a href="https://ibb.co/0nvtS64"><img src="https://i.ibb.co/p15y8MV/flights-img.png" alt="flights-img" border="0"></a> */}
       <div className="d-flex justify-content-center align-content-center gap-5">
       <div>
          <div
            className=" flight-hotel-card "
            style={{ width: "604px", height: "559px" }}
          >
            <div className="text-center">
              <h1 className="fw-semibold text-white">Flights</h1>
              <p className="subtitle pt-2">
                Search Flights & Places Hire to our most popular <br />{" "}
                destinations
              </p>

              <button className="show-flights-button">
                {" "}
                <MdFlight /> Show flights
              </button>
            </div>
            {/* <img src="https://i.ibb.co/p15y8MV/flights-img.png" alt="" /> */}
          </div>
        </div>
        <div>
          <div
            className=" hotel-flight-card "
            style={{ width: "604px", height: "559px" }}
          >
            <div className="text-center">
              <h1 className="fw-semibold text-white">Hotels</h1>
              <p className="subtitle pt-2">
                Search Flights & Places Hire to our most popular <br />{" "}
                destinations
              </p>

              <button className="show-flights-button">
                {" "}
                <MdHotel /> Show Hotels
              </button>
            </div>
            {/* <img src="https://i.ibb.co/p15y8MV/flights-img.png" alt="" /> */}
          </div>
        </div>
       </div>
      </section>
    </div>
  );
};

export default Places;
