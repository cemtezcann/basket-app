import "./cardImage.css";
import React from "react";

function CardImage({image}) {
  return (
    <div className="card-image">
      <img src= {image} alt="" />
    </div>
  );
}

export default CardImage;
