import React, { useContext } from "react";
import DisplayPackage from "../DisplayPackage/DisplayPackage";
import { ApiContext } from "../../DataContext.js/DataContext";
import "./Packages.css";

const Packages = () => {
  const { packages } = useContext(ApiContext);
  console.log(packages);
  return (
    <div>
      <section>
        <div>
          {packages.map((pk) => (
            <DisplayPackage pk={pk}></DisplayPackage>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Packages;
