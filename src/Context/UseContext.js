import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
// const auth = getAuth

const UseContext = ({ children }) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        console.log(data)});
  }, []);

  const info = {
    places,
  };

  return (
    <div>
      <AuthContext.Provider value={info}> {children} </AuthContext.Provider>
    </div>
  );
};

export default UseContext;
