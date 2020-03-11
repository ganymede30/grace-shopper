import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOrdersForUserThunk} from '../store/order'
import {me} from '../store/user'
import {Order} from './Order'
import {Link} from 'react-router-dom'
//potential stateless order component needed
export class Orders extends Component {
  componentDidMount() {
    const id = this.props.user.id
    console.log(this.props)
    console.log(id)
    this.props.gotOrders(id)
    this.props.gotUser()
  }
  render() {
    const {orders} = this.props

    return <div></div>
    // if (orders.length){
    //   return (
    //     <div>
    //       {orders.map(order => {
    //         return (
    //           <Order order={order}/>
    //         )
    //       })}
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       No Orders
    //     </div>
    //   )
    // }
  }
}

const mapState = state => {
  return {
    orders: state.orders,
    user: state.user
  }
}

const mapDispatch = dispatch => ({
  gotOrders: userId => dispatch(getOrdersForUserThunk(userId)),
  gotUser: () => dispatch(me())
})

export const allOrdersForUser = connect(mapState, mapDispatch)(Orders)
