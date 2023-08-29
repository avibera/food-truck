import React, { useState } from "react";
import "../style/Carousel.scss";
import Card from "./Card";
import grilledTomatoes from "../Assets/grilledTomatoes.png";
import snacks from "../Assets/snacks.png";
import workout from "../Assets/workout.png";
import broccoli from "../Assets/broccoli.png";
import crunchwrap from "../Assets/crunchwrap.png";
import grilled from "../Assets/grilled.png";

const cardData = [
  {
    title: "Grilled Tomatoes at Home",
    content:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: grilledTomatoes,
  },
  {
    title: "Snacks for Travel",
    content:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: snacks,
  },
  {
    title: "Post-workout Recipes",
    content:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: workout,
  },
  {
    title: "How To Grill Corn",
    content:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: grilled,
  },
  {
    title: "Crunchwrap Supreme",
    content:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: crunchwrap,
  },
  {
    title: "Broccoli Cheese Soup",
    content:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: broccoli,
  },
  // ... other card objects ...
];

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const onNextClick = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage >= Math.ceil(cardData.length / 3) ? 0 : nextPage);
  };

  const onPrevClick = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(
      prevPage < 0 ? Math.ceil(cardData.length / 3) - 1 : prevPage
    );
  };

  return (
    <div className="carousel-container">
      <p className="head-text">Latest Articles</p>
      <div className="carousel">
        <div className="card-container">
          {cardData
            .slice(currentPage * 3, currentPage * 3 + 3)
            .map((card, index) => (
              <Card key={index} cardData={card} />
            ))}
        </div>
        <div className="carousel-buttons">
          <button className="prev-button" onClick={onPrevClick}>
            Previous
          </button>
          <button className="next-button" onClick={onNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
