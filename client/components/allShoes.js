import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getShoesThunk} from '../store/shoes'
import {addToCartThunk} from '../store/cart'

class Shoes extends Component {
  componentDidMount() {
    this.props.gotShoes()
  }
  render() {
    if (this.props.shoes.shoes.length) {
      return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {this.props.shoes.shoes.map(shoe => {
            return (
              <div key={shoe.id}>
                <Link to={`/shoes/${shoe.id}`}>
                  <div>
                    <img src={shoe.imageUrl} width="75px" />
                    <p style={{margin: 0, fontSize: '10px', color: 'black'}}>
                      Name
                    </p>
                    <p style={{margin: 0, fontSize: '10px', color: 'black'}}>
                      ${shoe.price}
                    </p>
                  </div>
                </Link>
                <button
                  type="submit"
                  onClick={() => this.props.addToCart(shoe)}
                >
                  Add to cart
                </button>
              </div>
            )
          })}
        </div>
      )
    } else {
      return <p>No Shoes</p>
    }
  }
}

const mapState = state => {
  return {
    shoes: state.shoes
  }
}

const mapDispatch = dispatch => ({
  gotShoes: () => dispatch(getShoesThunk()),
  addToCart: item => dispatch(addToCartThunk(item))
})

export const allShoes = connect(mapState, mapDispatch)(Shoes)
