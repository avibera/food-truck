import React from "react";
import { Row, Col, Button } from "reactstrap";
import classes from "../style/Header.scss";
import logo from "../Assets/logo.png";
import VectorOne from "../Assets/Vector-1.png";
import VectoreTwo from "../Assets/Vector-2.png";
import "../style/Header.scss";

const Headder = () => {
  return (
    <header className="header">
      <div>
        <Row>
          <Col lg={6} md={6} sm={12} className="order-md-2">
            <div className="vactor-Container">
              <img className="vactor-One" src={VectorOne} alt="Background" />
              <img
                className="vactor-Two"
                src={VectoreTwo}
                alt="Top Picture"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  marginTop: '-10px'
                }}
              />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className="order-md-1">
            <div className="vactor-Container-1">
              <div className="vactor-Container-1-logo">
                <img className="img" src={logo} />
              </div>
              <div className="vactor-Container-1-title">
                <p>
                  Discover The <span className="span">Best</span> Food and
                  Drinks
                </p>
              </div>
              <div className="vactor-Container-1-description">
                <p>
                  Naturally made Healthcare Products for the better care &
                  support of your body.
                </p>
              </div>
              <Button className="vactor-Container-1-button">
                Explore Now!
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Headder;
