import React, { useContext } from "react";
import AddReviews from "../../Components/AddReviews/AddReviews";
import GuideCard from "../../Components/GuideCard/GuideCard";
import { ApiContext } from "../../DataContext.js/DataContext";
import UserReviews from "../Home/UserReviews/UserReviews";
import { BiDish } from "react-icons/bi";
import { GiForestCamp } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import {
  MdOutlineEmojiTransportation,
  MdMedicalServices,
  MdTour,
} from "react-icons/md";
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
          {tourGuide.slice(0, 6).map((guide) => (
            <GuideCard guide={guide} key={guide._id}></GuideCard>
          ))}
        </div>
      </section>
      <section className="services-section">
        <div className="service-section-heading">
          <h2> Our Services </h2>
          <p className="text-center">see our popular services.</p>
        </div>
        <div className="benefits-container">
          <div className="d-flex justify-content-start align-items-start   gap-3 p-3 border rounded-3 shadow">
            <div>
              <BiDish
                className="benefits-icon"
                style={{ width: "52px", height: "52px" }}
              />
            </div>
            <div className="benefits-info">
              <h4>Food & Drink</h4>
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start  gap-3 p-3 border rounded-3 shadow ">
            <div>
              <MdOutlineEmojiTransportation
                className="benefits-icon"
                style={{ width: "52px", height: "52px" }}
              />
            </div>
            <div className="benefits-info">
              <h4>Transportation</h4>
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start  gap-3 p-3 border rounded-3  shadow">
            <div>
              <FaBed
                className="benefits-icon"
                style={{ width: "52px", height: "52px" }}
              />
            </div>
            <div className="benefits-info">
              <h4>Accommodation</h4>
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start  gap-3 p-3 border rounded-3  shadow">
            <div>
              <MdMedicalServices
                className="benefits-icon"
                style={{ width: "52px", height: "52px" }}
              />
            </div>
            <div className="benefits-info">
              <h4>Medical</h4>
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start  gap-3 p-3 border rounded-3  shadow">
            <div>
              <GiForestCamp
                className="benefits-icon"
                style={{ width: "52px", height: "52px" }}
              />
            </div>
            <div className="benefits-info">
              <h4>CampFire</h4>
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start  gap-3 p-3 border rounded-3  shadow">
            <div>
              <MdTour
                className="benefits-icon"
                style={{ width: "52px", height: "52px" }}
              />
            </div>
            <div className="benefits-info">
              <h4>Tour Guide</h4>
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="accordion-section row">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h6>What they say</h6>
          <h2>Frequently Asked Question</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
            eaque corporis. Cumque dicta delectus accusantium blanditiis
            inventore at dolore vitae.
          </p>
        </div>
        <div className=" col-sm-12 col-lg-6 col-md-6">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  How to book a trip?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How to get in touch with you?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                 How to cancel a trip?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="explore">

        <div>
          <h2 >Let's go places together</h2>
          <p>Discover the latest offers and news and start planning your next trip with us.</p>
        </div>
       

        {/* <div className="col-6">
          <h6>What they say</h6>
          <h2>Frequently Asked Question</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
            eaque corporis. Cumque dicta delectus accusantium blanditiis
            inventore at dolore vitae.
          </p>
        </div>
        <div className="col-6">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  How to book a trip?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How to get in touch with you?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                 How to cancel a trip?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
