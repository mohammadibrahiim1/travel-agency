import React, { useContext, useEffect } from "react";
import { useState } from "react";
// import Calendar from "react-calendar";
// import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import AddReviews from "../../Components/AddReviews/AddReviews";
import { ApiContext } from "../../DataContext.js/DataContext";
import UserReviews from "../Home/UserReviews/UserReviews";
// import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "./FindFlights.css";

const FindFlights = () => {
  const { flights } = useContext(ApiContext);
  const flightsData = flights.data;
  console.log(flightsData)

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>


      <section className="flight-header-section">
        <div className="w-50 m-auto ">
          <h2>
            Make your travel whishlist, we’ll do the rest
          </h2>
          <p>
            Special offers to suit your plan
          </p>
        </div>

      </section>



      <section className="flight-search-section-container container" >
        <form className="flight-search-section container m-auto ">
          <div>
            {/* <label htmlFor="destination">From</label> */}
            <select name="" id="destination" className="select-option">
              <option value=" From">From</option>
              <option value="Cumilla">Cumilla</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
            </select>
            {/* <input type="submit" value="submit" /> */}
          </div>
          <div>
            {/* <label htmlFor="destination">From</label> */}
            <select name="" id="destination" className="select-option">
              <option value=" To">To</option>
              <option value="Cumilla">Cumilla</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
            </select>
            {/* <input type="submit" value="submit" /> */}
          </div>
          <div>
            {/* <label htmlFor="destination">From</label> */}
            <select name="" id="Trip" placeholder="Trip" className="select-option">
              {/* <option value=" Trip">Trip</option> */}
              <option value="One Way">One Way</option>
              <option value="Return">Return</option>
              {/* <option value="Cox's Bazar">Cox's Bazar</option> */}
            </select>
            {/* <input type="submit" value="submit" /> */}
          </div>
          <div >
            <DatePicker
              className="datepicker "
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              placeholderText="departure time"
            />
          </div>
          <div>
            <DatePicker
              className="datepicker"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            />
          </div>
          <div>
            {/* <label htmlFor="destination">From</label> */}
            <select name="" id="bookingclass" className="select-option">
              <option value="BookingClass">Booking Class</option>
              <option value="First Class">First Class</option>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
            </select>
            {/* <input type="submit" value="submit" /> */}
          </div>
          <div>
            <Link className="btn btn-light " to="/flightListing/allFlights">
              search
            </Link>
          </div>
        </form>
      </section>
      <section  >
        <div className="container mt-5 pt-5 mb-4 fall-into-travel-header" >
          <h3 className="fw-bold text-dark ">Fall into travel
          </h3>
          <p className="text-dark-emphasis ">
            Going somewhere to celebrate this season?   Whether you’re going home or somewhere to roam,  we’ve got <br /> the travel tools to get you to your destination.
          </p>
        </div>
        <div className="fall-into-travel container">

          <div class="card" >
            {/* <img src="" class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">Columbia</h5>
              <p class="card-text">Amazing streets</p>
              <Link to="/" class="btn btn-primary">Book Flights</Link>
            </div>
          </div>
          <div class="card" >
            {/* <img src="" class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">London</h5>
              <p class="card-text">London eye adventure</p>
              <Link to="/" class="btn btn-primary">Book Flights</Link>
            </div>
          </div>
          <div class="card" >
            {/* <img src="" class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">Melbourne</h5>
              <p class="card-text">An amazing journey</p>
              <Link to="/" class="btn btn-primary">Book Flights</Link>
            </div>
          </div>
          <div class="card" >
            {/* <img src="" class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">Maldives</h5>
              <p class="card-text"> An amazing journey journey</p>
              <Link to="/" class="btn btn-primary">Book Flight</Link>
            </div>
          </div>
        </div>
        {/* <div>
          {flightsData && flightsData?.slice(0, 4)?.map((flight) => (

       

          ))}
        </div> */}

      </section>

      <section>
        <UserReviews></UserReviews>
      </section>
      <section>
        <AddReviews></AddReviews>
      </section>
    </div>
  );
};
export default FindFlights;
