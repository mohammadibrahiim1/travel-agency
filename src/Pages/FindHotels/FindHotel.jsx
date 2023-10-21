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

const popularHotels = [
  {
    id: 1,
    name: "Oculous Inn Stay",
    img: "https://i.ibb.co/ypsV6w6/Oculous-Inn-Stay.png",
    place: "320 properties",
  },
  {
    id: 2,
    name: "Fireside Dinners",
    img: "https://i.ibb.co/qJp9vRz/Fireside-Dinners.png",
    place: "480 properties",
  },
  {
    id: 3,
    name: "Recce Graham resort",
    img: "https://i.ibb.co/6YCVCYB/Recce-Graham-resort.png",
    place: "1278 properties",
  },
  {
    id: 4,
    name: "Lakeside Motel WareFront",
    img: "https://i.ibb.co/WzQZNhH/Lakeside-Motel-Warefront.png",
    place: "2246 properties",
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
    <section>
      <section className="hotels-header-section">
        <div>
          <h2>Enjoy Your Dream Vacation</h2>
          <p>
            Plan and book our perfect trip with expert advice, travel tips,
            destination information and inspiration from us
          </p>
        </div>
      </section>

      <div className="danger_container">
        <div className="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 12V18.6667"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.0001 28.5468H7.92007C3.29341 28.5468 1.36007 25.2401 3.60007 21.2001L7.76007 13.7068L11.6801 6.66679C14.0534 2.38679 17.9467 2.38679 20.3201 6.66679L24.2401 13.7201L28.4001 21.2135C30.6401 25.2535 28.6934 28.5601 24.0801 28.5601H16.0001V28.5468Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.9932 22.6667H16.0052"
              stroke="#292D32"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="danger-text">
          Check the latest COVID-19 restrictions before you travel.
          <a href="/" className="learn_more ms-1">
            Learn more
          </a>
        </div>
      </div>

      {/* ======================= Your dream vacation ==================== */}
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

      {/* =============================== get inspiration for your next trip ============================== */}

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

      {/* ==================== popular hotel section ======================= */}

      <section className="popular_hotel_section">
        <div className="fw-bold text-md-center text-lg-start fs-3 text-dark heading">
          Popular hotels
        </div>
        <div className="popular_hotel_section_card_container">
          {popularHotels?.map((hotel) => (
            <HotelInfo key={hotel.id} hotel={hotel}></HotelInfo>
          ))}
        </div>
      </section>

      {/* ======================== download out app section =======================*/}

      <div className="download-our-app">
        <div class="card">
          <div className="card_text_container">
            <div class="card_title fs-3">
              Download the mobile application for bonus coupons and travel codes
            </div>
            <div class="card-text btn btn-primary">
              <small>Download mobile app</small>
            </div>
          </div>

          <img
            src="https://i.ibb.co/W0NkKXs/Isolated-right-hand-with-smartphone-2.png"
            class="card-img"
            alt="..."
          />
        </div>
      </div>

      {/* explore world wide dream place */}

      <div className="explore_world_container">
        <div className="explore_world_heading">
          Explore the world with My Dream place
        </div>

        <a className="link" href="/">
          Discover new places and experiences
        </a>
      </div>

      {/* =============== extra section ============== */}

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
