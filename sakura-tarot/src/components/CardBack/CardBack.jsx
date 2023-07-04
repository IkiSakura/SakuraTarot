import React from 'react'
import './CardBack.css';




const CardBack = ({handleClick}) => {

  return (
   
        <div className = "deck-card-container">
            <img  onClick ={handleClick} className ="card-back" src = "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg" alt = "Reverso carta de tarot sakura" />
            <img className ="card-back" src = "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg" alt = "Reverso carta de tarot sakura" />
            <img className ="card-back" src = "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg" alt = "Reverso carta de tarot sakura" />
            <img className ="card-back" src = "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg" alt = "Reverso carta de tarot sakura" />
            <img className ="card-back" src = "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg" alt = "Reverso carta de tarot sakura" />
            <img className ="card-back" src = "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg" alt = "Reverso carta de tarot sakura" />
            </div>
 
    
  )
}

export default CardBack;
