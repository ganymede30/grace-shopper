import React from 'react'
import {Link} from 'react-router-dom'
import {Carousel} from './carousel'
import {Button} from '@material-ui/core'
import {FeaturedShoes} from './featuredShoes'

export default function Hero() {
  return (
    <div>
      <div id="imgContainer">
        {/* <Carousel /> */}
        <img src="hero-.png" style={{width: '100%'}} />
        <Link to="/shoes" id="shopLink">
          <Button variant="contained">SHOP</Button>
        </Link>
      </div>
      <FeaturedShoes />
    </div>
  )
}
