import React, {Component} from 'react'

export default class Hero extends Component {
  render() {
    return (
      <div>
        <div className="imgContainer">
          <img src="shoe.png" />
          <p>SHOP</p>
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
