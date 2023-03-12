import React, { useContext } from "react";
import { ApiContext } from "../../DataContext.js/DataContext";
import DisplayPackage from "../DisplayPackage/DisplayPackage";
import "./Packages.css";

const Packages = () => {
  const { packages } = useContext(ApiContext);
  console.log(packages);
  return (
    <div>
      <section>
        <div>
          {packages.map((pk) => (
            <DisplayPackage pk={pk} key={pk._id}></DisplayPackage>
          ))}
        </div>
        <div className="text-center">
            <button className="btn btn-outline-dark">see more</button>
        </div>
      </section>
    </div>
  );
};

export default Packages;
