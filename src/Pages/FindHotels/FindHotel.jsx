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
import { FaSearch } from "react-icons/fa";
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

      {/* =========== search input ========== */}

      <section className="hotel-search-section-container">
        <form className="hotel-search-section container m-auto">
          {/* <div className="col-12 d-flex align-items-center justify-content-evenly"> */}
          <div className="input-container">
            <input
              type="text"
              id="form3Example1m"
              className="input"
              placeholder="Where are you going?"
              // ref={cityRef}
            />

            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.9999 11.1917C10.3413 11.1917 10.6794 11.1244 10.9949 10.9938C11.3103 10.8631 11.5969 10.6716 11.8384 10.4302C12.0798 10.1887 12.2713 9.90212 12.402 9.58668C12.5327 9.27123 12.5999 8.93314 12.5999 8.5917C12.5999 8.25026 12.5327 7.91217 12.402 7.59672C12.2713 7.28128 12.0798 6.99465 11.8384 6.75322C11.5969 6.51179 11.3103 6.32027 10.9949 6.18961C10.6794 6.05895 10.3413 5.9917 9.9999 5.9917C9.31034 5.9917 8.64902 6.26563 8.16142 6.75322C7.67383 7.24082 7.3999 7.90214 7.3999 8.5917C7.3999 9.28126 7.67383 9.94258 8.16142 10.4302C8.64902 10.9178 9.31034 11.1917 9.9999 11.1917V11.1917Z"
                  stroke="#828282"
                  stroke-width="1.5"
                />
                <path
                  d="M3.01675 7.07508C4.65842 -0.141583 15.3501 -0.13325 16.9834 7.08342C17.9417 11.3168 15.3084 14.9001 13.0001 17.1168C12.1935 17.8947 11.1165 18.3294 9.99592 18.3294C8.87529 18.3294 7.79835 17.8947 6.99175 17.1168C4.69175 14.9001 2.05842 11.3084 3.01675 7.07508V7.07508Z"
                  stroke="#828282"
                  stroke-width="1.5"
                />
              </svg>
            </div>
          </div>

          <div className="input-container">
            <input
              type="date"
              id="date"
              className="input"
              placeholder="Check in date"
              name="date"
              required
            />
            {/* <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_143_88)">
                  <path
                    d="M15.1166 18.0168C14.3833 18.2335 13.5166 18.3335 12.5 18.3335H7.49997C6.4833 18.3335 5.61663 18.2335 4.8833 18.0168C5.06663 15.8502 7.29163 14.1418 9.99997 14.1418C12.7083 14.1418 14.9333 15.8502 15.1166 18.0168V18.0168Z"
                    stroke="#828282"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.4998 1.66675H7.49984C3.33317 1.66675 1.6665 3.33341 1.6665 7.50008V12.5001C1.6665 15.6501 2.6165 17.3751 4.88317 18.0167C5.0665 15.8501 7.2915 14.1417 9.99984 14.1417C12.7082 14.1417 14.9332 15.8501 15.1165 18.0167C17.3832 17.3751 18.3332 15.6501 18.3332 12.5001V7.50008C18.3332 3.33341 16.6665 1.66675 12.4998 1.66675ZM9.99984 11.8084C8.34984 11.8084 7.0165 10.4667 7.0165 8.81675C7.0165 7.16675 8.34984 5.83341 9.99984 5.83341C11.6498 5.83341 12.9832 7.16675 12.9832 8.81675C12.9832 10.4667 11.6498 11.8084 9.99984 11.8084Z"
                    stroke="#828282"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.9833 8.81683C12.9833 10.4668 11.6499 11.8085 9.99993 11.8085C8.34993 11.8085 7.0166 10.4668 7.0166 8.81683C7.0166 7.16683 8.34993 5.8335 9.99993 5.8335C11.6499 5.8335 12.9833 7.16683 12.9833 8.81683Z"
                    stroke="#828282"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_143_88">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div> */}
          </div>

          <div className="input-container">
            <input
              type="date"
              id="date"
              className="input"
              placeholder="Check out date"
              name="date"
              required
            />
            {/* <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.6665 1.66675V4.16675"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3335 1.66675V4.16675"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.9165 7.5752H17.0832"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 7.08341V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08341C2.5 4.58341 3.75 2.91675 6.66667 2.91675H13.3333C16.25 2.91675 17.5 4.58341 17.5 7.08341Z"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.0791 11.4167H13.0866"
                  stroke="#828282"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.0791 13.9167H13.0866"
                  stroke="#828282"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99561 11.4167H10.0039"
                  stroke="#828282"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99561 13.9167H10.0039"
                  stroke="#828282"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.91162 11.4167H6.91995"
                  stroke="#828282"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.91162 13.9167H6.91995"
                  stroke="#828282"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div> */}
          </div>

          <div className="input-container">
            <input
              type="number"
              id="form3Example1m"
              className="input"
              placeholder="Guests"
              // ref={roomRef}
            />

            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_143_88)">
                  <path
                    d="M15.1166 18.0168C14.3833 18.2335 13.5166 18.3335 12.5 18.3335H7.49997C6.4833 18.3335 5.61663 18.2335 4.8833 18.0168C5.06663 15.8502 7.29163 14.1418 9.99997 14.1418C12.7083 14.1418 14.9333 15.8502 15.1166 18.0168V18.0168Z"
                    stroke="#828282"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.4998 1.66675H7.49984C3.33317 1.66675 1.6665 3.33341 1.6665 7.50008V12.5001C1.6665 15.6501 2.6165 17.3751 4.88317 18.0167C5.0665 15.8501 7.2915 14.1417 9.99984 14.1417C12.7082 14.1417 14.9332 15.8501 15.1165 18.0167C17.3832 17.3751 18.3332 15.6501 18.3332 12.5001V7.50008C18.3332 3.33341 16.6665 1.66675 12.4998 1.66675ZM9.99984 11.8084C8.34984 11.8084 7.0165 10.4667 7.0165 8.81675C7.0165 7.16675 8.34984 5.83341 9.99984 5.83341C11.6498 5.83341 12.9832 7.16675 12.9832 8.81675C12.9832 10.4667 11.6498 11.8084 9.99984 11.8084Z"
                    stroke="#828282"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.9833 8.81683C12.9833 10.4668 11.6499 11.8085 9.99993 11.8085C8.34993 11.8085 7.0166 10.4668 7.0166 8.81683C7.0166 7.16683 8.34993 5.8335 9.99993 5.8335C11.6499 5.8335 12.9833 7.16683 12.9833 8.81683Z"
                    stroke="#828282"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_143_88">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <button className="search-btn">Search</button>
        </form>
      </section>

      {/* =========== search input ========== */}

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
