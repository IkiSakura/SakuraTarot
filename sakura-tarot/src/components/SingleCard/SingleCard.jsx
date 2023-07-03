import React from 'react'

export default function SingleCard(props) {
  return (
    <div >
      <button className = "sngl-card-bttn">
      {props.imgElement}
      {props.text}
      {props.flipped} 
      </button>

    </div>
  )
}
