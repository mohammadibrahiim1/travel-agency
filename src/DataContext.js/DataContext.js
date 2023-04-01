import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";

export const ApiContext = createContext();

const DataContext = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [tourGuide, setTourGuide] = useState([]);
  const [packages, setPackages] = useState([]);
  const [bookInfo, setBookInfo] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [favouriteHotel, setFavouriteHotel] = useState([]);
  const [favouriteFlight, setFavouriteFlight] = useState([]);
  const [allUsers,setAllUsers] = useState([]);
  const {user}= useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/tourGuide")
      .then((res) => res.json())
      .then((data) => {
        setTourGuide(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings/v2?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBookInfo(data);
      });
  }, [user]);

  useEffect(() => {
    fetch("http://localhost:5000/favourites")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFavourites(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/favouritesHotel")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFavouriteHotel(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/favouritesFlight")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFavouriteFlight(data);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllUsers(data);
      });
  }, []);

  const apiData = {
    places,
    reviews,
    tourGuide,
    packages,
    bookInfo,
    favourites,
    favouriteHotel,
    favouriteFlight,
    allUsers,
  };

  return (
    <div>
      <ApiContext.Provider value={apiData}> {children} </ApiContext.Provider>
    </div>
  );
};

export default DataContext;
