// import React, { useContext, useEffect } from "react";
import React, { useState } from "react";
// import { useState } from "react";
// import Calendar from "react-calendar";
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
// import { ApiContext } from "../../DataContext.js/DataContext";
// import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "./FindFlights.css";

const cards = [
  {
    id: 1,
    img: "https://i.ibb.co/D5H6hkf/fall-travel-img.png",
    title: "Columbia",
    sub_title: "Amazing streets",
  },
  {
    id: 2,
    img: "https://i.ibb.co/wJ8yvH4/fall-travel-img-2.png",
    title: "London",
    sub_title: "London eye adventure",
  },
  {
    id: 3,
    img: "https://i.ibb.co/19XNPzC/Rectangle-4.png",
    title: "Paris",
    sub_title: "An amazing journey",
  },
  {
    id: 4,
    img: "https://i.ibb.co/Gpk0TC2/Rectangle-3-4.png",
    title: "Melbourne",
    sub_title: "An amazing journey journey",
  },
];

const destinations = [
  {
    id: 1,
    name: "Tokyo,Japan",
    img: "https://i.ibb.co/H21vZMw/pexels-tom-mal-k-3408353-1-1.png",
    rate: "Rs.24,000 onwards",
  },
  {
    id: 2,
    name: "Kuching,Malaysia",
    img: "https://i.ibb.co/JjJ5vc6/pexels-mudassir-ali-1878293-1.png",
    rate: "Rs.34,000 onwards",
  },
  {
    id: 3,
    name: "Kathmandu,Nepal",
    img: "https://i.ibb.co/k1YW8CQ/pexels-deva-darshan-2389473-1-1.png",
    rate: "Rs.25,000 onwards",
  },
  {
    id: 4,
    name: "Kuching,Malaysia",
    img: "https://i.ibb.co/ccN0r6t/pexels-ashok-j-kshetri-4032145-1.png",
    rate: "Rs.54,000 onwards",
  },
  {
    id: 5,
    name: "sydney,Australia",
    img: "https://i.ibb.co/5hLXHs6/pexels-deva-darshan-2389473-1.png",
    rate: "Rs.79,000 onwards",
  },
  {
    id: 6,
    name: "Tokyo,Japan",
    img: "https://i.ibb.co/9vTKNYM/pexels-tom-mal-k-3408353-1.png",
    rate: "Rs.27,000 onwards",
  },
];

const FindFlights = () => {
  // const { flights } = useContext(ApiContext);
  // const flightsData = flights.data;
  // console.log(flightsData)

  // const [startDate, setStartDate] = useState(new Date());

  const [tripType, setTripType] = useState("roundTrip");

  return (
    <div>
      {/* flight header section start */}
      <div className="flight-header-section">
        <div>
          <h1 className="flight-heading ">
            Make your travel whishlist, we’ll do the rest
          </h1>
          <h6 className="flight-subheading">
            Special offers to suit your plan
          </h6>
        </div>
      </div>
      {/* flight header section end */}

      {/* flight search section start */}
      <section className="flight-search-section-container container pt-4 ">
        <form className="flight-search-section container m-auto">
          <select
            class="form-select form-select-lg"
            aria-label="Default select example"
            onChange={(e) => setTripType(e.target.value)}
          >
            <option selected value="roundTrip">
              Round-trip
            </option>
            <option value="oneWay">One-way</option>
            <option value="multiCity">Multi-city</option>
          </select>
          <select
            class="form-select form-select-lg"
            aria-label="Default select example"
          >
            <option selected value={"1"}>
              Economy
            </option>
            <option value="2">Business</option>
            <option value="3">Premium Economy</option>
            <option value="4">First Class</option>
          </select>

          <select
            class="form-select form-select-lg"
            aria-label="Default select example"
          >
            <option selected value={"1"}>
              Travelers
            </option>
            <option value="2">Adults</option>
            <option value="3">Children</option>
            <option value="4">Students</option>
          </select>

          <div className="input-container ">
            <input
              type="text"
              id="form3Example1m"
              className="form-control form-control-lg"
              placeholder="From?"
              // ref={locationRef}
            />
          </div>
          <div className="input-container ">
            <input
              type="text"
              id="form3Example1m"
              className="form-control form-control-lg"
              placeholder="To?"
              // ref={locationRef}
            />
          </div>
          {/* <div className="input-container ">
            <input
              type="text"
              id="form3Example1m"
              className="input"
              placeholder="trip"
              // ref={tripRef}
            />
          </div> */}
          {/* <div className="input-container ">
            <input
              type="text"
              id="form3Example1m"
              className=" input"
              placeholder="class"
              // ref={classRef}
            />
          </div> */}

          {tripType === "roundTrip" ? (
            <>
              <div className="input-container">
                <input
                  type="date"
                  id="date"
                  className="form-control form-control-lg input"
                  placeholder=" "
                  name="date"
                  required
                />
                <label className="label">Departure</label>
              </div>
              <div className="input-container">
                <input
                  type="date"
                  id="date"
                  className="input"
                  placeholder=" "
                  name="date"
                  required
                />
                <label className="label">Arrival</label>
              </div>
            </>
          ) : (
            <div className="input-container">
              <input
                type="date"
                id="date"
                className="form-control form-control-lg input"
                placeholder=" "
                name="date"
                required
              />
              <label className="label">Departure</label>
            </div>
          )}

          <button className="btn btn-primary">Search</button>
        </form>
      </section>
      {/* flight search section end */}

      {/* fall into travel section start */}
      <section>
        <div className=" mt-5 pt-5 mb-4 fall-into-travel-header">
          <h3 className="fw-bold text-dark ">Fall into travel</h3>
          <p className="text-dark-emphasis ">
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got <br /> the travel tools to get you
            to your destination.
          </p>
        </div>

        <div className="fall_into_travel">
          <div className="left_card_container">
            {cards.slice(0, 2).map((card) => (
              <>
                <div class=" card left_card ">
                  <img src={card.img} class="card-img" alt="..." />
                  <div class="card-img-overlay">
                    <div class="text-white font-semibold fs-3 lh-1">
                      {card.title}
                    </div>
                    <div class="card-text text-white font-semibold fs-6">
                      {card.sub_title}
                    </div>
                    <Link to="/allFlights" class="card-text btn btn-primary">
                      <small>Book Flight</small>
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="right_card_container">
            {cards.slice(2, 4).map((card) => (
              <>
                <div class=" card right_card ">
                  <img src={card.img} class="card-img" alt="..." />
                  <div class="card-img-overlay">
                    <div class="text-white font-semibold fs-3 lh-1">
                      {card.title}
                    </div>
                    <div class="card-text text-white font-semibold fs-6">
                      {card.sub_title}
                    </div>
                    <Link
                      to="/allFlights"
                      class="card-text btn btn-primary book_flight "
                    >
                      <small>Book Flight</small>
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      {/* fall into travel section end */}

      {/* top destinations section  start*/}
      <section className="top-destinations-section">
        <div className="info">
          <h1 className="fw-bold text-dark">Top Destinations</h1>
          <h4>
            Dui in in orci fermentum a. Maecenas nunc id ut auctor curabitur
            pellentesque id et tristique. Pellentesque et a nisl aliquam eget.
            Nam velit duis in mauris arcu vivamus amet turpis in. In bibendum
            placerat quam ullamcorper accumsan felis. Velit vitae pellentesque
            sagittis et consequat sit donec. Donec aenean vivamus ullamcorper
            urna aliquet faucibus lacus aliquet.
          </h4>
          <button>Discover More</button>
        </div>

        <div className="destination-card-container">
          {destinations?.map((item) => (
            <>
              <div class="card shadow-none" style={{ width: "15rem" }}>
                <img src={item.img} class="card-img-top" alt="..." />
                <div class="card-body d-flex justify-content-between align-items-center p-2 mt-2">
                  <div>
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.rate}</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 21 20"
                    fill="none"
                    className="border rounded-circle p-1 border-warning"
                  >
                    <path
                      d="M4.13896 6.38937L7.3334 7.3116L10.8445 4.7616L5.80562 4.90604C5.75629 4.90874 5.70847 4.92404 5.66674 4.95049L4.07229 5.86715C4.02269 5.89463 3.98248 5.93636 3.95686 5.98694C3.93123 6.03752 3.92137 6.09462 3.92855 6.15087C3.93573 6.20711 3.95962 6.25991 3.99713 6.30243C4.03464 6.34495 4.08405 6.37524 4.13896 6.38937Z"
                      fill="#E0B100"
                    />
                    <path
                      d="M19.8445 3.53371L16.3445 2.77815C16.0502 2.71425 15.7455 2.71441 15.4512 2.77864C15.157 2.84286 14.8799 2.96964 14.639 3.15037L4.06674 10.8337L1.52785 10.7226C1.38243 10.7176 1.23913 10.7585 1.11818 10.8394C0.997229 10.9203 0.904747 11.0371 0.85379 11.1734C0.802833 11.3097 0.795976 11.4586 0.834186 11.599C0.872397 11.7394 0.953745 11.8643 1.06674 11.9559L3.53897 13.917C3.57967 13.9499 3.62811 13.9717 3.67966 13.9805C3.73122 13.9892 3.78415 13.9846 3.83341 13.967C4.53897 13.6948 7.16675 12.3004 10.2723 10.5948L10.8945 16.9893C10.8998 17.0446 10.9201 17.0975 10.9532 17.1422C10.9864 17.1869 11.0311 17.2217 11.0825 17.2429C11.134 17.264 11.1902 17.2707 11.2452 17.2623C11.3002 17.2538 11.3518 17.2305 11.3945 17.1948L12.7834 16.0393C12.8594 15.9755 12.9106 15.887 12.9279 15.7893L14.2445 8.40593C16.4667 7.17259 18.589 5.97815 20.0834 5.13371C20.2385 5.04932 20.3639 4.91929 20.4426 4.76125C20.5213 4.60321 20.5496 4.42479 20.5235 4.25016C20.4974 4.07554 20.4183 3.91315 20.2969 3.78499C20.1754 3.65684 20.0175 3.56911 19.8445 3.53371Z"
                      fill="#E0B100"
                    />
                  </svg>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
      {/* top destinations section end*/}
    </div>
  );
};
export default FindFlights;
