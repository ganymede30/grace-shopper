import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOrdersForUserThunk} from '../store/order'
import {me} from '../store/user'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Grid,
  Button
} from '@material-ui/core/'

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

function createData(id, totalPrice, shippingName, shippingAddress, products) {
  return {id, totalPrice, shippingName, shippingAddress, products}
}

//potential stateless order component needed
export class Orders extends Component {
  componentDidMount() {
    const id = this.props.user.id
    this.props.gotOrders(id)
  }
  render() {
    const orders = this.props.orders
    if (orders.length) {
      const rows = []
      orders.map(order => {
        const products = order.shoes.map(shoe => {
          return shoe.model
        })
        rows.push(
          createData(
            order.id,
            order.totalPrice,
            order.shippingName,
            order.shippingAddress,
            products.join(', ')
          )
        )
      })
      return (
        <div>
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              paddingTop: '2%',
              paddingBottom: '2%',
              color: '#fff',
              backgroundColor: '#242562'
            }}
          >
            YOUR ORDERS
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Order</TableCell>
                  <TableCell align="right">Shipping Address</TableCell>
                  <TableCell align="right">Buyer</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.products}</TableCell>
                    <TableCell align="right">{row.shippingAddress}</TableCell>
                    <TableCell align="right">{row.shippingName}</TableCell>
                    <TableCell align="right">{`$${row.totalPrice}`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )
    } else {
      return <div>No Orders</div>
    }
  }
}

const mapState = state => {
  return {
    orders: state.order.orders,
    user: state.user
  }
}

const mapDispatch = dispatch => ({
  gotOrders: userId => dispatch(getOrdersForUserThunk(userId)),
  gotUser: () => dispatch(me())
})

export const allOrdersForUser = connect(mapState, mapDispatch)(Orders)
