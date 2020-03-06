import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Carousel} from './carousel'
import {Button} from '@material-ui/core'

export default class Hero extends Component {
  render() {
    return (
      <div>
        <div className="imgContainer">
          {/* <Carousel /> */}
          <img src="hero-.png" style={{width: '100%'}} />
          <Link to="/shoes" id="shopLink">
            <Button variant="contained">SHOP</Button>
          </Link>
        </div>
        <div className="featuredShoes">
          <p>FEATURED</p>
          <div style={{display: 'flex'}}>
            <div>
              <img src="shoe.png" style={{width: '10%'}} />
              <p style={{fontSize: '10px'}}>BRAND</p>
              <p style={{fontSize: '10px'}}>NAME</p>
              <p style={{fontSize: '10px'}}>PRICE</p>
            </div>
            <div>
              <img src="shoe.png" style={{width: '10%'}} />
              <p style={{fontSize: '10px'}}>BRAND</p>
              <p style={{fontSize: '10px'}}>NAME</p>
              <p style={{fontSize: '10px'}}>PRICE</p>
            </div>
            <div>
              <img src="shoe.png" style={{width: '10%'}} />
              <p style={{fontSize: '10px'}}>BRAND</p>
              <p style={{fontSize: '10px'}}>NAME</p>
              <p style={{fontSize: '10px'}}>PRICE</p>
            </div>
            <div>
              <img src="shoe.png" style={{width: '10%'}} />
              <p style={{fontSize: '10px'}}>BRAND</p>
              <p style={{fontSize: '10px'}}>NAME</p>
              <p style={{fontSize: '10px'}}>PRICE</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
