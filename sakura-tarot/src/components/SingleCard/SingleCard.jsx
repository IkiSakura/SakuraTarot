import React from 'react'

    
    export default function SingleCard({flipped, imgElement,text}) {

      return (
        <div >
          
          <div className = "sngl-card">
          {flipped&&imgElement}
          {text}
          
          </div>
        
    
        </div>
      )
    }
    

