import React from "react";
import "./GuideCard.css";

const GuideCard = ({ guide }) => {
  console.log(guide);
  const { name, image, location, quote, rate, ratings } = guide;
  return (
    <div>
      <div class="card  guide-card  mb-3" style={{ "max-width": "580px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={image}
              class="img-fluid rounded-start"
              style={{ width: "210px", height: "210px" }}
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
              <p class="quote">{quote.slice(0,48)}</p>
              <p class="card-text d-flex justify-content-between align-items-center">
                <small class="text-warning">{ratings}</small>
                <small className="btn btn-outline-info border-1">see details</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
