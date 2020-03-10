import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {makeStyles} from '@material-ui/core/styles'
import {ButtonGroup, Button, TextField, InputAdornment} from '@material-ui/core'
import Search from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}))

function Navbar({handleClick, isLoggedIn}) {
  const classes = useStyles()
  return (
    <div style={{backgroundColor: '#C1C7D8'}}>
      <nav>
        {isLoggedIn ? (
          <div id="navbar">
            {/* The navbar will show these links after you log in */}
            <div id="leftNav">
              <Link to="/">
                <img src="shoelala.png" id="logo" />
              </Link>
              <form>
                <TextField
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  label="Pick Your Kicks"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    )
                  }}
                ></TextField>
              </form>
            </div>
            <ButtonGroup
              id="rightNav"
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button id="login" variant="text">
                <Link to="/dashboard" className="navButton">
                  <p>Hello, User</p>
                </Link>
              </Button>
              <Button id="cart" variant="text" className="navButton">
                <Link to="/cart" style={{margin: 0}}>
                  <img src="shoe.png" id="cartImg" />
                </Link>
              </Button>
            </ButtonGroup>
          </div>
        ) : (
          <div id="navbar">
            {/* The navbar will show these links before you log in */}
            <div id="leftNav">
              <Link to="/">
                <img src="shoelala.png" id="logo" />
              </Link>
              <form>
                <TextField
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  label="Pick Your Kicks"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    )
                  }}
                ></TextField>
              </form>
            </div>
            <ButtonGroup
              id="rightNav"
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button id="login" variant="text">
                <Link to="/login" className="navButton">
                  <p>Join/Sign-Up</p>
                </Link>
              </Button>
              <Button id="cart" variant="text" className="navButton">
                <Link to="/cart" style={{margin: 0}}>
                  <img src="shoe.png" id="cartImg" />
                </Link>
              </Button>
            </ButtonGroup>
          </div>
        )}
      </nav>
    </div>
  )
}
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
