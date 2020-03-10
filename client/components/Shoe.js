import React from 'react'

export const Shoe = props => {
  return (
    <div className="shoeFlex">
      <img src={props.shoe.imageUrl} />
      <p>{props.shoe.model}</p>
      <p>
        <b>${props.shoe.price}</b>
      </p>
    </div>
  )
}
