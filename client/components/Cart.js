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
  },
  fontStylesHead: {
    fontSize: '1em',
    color: '#87898d '
  },
  fontStylesBody: {
    fontSize: '1.05em'
  },
  images: {
    height: '20em',
    backgroundSize: 'auto'
  }
})

function ccyFormat(num) {
  return `${num.toFixed(2)}`
}

function priceRow(qty, unit) {
  return qty * unit
}

function createRow(product, productInfo, qty, unitPrice, brand) {
  const price = priceRow(qty, unitPrice)
  return {product, productInfo, qty, unitPrice, price, brand}
}

function subtotal(items) {
  return items.map(({price}) => price).reduce((sum, i) => sum + i, 0)
}

const Cart = ({items, fetchCart, fetchOrder}) => {
  useEffect(() => {
    // fetchOrder is not persistent after refresh because the userId is undefined.
    ;(async () => {
      try {
        await fetchOrder()
        console.log(fetchOrder())
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  const rows = items.map(item =>
    createRow(
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
                    <TableCell className={classes.fontStylesBody}>
                      {row.brand} | {row.productInfo}
                    </TableCell>
                    <TableCell className={classes.fontStylesBody}>
                      {row.qty}
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
  console.log('state: ', state)
  return {
    // items: state.cart.items,
    items: state.order.items
  }
}

const mapDispatch = dispatch => ({
  fetchCart: () => dispatch(getAllItemsThunk()),
  fetchOrder: () => dispatch(allItemsInOrderThunk())
})

export default connect(mapState, mapDispatch)(Cart)
