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
      <section className="flight-search-section">
        <div className="">
          {/* <label for="exampleDataList" class="form-label">
            Datalist example
          </label> */}
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="From"
          />

          <datalist id="datalistOptions">
            <option value="San Francisco" />
            <option value="New York" />
            <option value="Seattle" />
            <option value="Los Angeles" />
            <option value="Chicago" />
          </datalist>
        </div>
        <div className="">
          {/* <label for="exampleDataList" class="form-label">
            Datalist example
          </label> */}
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="To"
          />

          <datalist id="datalistOptions">
            <option value="San Francisco"  />
            <option value="New York" />
            <option value="Seattle" />
            <option value="Los Angeles" />
            <option value="Chicago" />
            
          </datalist>
        </div>

        <div className="">
          {/* <label for="TripDataList" class="form-label">
            Trip
          </label> */}
          <input
            class="form-control"
            list="TriplistOptions"
            id="TripDataList"
            placeholder="Trip"
          />
          <datalist id="TriplistOptions">
            <option value="One Way" />
            <option value="Return" />
            
          </datalist>
        </div>
        <div className="">
          <label for="TripDataList" class="form-label">
            departure Time
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
          />
        </div>
        <div>
          <label for="TripDataList" class="form-label">
          Return
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
          />
        </div>
        <Link  to="/flightListing" >search</Link>
      </section>
    </div>
  );
};

export default FindFlights;
