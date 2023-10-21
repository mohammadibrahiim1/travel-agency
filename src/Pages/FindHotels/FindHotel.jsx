import React, { useContext } from "react";
// import "../../Styles/HotelSearch.css";
// import Banner from "../../assets/images/Frame 36.png";
import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import "./FindHotel.css";
// import { AuthContext } from "../../Context/UserContext";
import Recent from "./Recent/Recent";
import HotelInfo from "./HotelInfos/HotelInfo";
import UserReviews from "../Home/UserReviews/UserReviews";
import AddReviews from "../../Components/AddReviews/AddReviews";
// import HotelInfo from "./HotelInfo/HotelInfo";

//
//
//
//

const locations = [
  {
    id: 1,
    name: "Australia",
    properties: "2246 properties",
    img: "https://i.ibb.co/64SxnQV/australia.png",
  },
  {
    id: 2,
    name: "Japan",
    properties: "1278 properties",
    img: "https://i.ibb.co/sFqg3sd/japan.png",
  },
  {
    id: 3,
    name: "New Zealand",
    properties: "480 properties",
    img: "https://i.ibb.co/QkG3sTb/new-zealand.png",
  },
  {
    id: 4,
    name: "Greece",
    properties: "320 properties",
    img: "https://i.ibb.co/QN9PLmr/greece.png",
  },
];

const inspirations = [
  {
    id: 1,
    title: "World’s top destinations during and post covid timeline",
    des: "Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
    img: "https://i.ibb.co/7nSHYZ6/worlds-top-destination-during-and-post-covid-timeline.png",
  },
  {
    id: 1,
    title: "Top cities for Vegan Travellers",
    des: "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
    img: "https://i.ibb.co/jgn5NKn/top-cities-for-vegan-travellers.png",
  },
  {
    id: 1,
    title: "Sydeny’s 10 most fashionable 5 star hotels",
    des: "Browse the fastest growing tourism sector in the heart of Australia tourism capital ....",
    img: " https://i.ibb.co/0241yc8/sydney-10-most-fashionable-5-star-hotel.png",
  },
];
const FindHotel = () => {
  //   const loading = useContext(AuthContext);
  const { data: hotelNames = [] } = useQuery({
    queryKey: ["hotelPlace"],
    queryFn: async () => {
      const res = await fetch(
        "https://travel-zone-server-mohammadibrahiim1.vercel.app/hotelPlaces"
      );
      const data = await res.json();
      return data;
    },
  });

  //   if (loading) {
  //     return (
  //       <div class="spinner-grow text-primary" role="status">
  //         <span class="visually-hidden">Loading...</span>
  //       </div>
  //     );
  //   }

  return (
    <section className="">
      <section className="hotels-header-section">
        <div>
          <h2>Enjoy Your Dream Vacation</h2>
          <p>
            Plan and book our perfect trip with expert advice, travel tips,
            destination information and inspiration from us
          </p>
        </div>
      </section>

      {/* =======================Your recent searches==================== */}
      <div className="dream_section">
        <div className="fw-bold text-md-center text-lg-start fs-3 text-dark heading mb-3">
          Enjoy your dream vacation
        </div>
        <div className="sub_heading">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </div>
        <div className="location_card_container mt-4">
          {locations?.map((location) => (
            <Recent key={location.id} location={location}></Recent>
          ))}
        </div>
      </div>

      <div className="inspiration_section">
        <div className="fw-bold text-md-center text-lg-start fs-3 text-dark heading mb-3">
          Get inspiration for your next trip
        </div>

        <div className="inspiration_card_container">
          {inspirations.map((inspiration) => (
            <div div className="inspiration_card">
              <div class="card text-bg-dark">
                <img src={inspiration.img} class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">{inspiration.title}</h5>
                  <p class="card-text">{inspiration.des}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====================Fall into travel======================= */}

      {/* <section className="fall-into-travel-header mt-5 pt-5 mb-4 container">
        <h3 className="fw-bold text-dark  mt-5 text-md-center text-lg-start ">
          Fall into travel
        </h3>
        <p className="mb-4 text-sm-start text-md-center text-lg-start">
          Going somewhere to celebrate this season? Whether you’re going home or
          somewhere to roam, we’ve got <br /> the travel tools to get you to
          your destination.
        </p>
        <div className="fall-into-travel">
          {hotelNames?.map((hotelName) => (
            <HotelInfo key={hotelName._id} hotelName={hotelName}></HotelInfo>
          ))}
        </div>
      </section> */}

      {/* ======================== extra-section =======================*/}

      {/* <section className="extra-section container">
        <div className="mt-5 pt-5 mb-4 fall-into-travel-header">
          <h3 className="fw-bold text-dark  mt-5 text-md-center text-lg-start ">
            Fall into travel
          </h3>
          <p className="text-dark-emphasis text-md-center text-lg-start  ">
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got the travel tools to get you to your
            destination.
          </p>
        </div>
        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 class="card-title">Backpacking Sri Lanka</h5>
                  <h3 className="text-white text-end">$275</h3>
                </div>
                <p class="card-text">
                  Traveling is a unique experience as it's the best way to
                  unplug from the pushes and pulls of daily life. It helps us to
                  forget about our problems, frustrations, and fears at home.
                  During our journey, we experience life in different ways. We
                  explore new places, cultures, cuisines, traditions, and ways
                  of living.
                </p>
                <Link to="/" class="btn btn-light">
                  Book Hotels
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div className="extra-img">
              <div>
                <img
                  src="https://i.ibb.co/VBthY6H/Rectangle-3-3.png"
                  className="img"
                  alt=""
                  style={{ width: "260px", height: "165px" }}
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/4dKN9dN/Rectangle-3-2.png"
                  alt=""
                  style={{ width: "260px", height: "165px" }}
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/wK1kzX6/Rectangle-3-1.png"
                  alt=""
                  style={{ width: "260px", height: "165px" }}
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/wh24VB5/Rectangle-3.png"
                  alt=""
                  style={{ width: "260px", height: "165px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        {/* <UserReviews></UserReviews> */}
        {/* <AddReviews></AddReviews> */}
      </section>
    </section>
  );
};

export default FindHotel;
