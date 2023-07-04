import React from "react";
import "../SingleCard/SingleCard.css";

export default function SingleCard({ flipped, imgElement, text, clase }) {
  return (
   <div>

      <div className={clase}>
      {!flipped && text}
      {flipped && imgElement}
      </div>

      </div>
  );
}
