import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

const PackageBookingInfo = (props) => {
    const [info, setInfo] = useState(null);
    useEffect( ()=> {
        const fetchData = async ()=> {
            const response = await fetch(`http://localhost:5000/bookingInfo/${props._id}`)
            const newData = await response.json();
            setInfo(newData);
        };
        fetchData();
    },[props._id]);
    console.log(info);

//   const info = useLoaderData();
//   console.log(info);
  return (
    <div>
      <section>
        <div class="card text-bg-success mb-3" style={{ "max-width": "18rem" }}>
          <div class="card-header"></div>
          <div class="card-body">
            <h5 class="card-title">Success card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageBookingInfo;
