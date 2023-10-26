import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./HotelListing.css";
// import AllHotelListing from "./AllHotelListing";
// import SearchBar from '../SearchBar/SearchBar';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
import AllHotelListing from "../AllHotelListing/AllHotelListing";
// import { Col } from 'react-bootstrap';
const HotelListing = () => {
  const location = useLocation();
  const [hotelNames, setHotelNames] = useState([]);
  console.log(hotelNames);
  const [category, setCategory] = useState([]);
  const [brfFilter, setBrfFilter] = useState(false);
  const [frIntFilter, setFrIntFilter] = useState(false);
  const [freeAirFilter, setFreeAirFilter] = useState(false);
  const [airConFilter, setAirConFilter] = useState(false);
  const [fitness, setFitness] = useState(false);
  const [pool, setPool] = useState(false);

  // const location = useLocation();

  // const [data] = useState(location.state);

  // console.log(data);

  // const navigate = useNavigate();

  const priceRef = useRef(0);

  const searchPrice = async () => {
    const price = priceRef.current.value;

    // console.log(price);

    if (price === "") {
      return alert("All fields are required!");
    }

    const res = await fetch(
      `http://localhost:5000/category/search/getHotelBySearch?price=${price}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();
    // console.log(result.data);
    setHotelNames(result.data);
  };

  const [visible, setVisible] = useState(4);

  const showMore = () => {
    setVisible((preValue) => preValue + 2);
  };

  useEffect(() => {
    fetch(
      `http://localhost:5000/category/filter/v2?brfFilter=${
        brfFilter || ""
      }&frIntFilter=${frIntFilter || ""}&freeAirFilter=${
        freeAirFilter || ""
      }&airConFilter=${airConFilter || ""}&fitness=${fitness || ""}&pool=${
        pool || ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setHotelNames(data);
        // console.log(data);
      });
  }, [brfFilter, frIntFilter, freeAirFilter, airConFilter, fitness, pool]);

  // const { country,title,city,price,avgRating,cafe,photo  } = hotelName;

  useEffect(() => {
    if (location?.search) {
      axios
        .get(`http://localhost:5000/category${location?.search}`)
        .then((res) => {
          if (res.data) {
            setHotelNames(res.data);
          }
          setCategory(res.data);
        })
        .catch((error) => {
          // console.log(error);
        });
    }
  }, [location]);

  const cityRef = useRef("");
  const roomRef = useRef(0);

  const searchHandler = async () => {
    const city = cityRef.current.value;
    const room = roomRef.current.value;

    // console.log(city, room);

    if (city === "" || room === "") {
      // return alert('All fields are required!')
    }

    const res = await fetch(
      `http://localhost:5000/category/search/getHotelBySearch?city=${city}&room=${room}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();
    // console.log(result);
    setHotelNames(result.data);

    // navigate(`/hotel-listing/search?city=${city}&room=${room}`,{state: result.data} );
  };

  // const [startDate, setStarDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  // const handleSelect = (date) => {
  //   setStarDate(date.selection.startDate);
  //   setEndDate(date.selection.endDate);
  // };

  // const selectionRange = {
  //   startDate: startDate,
  //   endDate: endDate,
  //   key: "selection",
  // };

  return (
    <>
      <section className="allHotels-header-section ">
        <div>
          <h2>Let's go places together</h2>
          <p>
            Discover the latest offers and news and start planning your next
            trip with us.
          </p>
        </div>
      </section>

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
      {/* 
      <section className="flight-search-section-container container pt-4">
        <form className="flight-search-section container m-auto">
          <div className="col-12 d-flex align-items-center justify-content-evenly">
          <div className="input-container">
            <input
              type="text"
              id="form3Example1m"
              className="input"
              placeholder="Enter Destination"
              ref={cityRef}
            />
          </div>

          <div className="input-container">
            <input
              type="date"
              id="date"
              className="input"
              placeholder=" "
              name="date"
              required
            />
            <label className="label">select date</label>
          </div>

          <div className="input-container">
            <input
              type="date"
              id="date"
              className="input"
              placeholder=" "
              name="date"
              required
            />
            <label className="label">select date</label>
          </div>

          <div className="input-container">
            <input
              type="number"
              id="form3Example1m"
              className="input"
              placeholder="Rooms"
              ref={roomRef}
            />
          </div>
          <FaSearch
            className="search"
            type="submit"
            onClick={searchHandler}
          ></FaSearch>
          </div>
        </form>
      </section> */}

      <section className="all-hotels mt-4">
        <div className="row">
          <div className="col-12  col-md-12 col-sm-12 col-lg-3">
            <div className="filter_search">
              <h5 className="filter">Search by property name</h5>

              <form className="mt-2 mb-2 d-flex justify-content-between align-content-center">
                <input
                  type="number"
                  id="form3Example1m"
                  className="price__box "
                  placeholder="price"
                  ref={priceRef}
                />{" "}
                <div
                  className="btn btn-light "
                  type="submit"
                  onClick={searchPrice}
                >
                  search
                </div>
              </form>
            </div>

            <div className="filter_container">
              <h5 className="filter">Freebies</h5>

              <div className="checkbox_container">
                <div class="form-check d-flex justify-content-between align-content-center">
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={brfFilter}
                      // value="International"
                      onClick={(e) => setBrfFilter(e.target.checked)}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Free breakfast
                    </label>
                  </div>
                  <div>200</div>
                </div>

                <div class="form-check d-flex justify-content-between align-content-center">
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={frIntFilter}
                      // value="International"
                      onClick={(e) => setFrIntFilter(e.target.checked)}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Free internet
                    </label>
                  </div>
                  <div>12</div>
                </div>

                <div class="form-check d-flex justify-content-between align-content-center">
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={freeAirFilter}
                      // value="International"
                      onClick={(e) => setFreeAirFilter(e.target.checked)}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Free airport shuttle
                    </label>
                  </div>
                  <div>17</div>
                </div>
              </div>
            </div>

            <div className="filter_container mt-4">
              <h5 className="filter">Popular Filters</h5>

              <div className="checkbox_container">
                <div class="form-check d-flex justify-content-between align-content-center">
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={brfFilter}
                      // value="International"
                      onClick={(e) => setBrfFilter(e.target.checked)}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Free Cancellaion
                    </label>
                  </div>

                  <div>26</div>
                </div>
                <div class="form-check d-flex justify-content-between align-content-center">
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={brfFilter}
                      // value="International"
                      onClick={(e) => setBrfFilter(e.target.checked)}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Spa
                    </label>
                  </div>

                  <div>57</div>
                </div>
                <div class="form-check d-flex justify-content-between align-content-center">
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={brfFilter}
                      // value="International"
                      onClick={(e) => setBrfFilter(e.target.checked)}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Beach front
                    </label>
                  </div>

                  <div>76</div>
                </div>
                <div class="form-check d-flex justify-content-between align-content-center">
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={brfFilter}
                      // value="International"
                      onClick={(e) => setBrfFilter(e.target.checked)}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Hot tub/jacuzzi
                    </label>
                  </div>

                  <div>66</div>
                </div>
                <div class="form-check d-flex justify-content-between align-content-center">
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={brfFilter}
                      // value="International"
                      onClick={(e) => setBrfFilter(e.target.checked)}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Book without credit card
                    </label>
                  </div>

                  <div>46</div>
                </div>
                <div class="form-check d-flex justify-content-between align-content-center">
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={brfFilter}
                      // value="International"
                      onClick={(e) => setBrfFilter(e.target.checked)}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      No prepayment
                    </label>
                  </div>

                  <div>21</div>
                </div>
              </div>
            </div>

            <div className="filter_container mt-4">
              <h5 className="filter">Activities</h5>

              <div className="checkbox_container">
                <div class="form-check d-flex justify-content-between align-content-center">
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={brfFilter}
                      // value="International"
                      onClick={(e) => setBrfFilter(e.target.checked)}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Fishing
                    </label>
                  </div>

                  <div>36</div>
                </div>
                <div class="form-check d-flex justify-content-between align-content-center">
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={brfFilter}
                      // value="International"
                      onClick={(e) => setBrfFilter(e.target.checked)}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Hiking
                    </label>
                  </div>

                  <div>33</div>
                </div>
                <div class="form-check d-flex justify-content-between align-content-center">
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={brfFilter}
                      // value="International"
                      onClick={(e) => setBrfFilter(e.target.checked)}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Beach
                    </label>
                  </div>

                  <div>44</div>
                </div>
                <div class="form-check d-flex justify-content-between align-content-center">
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={brfFilter}
                      // value="International"
                      onClick={(e) => setBrfFilter(e.target.checked)}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Cycling
                    </label>
                  </div>

                  <div>66</div>
                </div>
                <div class="form-check d-flex justify-content-between align-content-center">
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={brfFilter}
                      // value="International"
                      onClick={(e) => setBrfFilter(e.target.checked)}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Sauna
                    </label>
                  </div>

                  <div>09</div>
                </div>
                <div class="form-check d-flex justify-content-between align-content-center">
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked={brfFilter}
                      // value="International"
                      onClick={(e) => setBrfFilter(e.target.checked)}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Night lights
                    </label>
                  </div>

                  <div>26</div>
                </div>
              </div>
            </div>

            {/* <h5 className="filter">Amenities</h5>

            <div>
              <input
                type="checkbox"
                name="airConditioned"
                className="form-check-input"
                id=""
                checked={airConFilter}
                // value="International"
                onClick={(e) => setAirConFilter(e.target.checked)}
              />
              <span className="input-filter-text ms-2">Air-conditioned</span>{" "}
              <br />
            </div>

            <div>
              <input
                type="checkbox"
                name="fitness"
                className="form-check-input"
                id=""
                checked={fitness}
                // value="International"
                onClick={(e) => setFitness(e.target.checked)}
              />
              <span className="input-filter-text ms-2">Fitness</span> <br />
            </div>

            <div>
              <input
                type="checkbox"
                name="pool"
                className="form-check-input"
                id=""
                checked={pool}
                // value="International"
                onClick={(e) => setPool(e.target.checked)}
              />
              <span className="input-filter-text ms-2">Pool</span> <br />
            </div> */}
          </div>

          {/* <div
            class=" d-lg-flex justify-content-evenly align-items-center mt-5  d-md-none d-lg-block d-sm-none d-block col-lg-1"
            style={{ height: "auto" }}
          >
            <div class="vr mt-5"></div>
          </div> */}

          <div className="col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="d-flex mt-4">
              <p className="showing">
                Showing {hotelNames.length} of{" "}
                <span className="all__places">50 places</span>{" "}
              </p>
            </div>

            <div class="mb-3 mt-4">
              <div class="row g-0">
                <div class="mb-3 mt-4">
                  <div class="row g-0">
                    {hotelNames.length === 0 ? (
                      <h4 className="text-center">No hotel found</h4>
                    ) : (
                      hotelNames
                        .slice(0, visible)
                        .map((hotelName) => (
                          <AllHotelListing
                            key={hotelName._id}
                            hotelName={hotelName}
                            category={category}
                          ></AllHotelListing>
                        ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4" onClick={showMore}>
              <button className="btn btn-light">show more results</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelListing;
