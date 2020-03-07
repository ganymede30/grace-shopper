import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getShoesThunk} from '../store/shoes'

import {addToOrderThunk} from '../store/order'
import {addToCartThunk} from '../store/cart'
import {Shoe} from './Shoe'

class Shoes extends Component {
  componentDidMount() {
    this.props.gotShoes()
  }
  render() {
    const {user, cart} = this.props.shoes
    const {shoes} = this.props.shoes.shoes
    // console.log('user:', user);
    // console.log('cart:', cart);
    if (shoes.length) {
      return (
        <div>
          {shoes.map(shoe => {
            return (
              <div key={shoe.id}>
                <Link to={`/shoes/${shoe.id}`}>
                  <Shoe shoe={shoe} />
                </Link>
                <button
                  type="submit"
                  onClick={
                    user.id
                      ? () => this.props.addToOrder(shoe)
                      : () => this.props.addToCart(shoe)
                  }
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
    shoes: state
  }
}

const mapDispatch = dispatch => ({
  gotShoes: () => dispatch(getShoesThunk()),
  addToCart: item => dispatch(addToCartThunk(item)),
  addToOrder: item => dispatch(addToOrderThunk(item))
})

export const allShoes = connect(mapState, mapDispatch)(Shoes)
