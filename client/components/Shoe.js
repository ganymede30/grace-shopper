import React from 'react'

export const Shoe = props => {
  return (
    <div>
      <img src={props.shoe.imageUrl} />
      <p>Name</p>
      <p>${props.shoe.price}</p>
    </div>
  )
}
