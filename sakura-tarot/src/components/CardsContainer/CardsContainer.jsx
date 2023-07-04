import React from "react";
import "./CardsContainer.css";

const CardContainer = (reverse) => {
 
  return (
    <div className="card-container">
     
      <div className= "past">
        <p>Past</p>        
      </div>
      <div className= "present">
        <p>Present</p>
      </div>
      <div className= "future">
        <p>Future</p>
        </div> 
    </div>
  );
};

export default CardContainer;
