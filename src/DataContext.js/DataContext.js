import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const DataContext = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [tourGuide, setTourGuide] = useState([]);

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
    fetch("http://localhost:5000/tourguide")
      .then((res) => res.json())
      .then((data) => {
        setTourGuide(data);
        console.log(data);
      });
  }, []);

  const apiData = {
    places,
    reviews,
    tourGuide
  };

  return (
    <div>
      <ApiContext.Provider value={apiData}> {children} </ApiContext.Provider>
    </div>
  );
};

export default DataContext;
