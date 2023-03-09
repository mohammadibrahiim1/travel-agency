import React from 'react';
import './GuideCard.css'

const GuideCard = ({guide}) => {
    console.log(guide);
    const {name,image,location,quote,rate,ratings} = guide;
    return (
        <div>
            <div class="card mb-3" style={{"max-width": "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={image} class="img-fluid rounded-start" style={{width: "220px", height:"220px"}} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <h5 class="card-title">{location}</h5>
        <p class="card-text">{quote}</p>
        <p class="card-text"><small class="text-muted">{ratings}</small>
        <small>{rate}</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default GuideCard;