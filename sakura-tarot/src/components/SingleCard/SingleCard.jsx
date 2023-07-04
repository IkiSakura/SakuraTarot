import React from 'react'

export default function SingleCard(props) {
  return (
    <div >
      <div className = "sngl-card-bttn">
      {props.imgElement}
      {props.text}
      {props.flipped} 
      </div>

    </div>
  )
}
