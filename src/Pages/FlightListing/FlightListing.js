import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { FaSearch } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Filters from "../../Components/Filters/Filters";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
// import AllFlight from "../AllFlights/AllFlights";
import FindFlights from "../FindFlights/FindFlights";
// import { useLocation } from 'react-router-dom';

const FlightListing = () => {
  // const location = useLocation();
  // const [hotelNames, setHotelNames] = useState([]);
  // const [category, setCategory] = useState(null);

  // useEffect(() => {
  //     if (location?.search) {
  //         axios.get(`http://localhost:5000/category${location?.search}`)
  //             .then(res => {
  //                 if (res.data) {
  //                   setHotelNames(res.data)
  //                 }
  //             })
  //             .catch(error => {
  //                 console.log(error)
  //             });
  //     }
  // }, [location, hotelNames]);
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <Row>
          {" "}
          <Col lg="12">
            <FindFlights></FindFlights>
          </Col>
          <Col lg="4">
            <Filters></Filters>
          </Col>
          <Col lg="8">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>

      {/* <section className="container flying__input">
        <div className="col-12 d-flex align-items-center justify-content-evenly">
          <div className="input-container">
            <input
              type="text"
              id="form3Example1m"
              className="enter__destination"
              placeholder=" "
            />
          </div>
          <div>
            <input
              type="text"
              id="form3Example1m"
              className="input__box"
              placeholder=" "
            />
          </div>
          <div>
            <input
              type="text"
              id="form3Example1m"
              className="input__box"
              placeholder=" "
            />
          </div>
          <div>
            <input
              type="text"
              id="form3Example1m"
              className="input__box"
              placeholder=" "
            />
          </div>
          <FaSearch className="search"></FaSearch>
        </div>
      </section> */}
      {/* <Outlet></Outlet> */}

      <Footer></Footer>
    </div>
  );
};

export default FlightListing;
