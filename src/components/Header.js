import React from "react";
import { Row, Col, Button } from 'reactstrap'
import classes from "../style/Header.scss"
import logo from "../Assets/logo.png"
import VectorOne from "../Assets/Vector-1.png"
import VectoreTwo from "../Assets/Vector-2.png"
import '../style/Header.scss';

const Headder = () => {
    return (
        <header className="header">
            <div>
                <Row>
                    <Col lg={6}>
                        <div className="logo">
                            <img
                                className="img"
                                src={logo}
                            />
                        </div>
                        <div className="title-container">
                            <p>Discover The Best Food and Drinks</p>
                        </div>
                        <div className="description">
                            <p>Naturally made Healthcare Products for the better care & support of your body.</p>
                        </div>
                        <Button className="button">Explore Now!</Button>
                    </Col>
                    <Col lg={6} >
                        <div className="vactor-Container">
                            <img
                                className="vactor-One"
                                src={VectorOne}
                                alt="Background"
                            />
                            <img
                                src={VectoreTwo}
                                alt="Top Picture"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </header>
    )
}

export default Headder