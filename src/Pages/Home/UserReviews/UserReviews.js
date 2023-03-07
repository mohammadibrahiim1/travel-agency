import React, { useContext } from "react";
import { ApiContext } from "../../../DataContext.js/DataContext";
// import { AuthContext } from '../../../Context/UserContext';
import "./UserReviews.css";

const UserReviews = () => {
  const { reviews } = useContext(ApiContext);
  console.log(reviews);
  return (
    <div>
      <div className="review-header">
        <h2 className="fw-bold text-dark">Reviews</h2>
        <p className="text-secondary">what people says about us</p>
      </div>
      <section className="reviews-container">
        {reviews.map((review) => (
          <>
            <div
              class="card border  mb-3"
              style={{ width: "450px", height: "210px" }}
            >
              <div class="row">
                <div class="col-md-4">
                  <img
                    src={review?.photoURL}
                    style={{ width: "150px", height: "150px" }}
                    class="rounded mx-auto mt-3 ms-3"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body mt-3">
                    <h5 class="card-title">{review.name}</h5>
                    <p class="card-text">{review.text.slice(0, 70)}</p>
                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </section>
    </div>
  );
};

export default UserReviews;
