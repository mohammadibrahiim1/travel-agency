import React, { useContext, useEffect, useRef, useState } from "react";
import { FaStar, FaSearch, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import AddReviews from "../../Components/AddReviews/AddReviews";
// import { ApiContext } from "../../DataContext.js/DataContext";
import UserReviews from "../Home/UserReviews/UserReviews";
import './AllFlights.css'
// import { linkClasses } from "@mui/material";

const AllFlights = () => {

  // const { flights } = useContext(ApiContext);

  const [startDate, setStartDate] = useState(new Date());
  const [visible, setVisible] = useState(6);
  const [filter, setFilter] = useState();
  // const [flights, setFlights] = useState([]);
  console.log(filter)



  const showMore = () => {
    setVisible((preValue) => preValue + 3);
  };

  const locationRef = useRef("");

  // const roomRef = useRef(0);

  const searchHandler = async () => {
    const location = locationRef.current.value;
    console.log(location);
    // if (location === "") {
    //   return alert('All fields are required!')
    // }
    const res = await fetch(
      `http://localhost:5000/api/flights?location=${location}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();
    console.log(result);
    setFilter(result.data);
  }



  useEffect(() => {
    fetch(`http://localhost:5000/api/flights?pageConfig={"content":40,"page":1}`)
      .then(res => res.json())
      .then(data => {
        setFilter(data.data);
      }
      )
  }, []);


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
        <form className="flight-search-section container m-auto "  >
          <input
            type="text"
            id="form3Example1m"
            className="enter__destination"
            placeholder="Enter Destination"
            ref={locationRef}
          />



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
          <FaSearch
            className="search"
            type="submit"
            onClick={searchHandler}
          ></FaSearch>

          {/* <button className="btn btn-light" type="submit" onClick={searchHandler} >
            search
          </button> */}

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
              { filter &&  filter?.length} Packages Here
            </span>{" "}
          </div>
          <hr />

          <div>
            {filter && filter?.slice(0, visible)?.map((filt) => (
              <div className="flight-card" >
                <div class="card mb-3" style={{ "max-width": "840px" }}>
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={filt.airlines_logo_URL}
                        class="p-2"
                        alt="..."
                        style={{ "height": "110px", "width": "160px" }}
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          {" "}
                          <h5 class="card-title">{filt.airlines_name}</h5>
                          <h5 class="card-title">${filt.price}</h5>
                        </div>
                        <p class="card-text">{filt.location}</p>
                        <div className="d-flex justify-content-start align-items-center ">
                          <div>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                          </div>
                          <p class="card-text stay mt-2 ms-1">
                            {filt.ratings} start reviews
                          </p>
                        </div>
                        <div className="d-flex align-content-center justify-content-between">
                          <p className="mt-3">{filt.journey}</p>
                          {/* <h5 class="package-price">{filt.tourCategory}</h5> */}
                        </div>
                        {/* <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p> */}
                        <p class="mt-2 d-flex justify-content-start align-items-center gap-3">
                          <Link to="/" className="border rounded-2 ps-2 pe-2">
                            <FaHeart />
                          </Link>{" "}
                          <Link
                            to={`/packages/${filt._id}`}
                            class=" btn btn-info package-details-button"
                            style={{ width: "428px", height: "38px" }}
                          >
                            View Details
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            ))}
          </div>
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
