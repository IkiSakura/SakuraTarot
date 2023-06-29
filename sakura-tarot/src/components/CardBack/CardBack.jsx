import React from 'react'
import './CardBack.css';
import cardsDB from '../../service/cardsDB';
import { useState } from 'react';


function CardBack() {

let [url, setURL] = useState ("https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg")

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

  return (
        <div className = "deck-card-container" >
          <button onClick={handleClick} className='card-btn'>
            <img className ="img-btn" src = {url} alt = "Reverso carta de tarot sakura"/>
            </button>
            <button onClick={handleClick} className='card-btn'>
            <img className ="img-btn" src = {url} alt = "Reverso carta de tarot sakura"/>
            </button>
            <button onClick={handleClick} className='card-btn'>
            <img className ="img-btn" src = {url} alt = "Reverso carta de tarot sakura"/>
            </button>
            <button onClick={handleClick} className='card-btn'>
            <img className ="img-btn" src = {url} alt = "Reverso carta de tarot sakura"/>
            </button>
            <button onClick={handleClick} className='card-btn'>
            <img className ="img-btn" src = {url} alt = "Reverso carta de tarot sakura"/>
            </button>
            <button onClick={handleClick} className='card-btn'>
            <img className ="img-btn" src = {url} alt = "Reverso carta de tarot sakura"/>
            </button>
    
          </div>
  
  )
}

export default CardBack;
