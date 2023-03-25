import React from "react";
import './Place.css'

const Place = ({ place }) => {
  // console.log(place);
  const { logo, tripname, description } = place;
  return (
    <div>
      <section className="place-section">
        <div class="card shadow mb-3">
          <div class="row g-0">
            <div class="col-3 mt-3 text-center">
              <img src={logo} class=" rounded" alt="..."  style={{ width: "90px", height: "90px"}}/>
            </div>
            <div class="col-9">
              <div class="card-body">
                <h6 class="card-title">{tripname}</h6>
                <p class="card-text">{description}</p>
                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Place;
