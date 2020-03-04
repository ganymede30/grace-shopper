const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const initialState = {items: []}

export const addToCart = item => ({
  type: ADD_TO_CART,
  item
})

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  id
})

export const addToCartDispatcher = item => dispatch => {
  // the first time called, items will be empty.
  dispatch(addToCart(item))
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, items: [...state.items, ...action.item]}
    default:
      return state
  }
}
