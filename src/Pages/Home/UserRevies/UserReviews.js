import React from 'react';
import './UserReviews.css'

const UserReviews = () => {
    return (
        <div>
    <section className='container'>
    <div className="container reviews-container ">
          <div className="ms-3 mb-4">
            <h3 className="fw-bold text-dark ">Plan your perfect trip</h3>
            <p className="text-dark-emphasis ">
              Search Flights & Places Hire to our most popular destinations
            </p>
          </div>
          <div className="me-3 mb-4">
            <button className="see-more-button">See all</button>
          </div>
        </div>
    <div class="card" style={{"width": "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </section>
        </div>
    );
};

export default UserReviews;