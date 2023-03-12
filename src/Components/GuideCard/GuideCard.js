import React from "react";
import { Link } from "react-router-dom";
import "./GuideCard.css";

const GuideCard = ({ guide }) => {
  console.log(guide);
  const { name, image, location, quote, rate, ratings,_id } = guide;
  return (
    <div>
      <div class="card  guide-card  mb-3" style={{ "max-width": "580px", "height":"200px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={image}
              class="img-fluid  rounded   p-2"
              style={{ width: "200px", height: "200px" }}
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
         
        <div className="d-flex justify-content-between align-items-center" >
        <div>  <h5 class="card-title">{name}</h5>
              <h5 class="cardSub-title">{location}</h5></div> <div><h5 className="guide-rate">{rate}</h5></div>
        </div>
          
              <hr className="w-100" />
              <p class="quote">{quote.slice(0,51)}</p>
              <p class="card-text d-flex justify-content-between align-items-center">
                <small class="text-warning">{ratings}</small>
                <Link to={`/tourGuide/${_id}`} className="btn btn-outline-info border-1">see details</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
