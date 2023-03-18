import React, { useState } from "react";
// import ReactDatePicker from "react-datepicker";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import AddReviews from "../../Components/AddReviews/AddReviews";
import UserReviews from "../Home/UserReviews/UserReviews";
import './AllFlights.css'

const AllFlights = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [visible, setVisible] = useState(6);

  const showMore = () => {
    setVisible((preValue) => preValue + 3);
  };
  return (
    <div>
      <section className="allFlights-header-section ">
        <div>
          <h2>Let's go places together</h2>
          <p>
            Discover the latest offers and news and start planning your next
            trip with us.
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

      <section className="row container m-auto mt-5 mb-5">
        <div className="checkbox-container mt-5 mb-5  col-md-12 col-sm-12 col-lg-2">
          <p className="package-filter">Filters</p>
          <hr className="text-dark" />

          <div>
            <p className="filter-title"> package category</p>
          </div>

          <div>
            <input
              type="checkbox"
              name="international"
              id=""
              className="checkbox"
            // checked={IntFilter}
            // onClick={() => setIntFilter(!IntFilter)}
            />
            <span className="input-filter-text ms-2">International</span> <br />
          </div>
          <div>
            <input
              type="checkbox"
              name="domestic"
              className="checkbox"
              id=""
            // checked={dmsFilter}
            // onClick={() => setdmsFilter(!dmsFilter)}
            />
            <span className="input-filter-text ms-2">Domestic</span> <br />
          </div>
        </div>

        <div
          class=" d-lg-flex justify-content-evenly align-items-center mt-5  d-md-none d-lg-block d-sm-none d-block col-lg-1"
          style={{ height: "auto" }}
        >
          <div class="vr mt-5"></div>
        </div>

        <div className="col-lg-9 col-md-12 col-sm-12 col-12">
          <div className=" mt-5">
            <span className="package-container">
              <span></span> Packages Here
            </span>{" "}
          </div>
          <hr />

          {/* <div>
          {packages.slice(0, visible).map((pk) => (
            <DisplayPackage pk={pk}></DisplayPackage>
          ))}
        </div> */}
        </div>

        <div className="text-center mt-4" onClick={showMore}>
          <button className="btn btn-light ">show more</button>
        </div>
      </section>
      <section>
        <UserReviews></UserReviews>
        <AddReviews></AddReviews>
      </section>
    </div>
  );
};

export default AllFlights;
