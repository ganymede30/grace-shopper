import React from 'react'
import {Shoe} from './Shoe'
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

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
})

function createData(id, totalPrice, shippingName, shippingAddress, products) {
  return {id, totalPrice, shippingName, shippingAddress, products}
}

export const Order = props => {
  const products = props.order.shoes.map(shoe => {
    return shoe.model
  })
  console.log('props', props)
  console.log('props.order', props.order)
  if (props.order.shoes.length) {
    const rows = props.order.map(order => {
      createData(
        products.join(', '),
        order.id,
        order.totalPrice,
        order.shippingName,
        order.shippingAddress
      )
    })
    const classes = useStyles()
    console.log('products', products.join(', '))
    console.log('props.order', props.order)
    return (
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
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
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.products}</TableCell>
                  <TableCell align="right">{row.shippingAddress}</TableCell>
                  <TableCell align="right">{row.shippingName}</TableCell>
                  <TableCell align="right">{row.totalPrice}</TableCell>
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
