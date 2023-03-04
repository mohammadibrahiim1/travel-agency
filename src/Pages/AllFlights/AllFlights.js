import React from "react";
import { Link } from "react-router-dom";

const AllFlights = () => {
  return (
    <div>
      <div class="col-4">
        <img src="" class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-8">
        <div class="card-body hotel-list">
          <div>
            <div className="starting d-flex align-items-center justify-content-end">
              <h5 class="card-title title">ratings</h5>
              <h6>
                starting from <br />
                $price/night <br />
               
              </h6>
            </div>
          </div>

          <p class="card-text text">departure time-</p>
          <p class="card-text text">arraival  time-</p>
          <div className="d-flex justify-content-between mt-4">
            <p>return time </p>
            <h6>arrival time</h6>
          </div>
          <h5>Very Good 371 reviews</h5>
          <hr />
          <div className="d-flex justify-content-between">
            <p>love icon</p>
            <Link to=''

            // /hotelDetails/${_id}

            >
              <button className="btn btn-info">View deals</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFlights;
