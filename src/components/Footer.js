import React from "react";
import { Row, Col } from "reactstrap";
import "../style/Footer.scss";
import Logo from "../Assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col className="footer-col-1" lg={3} md={3} sm={12}>
          <img className="footer-image" src={Logo} />
        </Col>
        <Col className="footer-col-1" lg={3} md={3} sm={12}>
          <p className="footer-headings">Contact Us</p>
          <div className="footer-description">
            <p>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434 example2020@gmail.com (904) 443-0343
            </p>
            <p>example2020@gmail.com</p>
          </div>
        </Col>
        <Col className="footer-col" lg={3} md={3} sm={12}>
          <p className="footer-headings">More</p>
          <div className="footer-description">
            <p>About Us</p>
            <p>Products</p>
            <p>Career</p>
            <p>Contact Us</p>
          </div>
        </Col>
        <Col className="footer-col-1" lg={3} md={3} sm={12}>
          <p className="footer-headings">Social Links</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
