import React from "react";
import { Button } from "reactstrap";
import "../style/Card.scss";

const Card = (cardData) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          src={cardData?.cardData?.imageUrl}
          alt="Card"
          className="card-image"
        />
      </div>
      <div className="card-content">
        <h5 className="card-title">{cardData?.cardData?.title}</h5>
        <p className="card-text">{cardData?.cardData?.content}</p>
        <Button className="read-more-button">Read More</Button>
      </div>
    </div>
  );
};

export default Card;
