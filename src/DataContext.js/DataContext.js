import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const DataContext = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [tourGuide, setTourGuide] = useState([]);
  const [packages, setPackages] = useState([]);
  const [flights, setFlights] = useState([]);

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
    fetch('http://localhost:5000/api/flights')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setFlights(data);
      }
      )
  }, []);



  const apiData = {
    places,
    reviews,
    tourGuide,
    packages,
    flights,

  };

  return (
    <div>
      <ApiContext.Provider value={apiData}> {children} </ApiContext.Provider>
    </div>
  );
};

export default DataContext;
