import React, { useContext } from "react";
import { ApiContext } from "../../../DataContext.js/DataContext";
// import { AuthContext } from '../../../Context/UserContext';
import "./UserReviews.css";

const UserReviews = () => {
  const { reviews } = useContext(ApiContext);

  // console.log(reviews);
  return (
    <div>
      <hr />
      <div className="review-header">
        <h2 className="fw-bold text-dark">Reviews</h2>
        <p className="text-secondary">what people says about us</p>
      </div>
      <section className="reviews-container">
        {reviews.map((review) => (
          <>
            <div class="border rounded p-2 mb-4">
              <div class="d-flex justify-content-start align-items-start gap-2 ">
                <div class="">
                  <img
                    src={review?.photoURL}
                    style={{ width: "50px", height: "50px" }}
                    class="rounded rounded-circle mx-auto"
                    alt="..."
                  />
                </div>
                <div class="">
                  <div class="">
                    <h6 class="user-name">{review.name}</h6>
                    <p class="user-text">{review.text}</p>
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
