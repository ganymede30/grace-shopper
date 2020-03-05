import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {ButtonGroup, Button} from '@material-ui/core'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div style={{backgroundColor: '#C1C7D8'}}>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/cart">
            <img src="shoe.png" />
          </Link>
        </div>
      ) : (
        <div id="navbar">
          {/* The navbar will show these links before you log in */}
          <div id="leftNav">
            <Link to="/">SHOELALA</Link>
            <form>
              <input
                type="text"
                name="searchQuery"
                placeholder="Pick Your Kicks"
              ></input>
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
