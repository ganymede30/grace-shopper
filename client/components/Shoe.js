import React from 'react'

export const Shoe = props => {
  return (
    <div className="shoeFlex">
      <img src={props.shoe.imageUrl} />
      <p style={{textDecoration: 'none'}}>{props.shoe.model}</p>
      <p style={{textDecoration: 'none'}}>
        <b>${props.shoe.price}</b>
      </p>
    </div>
  )
}
