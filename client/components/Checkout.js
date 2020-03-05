import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const successPayment = data => {
  alert('Payment Successful')
}

const errorPayment = data => {
  alert('Payment Error')
}

const onToken = amount => token =>
  axios
    .post('/api/checkout/create-payment-intent', {
      source: token.id,
      currency: 'USD',
      amount: amount
    })
    .then(successPayment)
    .catch(errorPayment)

const Checkout = ({amount}) => (
  <StripeCheckout
    amount={amount}
    token={onToken(amount)}
    currency="USD"
    stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
  />
)

export default Checkout
