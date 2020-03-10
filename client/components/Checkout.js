import React, {Component} from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import {STRIPE_PUBLISHABLE_KEY} from '../constants/stripe'

const successPayment = data => {
  alert('Payment Successful')
}

const errorPayment = data => {
  alert('Payment Error')
}

class Checkout extends Component {
  handleToken(token, addresses) {
    axios
      .post(`/api/checkout/`, {
        source: token.id,
        currency: 'USD',
        shippingName: addresses.shipping_name,
        shippingAddress: `${addresses.shipping_address_line1} ${addresses.shipping_address_city} ${addresses.shipping_address_state} ${addresses.shipping_address_zip}`
      })
      .then(successPayment)
      .catch(errorPayment)
  }

  render() {
    const {amount} = this.props
    return (
      <StripeCheckout
        amount={amount}
        currency="USD"
        label="Checkout"
        shippingAddress={true}
        billingAddress={true}
        stripeKey={STRIPE_PUBLISHABLE_KEY}
        token={this.handleToken}
      />
    )
  }
}

export default Checkout
