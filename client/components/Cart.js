import React, {useEffect} from 'react'
import {connect} from 'react-redux'
// import CartItem from './CartItem'
import {getAllItemsThunk} from '../store/cart'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

const columns = [
  {id: 'product', label: 'Product', minWidth: 100},
  {id: 'info', label: 'Product Info', minWidth: 100},
  {
    id: 'quantity',
    label: 'Qty',
    minWidth: 40,
    align: 'right',
    format: value => value.toLocaleString()
  },
  {
    id: 'price',
    label: 'Price',
    minWidth: 40,
    align: 'right',
    format: value => value.toLocaleString()
  }
]

function createData(product, info, quantity, price) {
  return {product, info, quantity, price}
}

const useStyles = makeStyles({
  root: {
    width: '60%'
  },
  container: {
    maxHeight: 440
  }
})

const Cart = ({items, fetchCart}) => {
  useEffect(() => {
    fetchCart()
  }, [])

  console.log(items, 'Items')
  const rows = items.map(item =>
    createData(item.imageUrl, item.model, item.qty, item.price, item.total)
  )

  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{minWidth: column.minWidth}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

const mapState = state => ({
  items: state.cart.items
})

const mapDispatch = dispatch => ({
  fetchCart: () => dispatch(getAllItemsThunk())
})

export default connect(mapState, mapDispatch)(Cart)
