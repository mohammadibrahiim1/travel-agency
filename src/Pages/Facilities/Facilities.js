import React, { useContext } from "react";
import GuideCard from "../../Components/GuideCard/GuideCard";
import { ApiContext } from "../../DataContext.js/DataContext";
import "./Facilities.css";

const Facilities = () => {
  const { tourGuide } = useContext(ApiContext);
//   console.log(tourGuide);
  return (
    <div>
      <section className="tour-guide-section ">
        <div className="heading container">
          <h2>Meet Our Tour Guide</h2>
          <p>
            Find a Local tour guide. so, you can know more about the tourist
            places
          </p>
        </div>

        <div className="tour-guide-card-container container">
          {tourGuide.map((guide) => (
            <GuideCard guide={guide} key={guide._id}></GuideCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Facilities;
