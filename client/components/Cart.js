import React, {Component} from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem'
import axios from 'axios'

export class Cart extends Component {
  async componentDidMount() {
    const {data} = await axios.get('/api/cart')
    console.log(data, 'CART IN FRONT END')
  }

  render() {
    const {items} = this.props
    return (
      <div>
        {items.length === 0 ? (
          'Cart is empty'
        ) : (
          <div>
            <div>You have {items.length} items in the cart.</div>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Product Information</th>
                  <th>Qty</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                </tr>
              </thead>
            </table>
          </div>
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
