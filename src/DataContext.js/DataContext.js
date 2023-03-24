import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const DataContext = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [tourGuide, setTourGuide] = useState([]);
  const [packages, setPackages] = useState([]);
  const [bookInfo, setBookInfo] = useState([]);

  useEffect(() => {
    fetch("https://travel-zone-server-zeta.vercel.app/places")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://travel-zone-server-zeta.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://travel-zone-server-zeta.vercel.app/tourGuide")
      .then((res) => res.json())
      .then((data) => {
        setTourGuide(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://travel-zone-server-zeta.vercel.app/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://travel-zone-server-zeta.vercel.app/bookings")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBookInfo(data);
      });
  }, []);

  const apiData = {
    places,
    reviews,
    tourGuide,
    packages,
    bookInfo,
    // flights,
  };

  return (
    <div>
      <ApiContext.Provider value={apiData}> {children} </ApiContext.Provider>
    </div>
  );
};

export default DataContext;
