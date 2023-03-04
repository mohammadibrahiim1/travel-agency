import React from "react";
import { Link } from "react-router-dom";

const AllFlights = () => {
  return (
            <div>

           <section>
           <div class="card mb-3" style={{" ": "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="img   " class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">ratings and reviews</h5> <span>price</span>
        <h5 class="card-title">departure time  <span>arrival time</span> </h5> <span>non stop</span> <span>approach time</span>
        <div>
          <h5>return time</h5>
        </div>
        {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
        <p class="card-text"><small class="text-muted"> <span>favourite <span className="btn btn-in
        ">view deals</span> </span> </small></p>
      </div>
    </div>
  </div>
</div>
           </section>

            </div>
  );
};

export default AllFlights;
