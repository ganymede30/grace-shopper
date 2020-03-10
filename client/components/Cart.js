import React, {useEffect, Fragment} from 'react'
import {connect} from 'react-redux'
import {
  gotUsersCart,
  incrementThunk,
  decrementThunk,
  removeThunk
} from '../store/order'
import {makeStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import {Paper, Grid, Button} from '@material-ui/core/'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import Checkout from './Checkout'

const TAX_RATE = 0.1

const useStyles = makeStyles({
  table: {
    width: '100%'
  },
  fontStylesHead: {
    fontSize: '0.85em',
    color: '#87898d '
  },
  fontStylesBody: {
    fontSize: '0.85em'
  },
  images: {
    height: '13em',
    backgroundSize: 'auto'
  },
  button: {
    color: '#87898d',
    marginTop: '-10px'
  }
})

function ccyFormat(num) {
  return `${num.toFixed(2)}`
}

function priceRow(qty, unit) {
  return qty * unit
}

function createRow(shoeId, product, productInfo, qty, unitPrice, brand) {
  const price = priceRow(qty, unitPrice)
  return {shoeId, product, productInfo, qty, unitPrice, price, brand}
}

function subtotal(items) {
  return items.map(({price}) => price).reduce((sum, i) => sum + i, 0)
}

const Cart = ({items, fetchCart, fetchOrder, increment, decrement, remove}) => {
  useEffect(() => {
    fetchOrder()
    // fetch the order api/userCart every time.
  }, [])

  const rows = items.map(item =>
    createRow(
      item.id,
      item.imageUrl,
      item.model,
      item.OrderShoes.quantity,
      item.price,
      item.brand
    )
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
                  <TableCell className={classes.fontStylesHead}>
                    PRODUCT
                  </TableCell>
                  <TableCell className={classes.fontStylesHead}>
                    PRODUCT INFO
                  </TableCell>
                  <TableCell className={classes.fontStylesHead}>QTY</TableCell>
                  <TableCell className={classes.fontStylesHead}>
                    UNIT PRICE
                  </TableCell>
                  <TableCell align="right" className={classes.fontStylesHead}>
                    TOTAL
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.product}>
                    <TableCell>
                      <div>
                        <img className={classes.images} src={row.product} />
                      </div>
                    </TableCell>
                    <TableCell
                      style={{paddingTop: '8.5%'}}
                      className={classes.fontStylesBody}
                    >
                      {row.brand} | {row.productInfo}
                      {
                        <div style={{margin: '20px -3%'}}>
                          <Button
                            className={classes.button}
                            onClick={() => remove(row.shoeId)}
                          >
                            Remove
                          </Button>
                        </div>
                      }
                    </TableCell>

                    <TableCell
                      style={{paddingTop: '7.9%'}}
                      className={classes.fontStylesBody}
                    >
                      {row.qty}
                      {
                        <div style={{margin: '15px -20px'}}>
                          <RemoveIcon
                            onClick={
                              row.qty > 1
                                ? () => decrement(row.shoeId)
                                : () => remove(row.shoeId)
                            }
                          />

                          <AddIcon onClick={() => increment(row.shoeId)} />
                        </div>
                      }
                    </TableCell>
                    <TableCell className={classes.fontStylesBody}>
                      {ccyFormat(row.unitPrice)}
                    </TableCell>
                    <TableCell align="right" className={classes.fontStylesBody}>
                      {ccyFormat(row.price)}
                    </TableCell>
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
                  <TableCell className={classes.fontStylesHead}>
                    Summary
                  </TableCell>
                  <TableCell className={classes.fontStylesHead} align="right">
                    {items.length} Items
                  </TableCell>
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
            <TableRow align="right">
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  style={{marginLeft: '3.3em', height: '3.5em'}}
                  href={<Checkout />}
                >
                  CONTINUE TO CHECKOUT
                </Button>
              </TableCell>
            </TableRow>
          </TableContainer>
        </Grid>
      </Grid>
    </Fragment>
  )
}

const mapState = state => {
  return {
    items: state.order.items
  }
}

const mapDispatch = dispatch => ({
  fetchOrder: () => dispatch(gotUsersCart()),
  increment: shoeId => dispatch(incrementThunk(shoeId)),
  decrement: shoeId => dispatch(decrementThunk(shoeId)),
  remove: shoeId => dispatch(removeThunk(shoeId))
})

export default connect(mapState, mapDispatch)(Cart)
