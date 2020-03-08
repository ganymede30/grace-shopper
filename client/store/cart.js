import axios from 'axios'

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const GET_ALL_ITEMS = 'GET_ALL_ITEMS'

const initialState = {
  items: []
}

export const addToCart = item => ({
  type: ADD_TO_CART,
  item
})

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  id
})

export const getAllItems = ({items}) => ({
  type: GET_ALL_ITEMS,
  items
})

export const addToCartThunk = item => async dispatch => {
  try {
    await axios.post('/api/cart', item) //post for the session;
    //await axios.post('/api/orders', item)
    dispatch(addToCart(item))
  } catch (error) {
    console.error(error)
  }
}

export const getAllItemsThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/cart')
    // console.log('cart data:', data)
    dispatch(getAllItems(data))
  } catch (error) {
    console.error(error)
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, items: [...state.items, action.item]}
    case GET_ALL_ITEMS:
      return {...state, items: [action.items]}
    default:
      return state
  }
}
