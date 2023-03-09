import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiCustomerService2Fill } from "react-icons/ri";
import MasonaryImageGallery from "../../Components/MasonaryImageGallery/MasonaryImageGallery";
// import MasonaryImagesGallery from "../MasonaryImagesGallery/MasonaryImagesGallery";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <section className="mt-5 pt-5">
        <div>
          <div className="about-us-title">
            <h4 className="title">Why Choose Us?</h4>
            <p className="sub-title text-center">
              These popular destinations have a lot to offer
            </p>
          </div>

          <div className="service-container container mt-5">
            <div className="service">
              <div>
                <RiCustomerService2Fill className="service-icon" />
              </div>
              <div>
                <h4 className="service-title">customer service 24h</h4>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </p>
              </div>
            </div>
            <div className="service">
              <div>
                <RiCustomerService2Fill className="service-icon" />
              </div>
              <div>
                <h4 className="service-title">customer service 24h</h4>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </p>
              </div>
            </div>
            <div className="service">
              <div>
                <RiCustomerService2Fill className="service-icon" />
              </div>
              <div>
                <h4 className="service-title">customer service 24h</h4>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about-container">
          <div className="text-center mt-5 pt-5">
            <h4>About Us</h4>
          </div>
          <div className="about-info container">
            <p className="about">
              <h4>About travel agency</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dictum et in feugiat. Platea in diam, est congue. Posuere sapien
              morbi augue ultrices. Et facilisi orci sollicitudin placerat lacus
              lacus nibh. Egestas semper massa viverra massa proin in morbi
              placerat. Pharetra nec, est non integer nisi, ut faucibus. Non, in
              nam sollicitudin vitae volutpat ac molestie. Turpis pellentesque
              sit pellentesque id cras lobortis tortor, blandit.
              <br />
              <br />
              Id ac non, semper turpis maecenas. Convallis tempor fringilla
              quisque arcu, dictum. Vitae cursus vel netus tincidunt vitae.
              Malesuada velit, at mattis adipiscing quisque tristique id magna.
              Blandit porta sit nam magna sit. Turpis vestibulum facilisis
              placerat habitant gravida eget. Lacus pretium, arcu non adipiscing
              sed faucibus semper eget tempor.
            </p>
            <div className="">
              <img
                className="border rounded"
                src="https://i.ibb.co/qYKP0Yy/Rectangle-25.png"
                alt=""
                style={{ width: "280px", height: "394px" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 pt-5">
        <Container>
          <Row>
            <Col lg="12">
              {/* <Subtitle subtitle={'Gallery'}></Subtitle> */}
              <h2 className="gallery__title text-center mt-5 mb-4">Gallery</h2>
            </Col>
            <Col lg="12">
              <MasonaryImageGallery></MasonaryImageGallery>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-5 pt-5">
        {/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/rpT76y8/healthicons-city-outline.png" alt="healthicons-city-outline" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/tY7kxJQ/gis-map-route.png" alt="gis-map-route" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/P6bRhFN/Group-115.png" alt="Group-115" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/c6XBXZT/Vector.png" alt="Vector" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/vvxccV2/island.png" alt="island" border="0"></a> */}

        <div className="container icon-container">
          <div>
            <img
              src="https://i.ibb.co/vvxccV2/island.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p className="icon-text">ISLAND TOUR</p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/rpT76y8/healthicons-city-outline.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p className="icon-text">CITY TOUR</p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/tY7kxJQ/gis-map-route.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p className="icon-text">EXPLORE WORLD</p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/c6XBXZT/Vector.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p className="icon-text">TRAVEL</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
