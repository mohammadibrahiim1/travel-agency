import React, { useContext } from "react";
import AddReviews from "../../Components/AddReviews/AddReviews";
import GuideCard from "../../Components/GuideCard/GuideCard";
import { ApiContext } from "../../DataContext.js/DataContext";
import UserReviews from "../Home/UserReviews/UserReviews";
import "./Facilities.css";

const Facilities = () => {
  const { tourGuide } = useContext(ApiContext);
  //   console.log(tourGuide);
  return (
    <div>
      <section className="tour-guide-section ">
        <div className="heading">
          <h2>Meet Our Tour Guide</h2>
          <p>
            Find a Local tour guide. so, you can know more about the tourist
            places
          </p>
        </div>

        <div className="tour-guide-card-container">
          {tourGuide.slice(0, 5).map((guide) => (
            <GuideCard guide={guide} key={guide._id}></GuideCard>
          ))}
        </div>
      </section>
      <hr />
      <section>
        <UserReviews></UserReviews>
      </section>
      <section>
        <AddReviews></AddReviews>
      </section>
    </div>
  );
};

export default Facilities;
