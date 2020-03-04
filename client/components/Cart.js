import React, {Component} from 'react'
import {connect} from 'react-redux'
// import { addToCartDispatcher } from '../store/cart'

export class Cart extends Component {
  render() {
    const {items} = this.props
    // console.log(addToCart, 'THIS IS THE CART')
    return (
      <div>
        {items.length ? (
          'Cart is empty'
        ) : (
          <div>You have {items.length} items in the cart.</div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  items: state.cart.items
})

const mapDispatch = dispatch => ({
  //   addToCart: () => dispatch(addToCartDispatcher())
  // the addToCart will come from the products page.
})

export default connect(mapState, mapDispatch)(Cart)
