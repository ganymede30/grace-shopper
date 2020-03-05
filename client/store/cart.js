import axios from 'axios'

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const initialState = {
  items: [],
  total: 0
}

export const addToCart = item => ({
  type: ADD_TO_CART,
  item
})

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  id
})

export const addToCartThunk = item => async dispatch => {
  try {
    await axios.post('/api/cart', item)
    dispatch(addToCart(item))
  } catch (error) {
    console.error(error)
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, items: [...state.items, action.item]}
    default:
      return state
  }
}
