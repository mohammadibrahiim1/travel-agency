import React, { useContext } from "react";
import Place from "../Place/Place";
import { MdFlight, MdHotel } from "react-icons/md";
import "./Places.css";
import { ApiContext } from "../../../DataContext.js/DataContext";

const Places = () => {
  const { places } = useContext(ApiContext);
  // console.log(places);
  return (
    <div className="container">
      <section>
        <div className="offer-card-container">
          <div>
            <div className="show-offer">
              <div className="text-center">
                <h1 className="fw-semibold text-white">Offers</h1>
                <p className="subtitle pt-2">See Our most popular Offers</p>

                <button className="show-flights-button">
                  {" "}
                  <MdFlight /> Show Offers
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="places-section">
        <div className="heading">
          <div className=" mb-4">
            <h3 className="fw-bold text-dark ">Plan your perfect trip</h3>
            <p className="text-dark-emphasis ">
              Search Flights & Places Hire to our most popular destinations
            </p>
          </div>
          <div className="mb-4">
            <button className="see-more-button">See more places</button>
          </div>
        </div>
        <div className="card-container">
          {places?.map((place) => (
            <Place key={place._id} place={place}>
              {" "}
            </Place>
          ))}
        </div>
      </section>

      <section>
        <div className="extra-card-container">
          <div>
            <div
              className="show-flights"
              // style={{ width: "604px", height: "559px" }}
            >
              <div className="text-center">
                <h1 className="fw-semibold text-white">Flights</h1>
                <p className="subtitle pt-2">
                  Search Flights & Places Hire to our most popular destinations
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
              className="show-hotels"
              // style={{ width: "604px", height: "559px" }}
            >
              <div className="text-center">
                <h1 className="fw-semibold text-white">Hotels</h1>
                <p className="subtitle pt-2">
                  Search Flights & Places Hire to our most popular destinations
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
