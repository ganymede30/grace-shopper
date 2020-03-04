import React from 'react'

export const Shoe = props => {
  return (
    <div>
      <img src={props.shoe.imageUrl} width="75px" />
      <p style={{margin: 0, fontSize: '10px', color: 'black'}}>Name</p>
      <p style={{margin: 0, fontSize: '10px', color: 'black'}}>
        ${props.shoe.price}
      </p>
    </div>
  )
}
