import React from "react";
import '../style/AboutUs.scss'
import { Row, Col, Button } from 'reactstrap'
import girl from '../Assets/girl.jpg'
const AboutUs = () => {
    return (
        <div className="about-container">
            <Row>
                <Col lg={6} md={6}>
                    <div>
                        <img
                            className="aboutImage"
                            src={girl}
                        />
                    </div>
                </Col>
                <Col lg={6} md={6}>
                    <div className="aboutUs">
                        <p className="aboutUs-p1">About Us</p>
                        <p className="aboutUs-p2">About Us
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
                            Read More</p>

                            <Button className="aboutUs-button">Read More</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AboutUs