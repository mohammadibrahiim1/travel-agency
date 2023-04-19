import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../../DataContext.js/DataContext";

const FindCars = () => {
  const { carServices } = useContext(ApiContext);
  console.log(carServices);

  return <div>find a car</div>;
};

export default FindCars;
