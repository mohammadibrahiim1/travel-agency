import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddReviews from "../../Components/AddReviews/AddReviews";
import UserReviews from "../Home/UserReviews/UserReviews";

const AllFlights = () => {
  const [visible, setVisible] = useState(6);

  const showMore = () => {
    setVisible((preValue) => preValue + 3);
  };
  return (
    <div>
      <section className="package-section">
        <div>
          <h2>Let's go places together</h2>
          <p>
            Discover the latest offers and news and start planning your next
            trip with us.
          </p>
        </div>
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
