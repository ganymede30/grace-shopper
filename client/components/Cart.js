import React, {useEffect, Fragment} from 'react'
import {connect} from 'react-redux'
import {getAllItemsThunk} from '../store/cart'
import {allItemsInOrderThunk} from '../store/order'
import {makeStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import {Paper, Grid} from '@material-ui/core/'

const TAX_RATE = 0.0

const useStyles = makeStyles({
  table: {
    width: '100%'
  }
})

function ccyFormat(num) {
  return `${num.toFixed(2)}`
}

function priceRow(qty, unit) {
  return qty * unit
}

function createRow(product, productInfo, qty, unitPrice) {
  const price = priceRow(qty, unitPrice)
  return {product, productInfo, qty, unitPrice, price}
}

function subtotal(items) {
  return items.map(({price}) => price).reduce((sum, i) => sum + i, 0)
}

const Cart = ({items, userId, fetchCart, fetchOrder}) => {
  useEffect(() => {
    // fetchOrder is not persistent after refresh because the userId is undefined.
    fetchOrder()
    fetchCart()
  }, [])

  const rows = items.map(item =>
    createRow(item.imageUrl, item.model, item.qty, item.price)
  )

  const invoiceSubtotal = subtotal(rows)
  const invoiceTaxes = TAX_RATE * invoiceSubtotal
  const invoiceTotal = invoiceTaxes + invoiceSubtotal
  const classes = useStyles()

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={8} style={{padding: '1% 2%'}}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Product Info</TableCell>
                  <TableCell align="right">Qty</TableCell>
                  <TableCell align="right">Unit Price</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.product}>
                    <TableCell>
                      <div>
                        <img
                          style={{
                            height: 130,
                            backgroundSize: 'auto'
                          }}
                          src={row.product}
                        />
                      </div>
                    </TableCell>
                    <TableCell>{row.productInfo}</TableCell>
                    <TableCell>{row.qty}</TableCell>
                    <TableCell>{ccyFormat(row.unitPrice)}</TableCell>
                    <TableCell>{ccyFormat(row.price)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={4} style={{padding: '1% 2%'}}>
          <TableContainer style={{width: '70%'}} component={Paper}>
            <Table aria-label="table">
              <TableHead>
                <TableRow>
                  <TableCell>Summary</TableCell>
                  <TableCell align="right">{items.length} Items</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{borderBottom: 'unset'}}>
                    Subtotal
                  </TableCell>
                  <TableCell style={{borderBottom: 'unset'}} align="right">
                    {ccyFormat(invoiceSubtotal)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tax</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Fragment>
  )
}

const mapState = state => {
  // console.log('state: ', state)
  return {
    // items: state.cart.items,
    items: state.order.items,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => ({
  fetchCart: () => dispatch(getAllItemsThunk()),
  fetchOrder: () => dispatch(allItemsInOrderThunk())
})

export default connect(mapState, mapDispatch)(Cart)
