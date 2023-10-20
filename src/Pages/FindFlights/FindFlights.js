// import React, { useContext, useEffect } from "react";
import React from "react";
// import { useState } from "react";
// import Calendar from "react-calendar";
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import AddReviews from "../../Components/AddReviews/AddReviews";
// import { ApiContext } from "../../DataContext.js/DataContext";
import UserReviews from "../Home/UserReviews/UserReviews";
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

const FindFlights = () => {
  // const { flights } = useContext(ApiContext);
  // const flightsData = flights.data;
  // console.log(flightsData)

  // const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
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

      <section className=" extra-section">
        <div className="mt-5 pt-5 mb-4 fall-into-travel-header">
          <h3 className="fw-bold text-dark ">Fall into travel</h3>
          <p className="text-dark-emphasis">
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got <br /> the travel tools to get you
            to your destination.
          </p>
        </div>

        <div class="row extra_section">
          <div class="card">
            <div class="card-body">
              <div className="d-lg-flex d-md-flex d-sm-flex  justify-content-between align-items-center">
                <h5 class="card-title fs-1">
                  Backpacking <br /> <span>Sri Lanka</span>
                </h5>
                <h3 className="text-dark p-1 rounded-1 font-bold fs-5 text-end bg-white">
                  <span>From</span> <br /> $275
                </h3>
              </div>
              <p class="card-text">
                Traveling is a unique experience as it's the best way to unplug
                from the pushes and pulls of daily life. It helps us to forget
                about our problems, frustrations, and fears at home. During our
                journey, we experience life in different ways. We explore new
                places, cultures, cuisines, traditions, and ways of living.
              </p>
              <Link to="/allFlights" class="btn btn-light book-flight-btn">
                Book Flight
              </Link>
            </div>
          </div>

          <div className="extra-img">
            <div>
              <img
                src="https://i.ibb.co/VBthY6H/Rectangle-3-3.png"
                className="img"
                alt=""
                style={{ width: "318px", height: "170px" }}
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/4dKN9dN/Rectangle-3-2.png"
                alt=""
                style={{ width: "318px", height: "170px" }}
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/wK1kzX6/Rectangle-3-1.png"
                alt=""
                style={{ width: "318px", height: "170px" }}
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/wh24VB5/Rectangle-3.png"
                alt=""
                style={{ width: "318px", height: "170px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <UserReviews></UserReviews>
      </section> */}
      <section>
        <AddReviews></AddReviews>
      </section>
    </div>
  );
};
export default FindFlights;
