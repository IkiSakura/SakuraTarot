import React from "react";
import './CardsContainer.css'
import { useState } from "react";

let [url, setURL] = useState ("https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg")

function CardsContainer() {

  {/*
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const arrayCards = [];
  
  function handleClick(){
  
    let cardNumber = getRandomInt(55);
    let newUrl = cardsDB[cardNumber].sakuraCard
    console.log(newUrl)
    
    if (url == "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"){
      setURL(newUrl)     
    } else { setURL("https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg")}
  
    if (arrayCards.length <= 3) {
      arrayCards.push(newUrl)
      console.log(arrayCards)
    }
  }
  */}
  return (
<div>
<div className = "button-container" onClick = {handleClick}>
    <button>Ver Cartas</button> {/*como le meto param a hanleclick¿?*/}
    </div>
<div className="card-container">

      <div id="pastCard" className="past">
        <img  src={url} alt="carta sakura reverso en color rosa" />
      </div>

      <div id="presentCard" className="present">
      <img src={url} alt="carta sakura reverso en color rosa" />
      </div>

      <div id="FutureCard" className="future" >
      <img src={url} alt="carta sakura reverso en color rosa" />
      </div>
    </div>
   
    </div>
  )
}

export default CardsContainer


