import React, { useContext, useEffect, useState } from "react";
import DisplayPackage from "../DisplayPackage/DisplayPackage";
// import { ApiContext } from "../../DataContext.js/DataContext";
import "./Packages.css";

const Packages = () => {
  // const { packages } = useContext(ApiContext);
  // console.log(packages);
  const [packages, setPackages] = useState([]);
  const [IntFilter, setIntFilter] = useState(false);
  const [dmsFilter, setdmsFilter] = useState(false);

  useEffect(() => {
    // let query = { IntFilter,dmsFilter};
    let Inter, domes
     if( IntFilter ){
  Inter = "true"
     }
     else if(!IntFilter){
        Inter = "false"
     }
     if( dmsFilter ){
  domes = "true"
     }
     else if(!dmsFilter){
        domes = "false"
     }

    fetch(`http://localhost:5000/packages?IntFilter=${Inter}&dmsFilter=${domes}`)
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        console.log(data);
      });
  }, [IntFilter, dmsFilter]);

  // const tourCategory = [
  //   {
  //     id: 1,
  //     name: "International",
  //   },
  //   {
  //     id: 2,
  //     name: "Domestic",
  //   },
  // ];

  const filter = (event) => {
    // event.preventDefault();
    // console.log(object);
    if (event.target.name === "international") {
      setIntFilter(event.target.checked);
    }

    if (event.target.name === "domestic") {
      setdmsFilter(event.target.checked);
    }

    // console.log(event.target.checked);
  };

  console.log(IntFilter, dmsFilter);

  return (
    <div>
      <section>
        <div className="text-center mb-5 mt-5">
          {/* {tourCategory.map((tg) => (
            <>
              <input
                type="checkbox"
                name="typeCheck"
                id=""
                value={tg.name}
                onClick={filter}
              />
              <span>{tg.name}</span> <br />
            </>
          ))} */}
          <div>
            <input
              type="checkbox"
              name="international"
              id=""
              checked={IntFilter}
              // value="International"
              onClick={() => setIntFilter(!IntFilter)}
            />
            <span>International</span> <br />
          </div>
          <div>
            <input
              type="checkbox"
              name="domestic"
              id=""
              checked={dmsFilter}
              // value="International"
              onClick={() => setdmsFilter(!dmsFilter)}
            />
            <span>Domestic</span> <br />
          </div>
        </div>

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
