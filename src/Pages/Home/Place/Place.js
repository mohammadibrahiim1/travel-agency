import React from "react";
import './Place.css'

const Place = ({ place }) => {
  console.log(place);
  const { logo, tripname, description } = place;
  return (
    <div>
      <section>
        <div class="card shadow mb-3" style={{ width: "389.33px", height: "122px" }}>
          <div class="row g-0">
            <div class="col-md-4 text-center mt-3">
              <img src={logo} class=" rounded mx-auto" alt="..."  style={{ width: "90px", height: "90px" }}/>
            </div>
            <div class="col-md-8">
              <div class=" trip-card-body">
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
