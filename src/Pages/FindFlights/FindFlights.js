import React from "react";
import { useState } from "react";
// import Calendar from "react-calendar";
// import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
// import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "./FindFlights.css";

const FindFlights = () => {
  // const [value, onChange] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <section className="flight-search-section ">
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
        <div className="">
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
          <Link className="btn btn-primary-emphasis" to="/flightListing/allFlights">
            search
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FindFlights;
