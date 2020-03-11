import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOrdersForUserThunk} from '../store/order'
import {me} from '../store/user'
import {Order} from './Order'
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
    console.log(id)
    this.props.gotOrders(id)
    this.props.gotUser()
    console.log(this.props)
  }
  render() {
    const orders = [
      {
        id: 3,
        totalPrice: 4000,
        isCart: false,
        shippingAddress: '5 Hanover Square New York, Floor 11, NY 1004',
        shippingName: 'Michael Kenny',
        createdAt: '2020-03-10T22:36:06.783Z',
        updatedAt: '2020-03-10T22:36:06.823Z',
        userId: 5,
        shoes: [
          {
            id: 5,
            model: 'yeezy 700 v3 "azael"',
            price: 580,
            brand: 'Adidas',
            imageUrl:
              'https://cdn.flightclub.com/750/TEMPLATE/161333/1.jpg?w=360',
            stock: null,
            createdAt: '2020-03-10T22:36:06.501Z',
            updatedAt: '2020-03-10T22:36:06.501Z',
            OrderShoes: {
              quantity: 1,
              createdAt: '2020-03-10T22:36:06.815Z',
              updatedAt: '2020-03-10T22:36:06.815Z',
              shoeId: 5,
              orderId: 3
            }
          },
          {
            id: 7,
            model: 'Air Jordan 11 retro "gamma blue"',
            price: 420,
            brand: 'Air Jordan',
            imageUrl:
              'https://cdn.flightclub.com/750/TEMPLATE/011834/1.jpg?w=360',
            stock: null,
            createdAt: '2020-03-10T22:36:06.501Z',
            updatedAt: '2020-03-10T22:36:06.501Z',
            OrderShoes: {
              quantity: 1,
              createdAt: '2020-03-10T22:36:06.815Z',
              updatedAt: '2020-03-10T22:36:06.815Z',
              shoeId: 7,
              orderId: 3
            }
          },
          {
            id: 8,
            model: 'yeezy boost 350 v2 "citrin reflective"',
            price: 315,
            brand: 'Adidas',
            imageUrl:
              'https://cdn.flightclub.com/750/TEMPLATE/152975/1.jpg?w=360',
            stock: null,
            createdAt: '2020-03-10T22:36:06.501Z',
            updatedAt: '2020-03-10T22:36:06.501Z',
            OrderShoes: {
              quantity: 1,
              createdAt: '2020-03-10T22:36:06.815Z',
              updatedAt: '2020-03-10T22:36:06.815Z',
              shoeId: 8,
              orderId: 3
            }
          }
        ]
      },
      {
        id: 2,
        totalPrice: 4000,
        isCart: false,
        shippingAddress: '5 Hanover Square New York, Floor 11, NY 1004',
        shippingName: 'Michael Kenny',
        createdAt: '2020-03-10T22:36:06.783Z',
        updatedAt: '2020-03-10T22:36:06.823Z',
        userId: 5,
        shoes: [
          {
            id: 5,
            model: 'yeezy 700 v3 "azael"',
            price: 580,
            brand: 'Adidas',
            imageUrl:
              'https://cdn.flightclub.com/750/TEMPLATE/161333/1.jpg?w=360',
            stock: null,
            createdAt: '2020-03-10T22:36:06.501Z',
            updatedAt: '2020-03-10T22:36:06.501Z',
            OrderShoes: {
              quantity: 1,
              createdAt: '2020-03-10T22:36:06.815Z',
              updatedAt: '2020-03-10T22:36:06.815Z',
              shoeId: 5,
              orderId: 3
            }
          },
          {
            id: 7,
            model: 'Air Jordan 11 retro "gamma blue"',
            price: 420,
            brand: 'Air Jordan',
            imageUrl:
              'https://cdn.flightclub.com/750/TEMPLATE/011834/1.jpg?w=360',
            stock: null,
            createdAt: '2020-03-10T22:36:06.501Z',
            updatedAt: '2020-03-10T22:36:06.501Z',
            OrderShoes: {
              quantity: 1,
              createdAt: '2020-03-10T22:36:06.815Z',
              updatedAt: '2020-03-10T22:36:06.815Z',
              shoeId: 7,
              orderId: 3
            }
          },
          {
            id: 8,
            model: 'yeezy boost 350 v2 "citrin reflective"',
            price: 315,
            brand: 'Adidas',
            imageUrl:
              'https://cdn.flightclub.com/750/TEMPLATE/152975/1.jpg?w=360',
            stock: null,
            createdAt: '2020-03-10T22:36:06.501Z',
            updatedAt: '2020-03-10T22:36:06.501Z',
            OrderShoes: {
              quantity: 1,
              createdAt: '2020-03-10T22:36:06.815Z',
              updatedAt: '2020-03-10T22:36:06.815Z',
              shoeId: 8,
              orderId: 3
            }
          }
        ]
      }
    ]

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
      console.log(rows)
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
    orders: state.orders,
    user: state.user
  }
}

const mapDispatch = dispatch => ({
  gotOrders: userId => dispatch(getOrdersForUserThunk(userId)),
  gotUser: () => dispatch(me())
})

export const allOrdersForUser = connect(mapState, mapDispatch)(Orders)
